"use client";

import { useState } from "react";
import { GlossColumns } from "../components/GlossColumns";
import { DataTable } from "@/components/DataTable";
import { BeatLoader } from "react-spinners";
import Sidebar from "../components/Sidebar";
import { useFetchedGlosses } from "@/hooks/useFetchedGlosses";
import Box from "@/components/Box";

export default function Book() {
  const [book, setBook] = useState("no books selected"); // Added state to manage book selection
  const { glosses, isLoading } = useFetchedGlosses(book);

  return (
    <div className="flex gap-4 p-8">
      <Sidebar />
      <Box className="h-fit min-h-screen rounded-md p-8 overflow-auto flex gap-4">
        <div className="w-[75%] bg-gray-100 p-4 rounded-md">
          <DataTable columns={GlossColumns} data={glosses} />
          {isLoading && (
            <div className="flex pt-10 items-center gap-2">
              <p>Loading glosses</p>
              <BeatLoader size={5} className="translate-y-1" />
            </div>
          )}
        </div>
        <div className="w-[25%] bg-gray-100 p-4 rounded-md">
          <p className="font-semibold text-xl">Browse by Book</p>
          <p className="py-2">
            Medieval scholars and scribes glossed over authoritative texts that
            were important to their culture. Here you can browse glosses on
            those authoritative books
          </p>
          <select
            className="mb-2 border-2 border-gray-200 rounded-sm w-full p-2 px-3"
            onChange={(e) => setBook(e.target.value)}
          >
            <option value="no books selected'">Select a Book</option>
            <option value="Glossing-Matthew-Named-Glosses">
              Book of Matthew
            </option>
            {/* Add more options as needed */}
          </select>
        </div>
      </Box>
    </div>
  );
}
