"use client";

import React, { useState } from "react";
import { useFetchedManuscripts } from "@/hooks/useFetchedManuscripts";
import useManuscriptMapModal from "@/hooks/useManuscriptMapModal";
import dynamic from "next/dynamic";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useRouter } from "next/navigation";
import getTargetIdByValue from "@/actions/getTargetByValue";
import Box from "@/components/Box";
const DynamicMap = dynamic(() => import("@/app/map/components/ManuscriptMap"), {
  ssr: false,
});

export default function Map() {
  const router = useRouter();
  const [yearLow, setYearLow] = useState(1000);
  const [yearHigh, setYearHigh] = useState(1001);
  const styling = "border-2 border-gray-200 rounded-sm w-full p-2 px-3 mx-2";
  const { manuscripts, isLoading: isLoadingManuscripts } =
    useFetchedManuscripts("Glossing-Matthew");

  const manuscriptModal = useManuscriptMapModal();

  const handleMarkerClick = (selectedManuscripts: string[]) => {
    console.log("selectedmanuscripts", selectedManuscripts);
    if (selectedManuscripts) {
      manuscriptModal.selectedManuscripts = selectedManuscripts;
      manuscriptModal.minYear = yearLow;
      manuscriptModal.maxYear = yearHigh;
      return manuscriptModal.onOpen();
    }
  };

  const handleMoreInfoClick = async (manuscript: any) => {
    try {
      const targetId = await getTargetIdByValue(
        "identifier",
        manuscript.identifier
      );

      // Store manuscript data in session storage
      sessionStorage.setItem("manuscriptData", JSON.stringify(manuscript));

      // navigate to the new page with the target id as a parameter
      router.push(`/manuscript/${targetId}`);
    } catch (error) {
      console.error("Error getting target id:", error);
    }
  };

  return (
    <div className="min-h-full">
      <div className="flex gap-4 p-8">
        <div className="min-h-screen w-[70%] bg-bgColor rounded-md p-8 border-gold border overflow-auto">
          <p className="font-bold text-lg">
            Current Location of Glossed Matthew Manuscripts
          </p>
          {isLoadingManuscripts ? (
            <div>Loading the Map...</div>
          ) : (
            <DynamicMap
              yearLow={yearLow}
              yearHigh={yearHigh}
              manuscripts={manuscripts}
              handleMarkerClick={handleMarkerClick}
            />
          )}
        </div>
        <Box className="w-[30%] rounded-md p-8 overflow-auto">
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
                min={yearLow + 1}
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
            <div className="border px-2">
              {manuscripts.map(
                (manuscript) =>
                  yearLow <= manuscript.date &&
                  yearHigh >= manuscript.date &&
                  manuscript.origin !== "" && (
                    <div
                      className="border-b flex flex-col py-2"
                      key={`${manuscript.title}-${manuscript.identifier}`}
                    >
                      <p>Siglum: {manuscript.alternative}</p>
                      <p>Origin: {manuscript.origin}</p>
                      <p>Originated from the time: {manuscript.date}</p>
                      <button
                        onClick={() => handleMoreInfoClick(manuscript)}
                        className="bg-neutral-200 ml-auto border rounded-md py-1 px-2 w-auto text-sm font-semibold flex flex-rows items-center hover:bg-neutral-300 transition"
                      >
                        <AiOutlineInfoCircle className="mr-1" />
                        More Info
                      </button>
                    </div>
                  )
              )}
            </div>
          </div>
        </Box>
      </div>
      <div className="flex gap-4 px-8">
        <Box className="min-h-screen w-[70%] rounded-md p-8 overflow-auto">
          <p className="font-bold text-lg">Provenance (location by c.1200)</p>
          {/** 
          {isLoadingManuscripts ? (
            <div>Loading the Map...</div>
          ) : (
            <DynamicMap
              yearLow={yearLow}
              yearHigh={yearHigh}
              manuscripts={manuscripts}
              handleMarkerClick={handleMarkerClick}
            />
          )}
          */}
        </Box>
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
                min={yearLow + 1}
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
            <div className="border px-2">
              {manuscripts.map(
                (manuscript) =>
                  yearLow <= manuscript.date &&
                  yearHigh >= manuscript.date &&
                  manuscript.origin !== "" && (
                    <div
                      className="border-b flex flex-col py-2"
                      key={`${manuscript.title}-${manuscript.identifier}`}
                    >
                      <p>Siglum: {manuscript.alternative}</p>
                      <p>Origin: {manuscript.origin}</p>
                      <p>Originated around: {manuscript.date}</p>
                      <button
                        onClick={() => handleMoreInfoClick(manuscript)}
                        className="bg-neutral-200 ml-auto border rounded-md py-1 px-2 w-auto text-sm font-semibold flex flex-rows items-center hover:bg-neutral-300 transition"
                      >
                        <AiOutlineInfoCircle className="mr-1" />
                        More Info
                      </button>
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
