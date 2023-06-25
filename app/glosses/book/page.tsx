"use client"

import { useState } from 'react';
import { GlossColumns } from '../components/GlossColumns';
import { DataTable } from '../components/DataTable';
import { Gloss } from '@/lib/Gloss';
import { BeatLoader } from 'react-spinners';
import Sidebar from '../components/Sidebar';
import getObjectsByValue from '@/actions/getObjectsByValue';
import getObjectsByCollection from '@/actions/getObjectsByCollection';

export default function Book() {
    const [book, setBook] = useState(''); // Added state to manage book selection
    const [glosses, setGlosses] = useState<Gloss[]>([]);
    const [isLoading, setIsLoading] = useState(false); // Initially set to false


    const fetchObjectsByCollection = async (book: string) => {
        try {
            const objectsFromCollection = await getObjectsByCollection(book);
            if(objectsFromCollection.itemListElement){
                const objectIds = objectsFromCollection.itemListElement.map((item) => item['@id']); // extract all ids

                let newGlosses: Gloss[] = [];
                for (let i = 0; i < objectIds.length; i++) {
                    await getObjectsByValue(objectIds[i]).then(obj => {
                        let glossData = obj.map(item => {
                            if (item.body && typeof item.body === 'object' && item.body[0] !== '') { // Check that item.body exists and is an object
                                const property = Object.keys(item.body)[0]; // gets the first property of the body object
                                return {
                                    [property]: item.body[property].value
                                };
                            }
                        }).reduce((result, current) => {
                            return { ...result, ...current };
                        }, {});

                        if (glossData) {
                            newGlosses.push(new Gloss(glossData));
                        }

                        // If we have processed 10 new glosses or this is the last object, update the state.
                        if (newGlosses.length % 10 === 0 || i === objectIds.length - 1) {
                            // Merge newGlosses into existing glosses state
                            setGlosses(prevGlosses => [...prevGlosses, ...newGlosses]);
                            newGlosses = []; // Clear newGlosses for the next batch
                        }
                    }).catch(console.error);
                }
            }
            setIsLoading(false); // Data fetching completed
        } catch (error) {
            console.error(error);
        }
    }

    const handleBrowseClick = () => {
        setIsLoading(true); // Set loading state to true when button is clicked
        fetchObjectsByCollection(book); // Fetch glosses for the selected book
    };

    return (
        <div className="flex gap-4 p-8">
            <Sidebar />
            <div className="h-fit min-h-screen bg-white rounded-md p-8 border-gold border overflow-auto flex gap-4">
                <div className="w-[75%] bg-gray-100 p-4 rounded-md">
                    <DataTable columns={GlossColumns} data={glosses} />
                    {isLoading && 
                        <div className="flex pt-10 items-center gap-2">
                            <p>Loading glosses</p>
                            <BeatLoader size={5} className="translate-y-1" />
                        </div>
                    }
                </div>
                <div className="w-[25%] bg-gray-100 p-4 rounded-md">
                    <p className="py-2">Medieval scholars and scribes glossed over authoritative texts that were important to their culture. Here you can browse glosses on those authoritative books</p>
                    <select className="mb-2 border-2 border-gray-200 rounded-sm w-full p-2 px-3" onChange={(e) => setBook(e.target.value)}>
                        <option value="">Select a Book</option>
                        <option value="Glossing-Matthew-Named-Glosses">Book of Matthew</option>
                        {/* Add more options as needed */}
                    </select>
                    <button className="hover:bg-primaryHover shadow-sm bg-primary text-white px-4 rounded-md py-1 items-center gap-1" onClick={handleBrowseClick}>Browse this book</button>
                </div>
            </div> 
        </div>
    )
}
