"use client";

import { useState } from "react";
import { GlossColumns } from "../components/GlossColumns";
import { DataTable } from "@/components/DataTable";
import { Gloss } from "@/lib/Gloss";
import { BeatLoader } from "react-spinners";
import Sidebar from "../components/Sidebar";
import Box from "@/components/Box";

export default function Theme() {
  const [book, setBook] = useState(""); // Added state to manage book selection
  const [glosses, setGlosses] = useState<Gloss[]>([]);
  const [isLoading, setIsLoading] = useState(false); // Initially set to false

  const fetchObjectsByTheme = async (book: string) => {
    // TODO: ONCE THEME IS IMPLEMENTED
  };

  const handleBrowseClick = () => {
    setIsLoading(true); // Set loading state to true when button is clicked
    fetchObjectsByTheme(book); // Fetch glosses for the selected theme
  };

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
          <p className="font-semibold text-xl">Browse by Theme</p>
          <p className="py-2">
            The same theme or topic could be addressed in various glosses on
            different authoritative texts. Here you can browse collections of
            glosses that have been curated around specific research themes.
          </p>
          <select
            className="mb-2 border-2 border-gray-200 rounded-sm w-full p-2 px-3"
            onChange={(e) => setBook(e.target.value)}
          >
            <option value="">Select a Theme</option>
            {/* Add more options as needed */}
          </select>
          <button
            className="hover:bg-primaryHover shadow-sm bg-primary text-white px-4 rounded-md py-1 items-center gap-1"
            onClick={handleBrowseClick}
          >
            Browse by this Theme
          </button>
        </div>
      </Box>
    </div>
  );
}
