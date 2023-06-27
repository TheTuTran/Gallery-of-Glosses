"use client";

import { GlossColumns } from "./components/GlossColumns";
import { DataTable } from "@/components/DataTable";
import { BeatLoader } from "react-spinners";
import { MdOutlineOpenInNew } from "react-icons/md";
import { useFetchedGlosses } from "@/hooks/useFetchedGlosses";
import { useState } from "react";
import useCompareModal from "@/hooks/useCompareModal";

/**
 * Glosses content.
 * This page is used to display a list of glosses fetched from rerum.
 * It uses the `useState` and `useEffect` hooks to fetch and store the glosses data.
 *
 * @returns {React.ReactElement} A JSX element representing the Glosses component.
 */
export default function Compare() {
  const [selectedRows, setSelectedRows] = useState([]);
  const { glosses, isLoading } = useFetchedGlosses(
    "Glossing-Matthew-Named-Glosses"
  );
  const compareModal = useCompareModal();

  const handleOpen = () => {
    compareModal.selectedRows = selectedRows;
    return compareModal.onOpen();
  };

  return (
    <div className="flex gap-4 p-8">
      <div className="min-h-screen w-[70%] bg-bgColor rounded-md p-8 border-gold border overflow-auto">
        <DataTable
          setSelectedRows={setSelectedRows}
          columns={GlossColumns}
          data={glosses}
        />
        {isLoading && (
          <div className="flex pt-10 items-center gap-2">
            <p>Loading glosses</p>
            <BeatLoader size={5} className="translate-y-1" />
          </div>
        )}
      </div>
      <div className="w-[30%] bg-bgColor rounded-md p-8 border-gold border overflow-auto">
        <div className="flex flex-col">
          <div>
            <p className="font-semibold text-lg">Compare Named Glosses</p>
          </div>
          <div className="overflow-auto max-h-[400px] border border-gray-200 h-[400px] shadow-lg p-4 my-2">
            <p className="font-semibold">Currently Selected</p>
            {(selectedRows as any)?.rows?.map((gloss: any) => (
              <div
                className="border border-gray-200 shadow-md p-2"
                key={gloss.id}
              >
                {gloss.original.title}{" "}
                {/* Change this to any property you want to display */}
              </div>
            ))}
            <div className="flex flex-col gap-2"></div>
          </div>
          <button
            onClick={() => handleOpen()}
            className="flex items-center ml-auto bg-bg-secondary-color rounded-md p-2 hover:bg-bg-color transition font-semibold border border-gold"
          >
            <MdOutlineOpenInNew className="mr-2" />
            Open in a modal
          </button>
        </div>
      </div>
    </div>
  );
}
