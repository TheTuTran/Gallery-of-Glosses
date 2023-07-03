"use client";

import { useEffect, useState } from "react";
import { GlossColumns } from "../components/GlossColumns";
import { DataTable } from "@/components/DataTable";
import { Gloss } from "@/lib/Gloss";
import { BeatLoader } from "react-spinners";
import Sidebar from "../components/Sidebar";
import getObjectsByValue from "@/actions/getObjectsByValue";
import getObjectsByCollection from "@/actions/getObjectsByCollection";
import Box from "@/components/Box";

export default function TagPage() {
  const [selectedTag, setSelectedTag] = useState("");
  const [glosses, setGlosses] = useState<Gloss[]>([]);
  const [displayGlosses, setDisplayGlosses] = useState<Gloss[]>(glosses);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchObjectsByCollection = async () => {
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
          await getObjectsByValue(objectIds[i])
            .then((obj) => {
              let glossData = obj
                .map((item) => {
                  if (
                    item.body &&
                    typeof item.body === "object" &&
                    item.body[0] !== ""
                  ) {
                    const property = Object.keys(item.body)[0];
                    return {
                      [property]: item.body[property].value,
                    };
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

              console.log(newGlosses);
              if (newGlosses.length % 10 === 0 || i === objectIds.length - 1) {
                setGlosses((prevGlosses) => [...prevGlosses, ...newGlosses]);
                setAllTags((prevTags) => [...prevTags, ...newTags]);

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
  };

  useEffect(() => {
    fetchObjectsByCollection();
  }, []);

  const handleBrowseClick = () => {
    const filteredGlosses = glosses.filter((gloss) =>
      gloss.tags.items.includes(selectedTag)
    );
    setDisplayGlosses(filteredGlosses);
  };

  useEffect(() => {
    setDisplayGlosses(glosses);
  }, [glosses]);

  return (
    <div className="flex gap-4 p-8">
      <Sidebar />
      <Box className="h-fit min-h-screen rounded-md p-8 overflow-auto flex gap-4">
        <div className="w-[75%] bg-gray-100 p-4 rounded-md">
          <DataTable columns={GlossColumns} data={displayGlosses} />
        </div>
        <div className="w-[25%] bg-gray-100 p-4 rounded-md">
          <p className="font-semibold text-xl">Browse by Tags</p>
          <p className="py-2">
            Various glosses share certain features or terms. We have selectively
            ascribed tags to capture this information. Here you may browse
            according to term or feature tag and see all the glosses that have
            shared content in this way. Tags will show up as the glosses with
            tags get rendered in
          </p>
          <select
            className="mb-2 border-2 border-gray-200 rounded-sm w-full p-2 px-3"
            onChange={(e) => setSelectedTag(e.target.value)}
          >
            <option value="">Select a Tag</option>
            {allTags.map((tag, index) => (
              <option key={index} value={tag}>
                {tag}
              </option>
            ))}
          </select>
          <button
            className="hover:bg-primaryHover shadow-sm bg-primary text-white px-4 rounded-md py-2 items-center gap-1"
            onClick={handleBrowseClick}
          >
            Browse by this tag
          </button>
          {isLoading && (
            <div className="flex pt-2 items-center gap-2">
              <p>Loading glosses and tags</p>
              <BeatLoader size={5} className="translate-y-1" />
            </div>
          )}
        </div>
      </Box>
    </div>
  );
}
