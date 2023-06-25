"use client"

import { useState, useEffect } from 'react';
import { GlossColumns } from './components/GlossColumns';
import { DataTable } from './components/DataTable';
import { Gloss } from '@/lib/Gloss';
import { BeatLoader } from 'react-spinners';
import Sidebar from './components/Sidebar';
import getObjectsByValue from '@/actions/getObjectsByValue';
import getObjectsByCollection from '@/actions/getObjectsByCollection';

/**
 * Glosses content.
 * This page is used to display a list of glosses fetched from rerum.
 * It uses the `useState` and `useEffect` hooks to fetch and store the glosses data.
 * 
 * @returns {React.ReactElement} A JSX element representing the Glosses component.
 */
export default function Glosses() {
    const [glosses, setGlosses] = useState<Gloss[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    /**
     * Asynchronous function to fetch glosses data from a specific collection.
     * This function will iterate through each fetched object, process its data and add it to the glosses state.
     */
    useEffect(() => {
        const fetchObjectsByCollection = async () => {
            try {
                const objectsFromCollection = await getObjectsByCollection('Glossing-Matthew-Named-Glosses');
                if(objectsFromCollection.itemListElement){
                    const objectIds = objectsFromCollection.itemListElement.map((item) => item['@id']); // extract all ids

                    let newGlosses: Gloss[] = [];
                    for (let i = 0; i < objectIds.length; i++) {
                        await getObjectsByValue(objectIds[i]).then(obj => {
                            let glossData = obj.map(item => {
                                if (item.body && typeof item.body === 'object') { // Check that item.body exists and is an object
                                    const property = Object.keys(item.body)[0]; // gets the first property of the body object
                                    return {
                                        [property]: item.body[property].value
                                    };
                                } else {
                                    return {}; // Return an empty object if item.body is undefined or not an object
                                }
                            }).reduce((result, current) => {
                                return { ...result, ...current };
                            }, {});

                            newGlosses.push(new Gloss(glossData));

                            // If we have processed 10 new glosses or this is the last object, update the state.
                            if (newGlosses.length % 10 === 0 || i === objectIds.length - 1) {
                                // Merge newGlosses into existing glosses state
                                setGlosses(prevGlosses => [...prevGlosses, ...newGlosses]);
                                newGlosses = []; // Clear newGlosses for the next batch
                            }
                        } 
                        ).catch(console.error);
                    }
                }
                setIsLoading(false); // Data fetching completed
            } catch (error) {
                console.error(error);
            }
        };

        fetchObjectsByCollection();
    }, []);

    return (
        <div className="flex gap-4 p-8">
            <Sidebar />
            <div className="h-screen w-screen bg-bgColor rounded-md p-8 border-gold border overflow-auto">
                <DataTable columns={GlossColumns} data={glosses} />
                {isLoading && 
                    <div className="flex pt-10 items-center gap-2">
                        <p>Loading glosses</p>
                        <BeatLoader size={5} className="translate-y-1" />
                    </div>
                }
            </div> 
        </div>
    )
}
