"use client"

import { useEffect, useState } from 'react';
import { GlossColumns } from '../components/GlossColumns';
import { DataTable } from '../components/DataTable';
import { Gloss } from '@/lib/Gloss';
import { Manuscript } from '@/lib/Manuscript';
import { BeatLoader } from 'react-spinners';
import Sidebar from '../components/Sidebar';
import getObjectsByCollection from '@/actions/getObjectsByCollection';
import getObjectsByValue from '@/actions/getObjectsByValue';


export default function ManuscriptPage() {
    const [selectedManuscript, setSelectedManuscript] = useState(''); // Added state to manage book selection
    const [manuscripts, setManuscripts] = useState<Manuscript[]>([]);
    const [glosses, setGlosses] = useState<Gloss[]>([]);
    const [isLoading, setIsLoading] = useState(false); 
    const [isLoadingManuscripts, setIsLoadingManuscripts] = useState(true);

    const fetchObjectsByManuscript = async (manuscript: string) => {
        //TODO: ONCE GLOSSES ARE CONNECTED TO MANUSCRIPTS
    }

    const fetchManuscriptsByCollection = async () => {
        try {
            const objectsFromCollection = await getObjectsByCollection('Glossing-Matthew');
            
            if(objectsFromCollection.itemListElement){
                const objectIds = objectsFromCollection.itemListElement.map((item) => item['@id']); // extract all ids

                let newManuscripts: Manuscript[] = [];
                for (let i = 0; i < objectIds.length; i++) {
                    await getObjectsByValue(objectIds[i]).then(obj => {
                        let manuscriptData = obj.map(item => {
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
                        newManuscripts.push(new Manuscript(manuscriptData));

                        // If we have processed 10 new glosses or this is the last object, update the state.
                        if (newManuscripts.length % 10 === 0 || i === objectIds.length - 1) {
                            // Merge newManuscripts into existing glosses state
                            setManuscripts(prevManuscripts => {
                                const uniqueManuscripts = newManuscripts.filter(newManuscript => 
                                  !prevManuscripts.find(prevManuscript => prevManuscript.title === newManuscript.title)
                                );
                                return [...prevManuscripts, ...uniqueManuscripts];
                            });
                            newManuscripts = []; // Clear newManuscripts for the next batch
                        }
                    } 
                    ).catch(console.error);
                }
            }
            setIsLoadingManuscripts(false);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchManuscriptsByCollection();
    }, []);

    const handleBrowseClick = () => {
        setIsLoading(true); // Set loading state to true when button is clicked
        fetchObjectsByManuscript(selectedManuscript); // Fetch glosses for the selected book
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
                            <BeatLoader size={5} className="translate-y-0.5" />
                        </div>
                    }
                </div>
                <div className="w-[25%] bg-gray-100 p-4 rounded-md">
                    <p className="font-semibold text-xl">Browse by Manuscripts</p>
                    <p className="py-2">Glosses of course appear in individual manuscripts. If you want to see all of the glosses transcribed out of a particular manuscript, you can do so here.</p>
                    <select className="mb-2 border-2 border-gray-200 rounded-sm w-full p-2 px-3" onChange={(e) => setSelectedManuscript(e.target.value)}>
                        <option value="">Select a Manuscript</option>
                        {manuscripts.map((manuscript, index) => (
                            <option key={index} value={manuscript.title}>
                                {manuscript.title}
                            </option>
                        ))}
                        {/* Add more options as needed */}
                    </select>
                    <button className="hover:bg-primaryHover shadow-sm bg-primary text-white px-4 rounded-md py-1 items-center gap-2" onClick={handleBrowseClick}>Browse by this manuscript</button>
                    {isLoadingManuscripts &&
                        <div className="flex pt-2 items-center gap-2">
                            <p>Loading Manuscripts to choose from</p>
                            <BeatLoader size={5} className="translate-y-0.5" />
                        </div>
                    }
                </div>
            </div> 
        </div>
    )
}
