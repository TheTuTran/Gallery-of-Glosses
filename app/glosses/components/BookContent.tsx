import React, { useEffect, useState } from "react";
import { GlossColumns } from "../components/GlossColumns";
import { DataTable } from "@/components/DataTable";
import { Gloss } from "@/lib/Gloss";
import { getObjectsByCollection, getObjectsByTargetId } from "@/services";

type BookContentProps = {
  setIsLoading: (loading: boolean) => void;
};

const BookContent: React.FC<BookContentProps> = ({ setIsLoading }) => {
  const [selectedBook, setSelectedBook] = useState("");
  const [glosses, setGlosses] = useState<Gloss[]>([]);
  const [displayGlosses, setDisplayGlosses] = useState<Gloss[]>(glosses);

  // This function fetches glosses objects by collection
  const fetchObjectsByCollection = async () => {
    try {
      // Fetch glosses
      const objectsFromCollection = await getObjectsByCollection(
        "Glossing-Matthew-Named-Glosses"
      );

      // Process fetched glosses
      if (objectsFromCollection.itemListElement) {
        const objectIds = objectsFromCollection.itemListElement.map(
          (item) => item["@id"]
        );

        // Initialize new glosses array
        let newGlosses: Gloss[] = [];

        // Loop through objectIds to fetch each gloss by id
        for (let i = 0; i < objectIds.length; i++) {
          await getObjectsByTargetId(objectIds[i])
            .then((obj) => {
              // Process each gloss object and create a new Gloss instance
              let glossData = obj
                .map((item) => {
                  if (item.body && typeof item.body === "object") {
                    const properties = Object.keys(item.body);

                    let glossData: any = {};

                    for (let property of properties) {
                      if (property === "tags") {
                        glossData["tags"] = {
                          "@type": item.body[property]["@type"],
                          items: item.body[property]["items"],
                        };
                      } else {
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
              }

              // Update the state every 10 glosses or when done
              if (newGlosses.length % 10 === 0 || i === objectIds.length - 1) {
                setGlosses((prevGlosses) => [...prevGlosses, ...newGlosses]);
                newGlosses = [];
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

  // Fetch glosses on mount
  useEffect(() => {
    fetchObjectsByCollection();
  }, []);

  // This function filters the glosses based on the selected book
  const handleBrowseClick = () => {
    const filteredGlosses = glosses.filter((gloss) =>
      gloss.tags.items.includes(selectedBook)
    );
    setDisplayGlosses(filteredGlosses);
  };

  // Update displayed glosses when glosses change
  useEffect(() => {
    setDisplayGlosses(glosses);
  }, [glosses]);
  return (
    <>
      <div className="pb-4 flex items-center gap-4">
        <select
          className="border-2 border-gray-200 rounded-sm w-full h-8"
          onChange={(e) => setSelectedBook(e.target.value)}
        >
          <option value="">Show All Glosses</option>
          <option value="Glossing-Matthew-Named-Glosses">
            Book of Matthew
          </option>
          {/* Add more options as needed */}
        </select>
        {/* Trigger handleBrowseClick when the button is clicked */}
        <button
          className="hover:bg-primaryHover shadow-sm bg-primary text-white truncate rounded-md items-center h-8 w-40"
          onClick={handleBrowseClick}
        >
          Browse by this Book
        </button>
      </div>
      <DataTable columns={GlossColumns} data={displayGlosses} />
    </>
  );
};

export default BookContent;
