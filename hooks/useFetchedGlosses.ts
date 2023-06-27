"use client";

import { useState, useEffect } from "react";
import { Gloss } from "@/lib/Gloss";
import getObjectsByValue from "@/actions/getObjectsByValue";
import getObjectsByCollection from "@/actions/getObjectsByCollection";

export const useFetchedGlosses = (collectionName: string) => {
  const [glosses, setGlosses] = useState<Gloss[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchObjectsByCollection = async () => {
      if (glosses.length === 0) {
        try {
          const objectsFromCollection = await getObjectsByCollection(
            collectionName
          );

          if (objectsFromCollection.itemListElement) {
            const objectIds = objectsFromCollection.itemListElement.map(
              (item) => item["@id"]
            ); // extract all ids

            // Define the chunk size
            const chunkSize = 50;
            for (let i = 0; i < objectIds.length; i += chunkSize) {
              const currentChunk = objectIds.slice(i, i + chunkSize);

              // Create a promise for each id in the current chunk to fetch its data
              const fetchPromises = currentChunk.map((id) =>
                getObjectsByValue(id)
              );

              // Wait for all promises to resolve
              const fetchedObjects = await Promise.all(fetchPromises);

              const newGlosses: Gloss[] = [];

              // Process each fetched object
              for (let j = 0; j < fetchedObjects.length; j++) {
                const obj = fetchedObjects[j];

                let glossData = obj
                  .map((item) => {
                    if (item.body && typeof item.body === "object") {
                      // Check that item.body exists and is an object
                      const property = Object.keys(item.body)[0]; // gets the first property of the body object
                      return {
                        [property]: item.body[property].value,
                      };
                    } else {
                      return {}; // Return an empty object if item.body is undefined or not an object
                    }
                  })
                  .reduce((result, current) => {
                    return { ...result, ...current };
                  }, {});

                newGlosses.push(new Gloss(glossData));
              }

              // Add new glosses to the state
              setGlosses((prevGlosses) => [...prevGlosses, ...newGlosses]);
            }
          }

          setIsLoading(false); // Data fetching completed
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchObjectsByCollection();
  }, [collectionName]);

  return { glosses, isLoading };
};
