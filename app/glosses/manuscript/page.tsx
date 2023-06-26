"use client"

import { useEffect, useState } from 'react';
import { GlossColumns } from '../components/GlossColumns';
import { DataTable } from '@/components/DataTable';
import { Gloss } from '@/lib/Gloss';
import { BeatLoader } from 'react-spinners';
import Sidebar from '../components/Sidebar';
import { useFetchedManuscripts } from '@/hooks/useFetchedManuscripts';


export default function ManuscriptPage() {
    const [selectedManuscript, setSelectedManuscript] = useState(''); // Added state to manage book selection
    const [glosses, setGlosses] = useState<Gloss[]>([]);
    const [isLoading, setIsLoading] = useState(false); 
    const { manuscripts, isLoading: isLoadingManuscripts } = useFetchedManuscripts('Glossing-Matthew-Named-Glosses');

    const fetchObjectsByManuscript = async (manuscript: string) => {
        //TODO: ONCE GLOSSES ARE CONNECTED TO MANUSCRIPTS
    }

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
