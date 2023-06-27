"use client";

import React, { useState } from "react";
import ManuscriptMap from "@/components/ManuscriptMap";
import { useFetchedManuscripts } from "@/hooks/useFetchedManuscripts";
import useManuscriptMapModal from "@/hooks/useManuscriptMapModal";

export default function Map() {
  const [yearLow, setYearLow] = useState(1000);
  const [yearHigh, setYearHigh] = useState(1000);
  const styling = "border-2 border-gray-200 rounded-sm w-full p-2 px-3 mx-2";
  const { manuscripts, isLoading: isLoadingManuscripts } =
    useFetchedManuscripts("Glossing-Matthew");

  const manuscriptModal = useManuscriptMapModal();

  const handleMarkerClick = (selectedManuscripts: string[]) => {
    console.log("selectedmanuscripts", selectedManuscripts);
    if (selectedManuscripts) {
      manuscriptModal.selectedManuscripts = selectedManuscripts;
      return manuscriptModal.onOpen();
    }
  };

  return (
    <div className="min-h-full">
      <div className="flex gap-4 p-8">
        <div className="min-h-screen w-[70%] bg-bgColor rounded-md p-8 border-gold border overflow-auto">
          <p className="font-bold text-lg">
            Origin of Glossed Matthew Manuscripts
          </p>
          {isLoadingManuscripts ? (
            <div>Loading the Map...</div>
          ) : (
            <ManuscriptMap
              yearLow={yearLow}
              yearHigh={yearHigh}
              manuscripts={manuscripts}
              handleMarkerClick={handleMarkerClick}
            />
          )}
        </div>
        <div className="w-[30%] bg-bgColor rounded-md p-8 border-gold border overflow-auto">
          <div className="flex flex-col">
            <div className="flex">
              <label className={styling}>Low Year: {yearLow}</label>
              <input
                type="range"
                min="1000"
                max={yearHigh - 1}
                className={styling}
                value={yearLow}
                onChange={(ev) => setYearLow(Number(ev.target.value))}
              />
            </div>
            <div className="flex">
              <label className={styling}>High Year: {yearHigh}</label>
              <input
                type="range"
                min={yearLow}
                max="2000"
                className={styling}
                value={yearHigh}
                onChange={(ev) => setYearHigh(Number(ev.target.value))}
              />
            </div>
          </div>
          <div className="overflow-auto border border-gray-200 h-[400px] shadow-lg p-4 my-2">
            <div className="mb-2 font-semibold">
              Manuscripts between {yearLow} and {yearHigh}:
            </div>
            <div className="border p-2">
              {manuscripts.map(
                (manuscript) =>
                  (manuscript.date == 0 ||
                    (yearLow <= manuscript.date &&
                      yearHigh >= manuscript.date)) && (
                    <div
                      className="border-b"
                      key={`${manuscript.title}-${manuscript.identifier}`}
                    >
                      {manuscript.identifier}
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
