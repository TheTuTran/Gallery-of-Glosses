"use client";

import { DataTable } from "@/components/DataTable";
import { useFetchedGlosses } from "@/hooks/useFetchedGlosses";
import { useState } from "react";
import useCompareModal from "@/hooks/useCompareModal";
import Box from "@/components/Box";
import { GlossColumns, OpenModalButton, SelectionList } from "./components";
import { Gloss } from "@/lib/Gloss";
import LoadingBox from "@/components/LoadingBox";

export default function Compare() {
  // State to store the selected rows for comparison
  const [selectedRows, setSelectedRows] = useState<{ rows: Gloss[] }>({
    rows: [],
  });

  // Fetch the glosses and its loading status
  const { glosses, isLoading } = useFetchedGlosses(
    "Glossing-Matthew-Named-Glosses"
  );

  // Get the state and functions to control the compare modal
  const compareModal = useCompareModal();

  // Function to open the compare modal with the selected rows
  const handleOpen = () => {
    compareModal.selectedRows = selectedRows;
    return compareModal.onOpen();
  };

  return (
    <div className="flex gap-6 py-10">
      {/* The left box for the data table */}

      <Box className="w-[85%] rounded-md p-8 shadow-md">
        <div>
          <p className="font-semibold text-lg mb-4">Compare Named Glosses</p>
        </div>
        <DataTable
          setSelectedRows={setSelectedRows}
          columns={GlossColumns}
          data={glosses}
        />
        {/* Show a loading indicator while the glosses are being fetched */}
        {isLoading && <LoadingBox label="Glosses" />}
      </Box>

      {/* The right box for the selection list and modal opening button */}
      <Box className="w-[20%] rounded-md p-8 ">
        <div className="flex flex-col">
          {/* The list of selected glosses */}
          <SelectionList selectedRows={selectedRows} />
          {/* The button to open the compare modal */}
          <OpenModalButton handleOpen={handleOpen} />
        </div>
      </Box>
    </div>
  );
}
