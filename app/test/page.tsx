"use client";

import dynamic from "next/dynamic";
const DynamicMap = dynamic(
  () => import("@/app/test/components/ReactMap"),
  { ssr: false } // This will prevent the component from rendering on the server.
);

export default function Map() {
  return (
    <div className="min-h-full">
      <div className="flex gap-4 p-8">
        <div className="min-h-screen w-[70%] bg-bgColor rounded-md p-8 border-gold border overflow-auto">
          <p className="font-bold text-lg">Test React Maps</p>
          <DynamicMap />
        </div>
        <div className="w-[30%] bg-bgColor rounded-md p-8 border-gold border overflow-auto">
          <div className="flex flex-col">
            <div className="flex"></div>
            <div className="overflow-auto border border-gray-200 h-[400px] shadow-lg p-4 my-2">
              <div className="mb-2 font-semibold">
                Manuscripts between and :
              </div>
              <div className="border p-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
