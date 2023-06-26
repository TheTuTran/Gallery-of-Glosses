"use client"

import { GlossColumns } from './components/GlossColumns';
import { DataTable } from '@/components/DataTable';
import { BeatLoader } from 'react-spinners';
import Sidebar from './components/Sidebar';
import { useFetchedGlosses } from '@/hooks/useFetchedGlosses';

/**
 * Glosses content.
 * This page is used to display a list of glosses fetched from rerum.
 * It uses the `useState` and `useEffect` hooks to fetch and store the glosses data.
 * 
 * @returns {React.ReactElement} A JSX element representing the Glosses component.
 */
export default function Glosses() {
    const { glosses, isLoading } = useFetchedGlosses('Glossing-Matthew-Named-Glosses');

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
