"use client";

import getTargetIdByValue from "@/actions/getTargetByValue";
import Modal from "@/components/Modal";
import useManuscriptMap from "@/hooks/useManuscriptMapModal";
import { Manuscript } from "@/lib/Manuscript";
import { useRouter } from "next/navigation";
import { AiOutlineInfoCircle } from "react-icons/ai";

const ManuscriptMap = () => {
  const ManuscriptMap = useManuscriptMap();
  const router = useRouter();
  const onChange = (open: boolean) => {
    if (!open) {
      ManuscriptMap.onClose();
    }
  };

  const title =
    ManuscriptMap?.selectedManuscripts[0]?.origin.split("?")[0] || "";

  const filteredManuscripts = ManuscriptMap.selectedManuscripts.filter(
    (manuscript: Manuscript) =>
      manuscript.date >= ManuscriptMap.minYear &&
      manuscript.date <= ManuscriptMap.maxYear
  );

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
      ManuscriptMap.onClose();
    } catch (error) {
      console.error("Error getting target id:", error);
    }
  };

  return (
    <Modal
      title=""
      description=""
      isOpen={ManuscriptMap.isOpen}
      onChange={onChange}
    >
      <div>
        <h1 className="text-center text-2xl mb-2">
          Manuscripts from {title} between the years of {ManuscriptMap.minYear}{" "}
          and {ManuscriptMap.maxYear}
        </h1>
        <div className="flex flex-col gap-2 overflow-y-auto max-h-[600px] border">
          {filteredManuscripts.map((manuscript: Manuscript) => (
            <div
              className="border p-4 rounded shadow-lg bg-white"
              key={manuscript.identifier}
            >
              <h3 className="text-xl font-bold">{manuscript.title}</h3>
              <p>Identifier: {manuscript.identifier}</p>
              <p>Alternative: {manuscript.alternative}</p>
              <p>City: {manuscript.city}</p>
              <p>Origin: {manuscript.origin}</p>
              <p>Region: {manuscript.region}</p>
              <p>Date: {manuscript.date}</p>
              <p>Institution: {manuscript.institution}</p>
              <p>Provenance: {manuscript.provenance}</p>
              <p>Notes: {manuscript.notes}</p>
              <p>URL: {manuscript.url}</p>
              <button
                onClick={() => {
                  handleMoreInfoClick(manuscript);
                }}
                className="bg-neutral-200 ml-auto border rounded-md py-1 px-2 w-auto text-sm font-semibold flex flex-rows items-center hover:bg-neutral-300 transition"
              >
                <AiOutlineInfoCircle className="mr-1" />
                More Info
              </button>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default ManuscriptMap;
