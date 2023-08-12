import React, { useEffect, useState, useCallback } from "react";
import { GlossColumns } from "../components/GlossColumns";
import { DataTable } from "@/components/DataTable";
import { Gloss } from "@/lib/Gloss";
import { getObjectsByCollection, getObjectsByTargetId } from "@/services";

type TagContentProps = {
  setIsLoading: (loading: boolean) => void;
};

const TagContent: React.FC<TagContentProps> = ({ setIsLoading }) => {
  // Use state to handle selected tag and its corresponding glosses
  const [selectedTag, setSelectedTag] = useState("");
  const [glosses, setGlosses] = useState<Gloss[]>([]);
  const [displayGlosses, setDisplayGlosses] = useState<Gloss[]>(glosses);
  const [allTags, setAllTags] = useState<string[]>([]);

  // Function to fetch data from the "Glossing-Matthew-Named-Glosses" collection
  const fetchObjectsByCollection = useCallback(async () => {
    try {
      const objectsFromCollection = await getObjectsByCollection(
        "Glossing-Matthew-Named-Glosses"
      );
      if (objectsFromCollection.itemListElement) {
        const objectIds = objectsFromCollection.itemListElement.map(
          (item) => item["@id"]
        );

        let newGlosses: Gloss[] = [];
        let newTags: string[] = [];
        for (let i = 0; i < objectIds.length; i++) {
          await getObjectsByTargetId(objectIds[i])
            .then((obj) => {
              let glossData = obj
                .map((item) => {
                  if (item.body && typeof item.body === "object") {
                    const properties = Object.keys(item.body);

                    let glossData: any = {};

                    for (let property of properties) {
                      if (property === "tags") {
                        // Handle tags object
                        glossData["tags"] = {
                          "@type": item.body[property]["@type"],
                          items: item.body[property]["items"],
                        };
                      } else {
                        // Handle other keys
                        glossData[property] = item.body[property].value;
                      }
                    }

                    return glossData;
                  }
                })
                .reduce((result, current) => {
                  return { ...result, ...current };
                }, {});

              if (glossData) {
                const gloss = new Gloss(glossData);
                newGlosses.push(gloss);

                // Update tags
                gloss.tags.items.forEach((tag) => {
                  if (!newTags.includes(tag)) {
                    newTags.push(tag);
                  }
                });
              }

              if (newGlosses.length % 10 === 0 || i === objectIds.length - 1) {
                setGlosses((prevGlosses) => [...prevGlosses, ...newGlosses]);
                // Calculate unique tags
                const uniqueTags = Array.from(
                  new Set([...allTags, ...newTags])
                );

                setAllTags((prevTags) =>
                  Array.from(new Set([...prevTags, ...uniqueTags]))
                );
                newGlosses = [];
                newTags = [];
              }
            })
            .catch(console.error);
        }
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, [allTags]);

  // Fetch the data when component mounts
  useEffect(() => {
    fetchObjectsByCollection();
  }, [fetchObjectsByCollection]);

  const handleBrowseClick = () => {
    const filteredGlosses = glosses.filter((gloss) =>
      gloss.tags.items.includes(selectedTag)
    );
    setDisplayGlosses(filteredGlosses);
  };

  // Update the displayed glosses when glosses changes
  useEffect(() => {
    setDisplayGlosses(glosses);
  }, [glosses]);

  return (
    <>
      <div className="pb-4 flex items-center gap-4">
        <select
          className="border-2 border-gray-200 rounded-sm w-full h-8"
          onChange={(e) => setSelectedTag(e.target.value)}
        >
          <option value="">Show All Glosses</option>
          {allTags.map((tag, index) => (
            <option key={index} value={tag}>
              <div className="py-4">{tag}</div>
            </option>
          ))}
        </select>
        <button
          className="hover:bg-primaryHover shadow-sm bg-primary text-white truncate rounded-md items-center h-8 w-40"
          onClick={handleBrowseClick}
        >
          Browse by this tag
        </button>
      </div>

      <DataTable columns={GlossColumns} data={displayGlosses} />
    </>
  );
};

export default TagContent;
