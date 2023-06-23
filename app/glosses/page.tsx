"use client"

import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import getObjectsByValue from '@/actions/getObjectsByValue';
import getObjectsByCollection from '@/actions/getObjectsByCollection';
import { Columns } from "./components/Columns"
import { DataTable } from "./components/DataTable"
import { Gloss } from '@/lib/Gloss';

export default async function Glosses() {
    const [glosses, setGlosses] = useState<Gloss[]>([]);

    useEffect(() => {
        const fetchObjectsByCollection = async () => {
            try {
                const objectsFromCollection = await getObjectsByCollection('Glossing-Matthew-Named-Glosses');
                if(objectsFromCollection.itemListElement){
                    const objectIds = objectsFromCollection.itemListElement.map((item) => item['@id']); // extract all ids
                    
                    // Instead of waiting for all promises to resolve, handle them one by one:
                    for (const id of objectIds) {
                        getObjectsByValue(id).then(obj => {
                            // Assuming obj is the array of objects each representing a Gloss property
                            let glossData = obj.map(item => {
                                const property = Object.keys(item.body)[0]; // gets the first property of the body object
                                return {
                                    [property]: item.body[property].value
                                };
                            }).reduce((result, current) => {
                                return { ...result, ...current };
                            }, {});

                            // Update glosses state
                            setGlosses(prevGlosses => [...prevGlosses, new Gloss(glossData)]);
                        }).catch(console.error);
                    }
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchObjectsByCollection();
    }, []);

    return (
        <div className="flex gap-4 p-8">
            <Sidebar />
            <div className="h-screen w-screen bg-white rounded-md p-8 border-gold border overflow-auto">
                <DataTable columns={Columns} data={glosses} />
            </div> 
        </div>
    )
}
