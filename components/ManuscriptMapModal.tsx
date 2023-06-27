"use client";

import Modal from "./Modal";
import useManuscriptMap from "@/hooks/useManuscriptMapModal";
import { Manuscript } from "@/lib/Manuscript";

const ManuscriptMap = () => {
  const ManuscriptMap = useManuscriptMap();

  const onChange = (open: boolean) => {
    if (!open) {
      ManuscriptMap.onClose();
    }
  };
  let title = "";

  if (ManuscriptMap?.selectedManuscripts[0]) {
    const text = ManuscriptMap?.selectedManuscripts[0]?.origin;
    const parts = text.split("?");
    title = parts[0];
  }

  return (
    <Modal
      title=""
      description=""
      isOpen={ManuscriptMap.isOpen}
      onChange={onChange}
    >
      <div>
        <h1 className="text-center text-2xl mb-2">Manuscripts from {title}</h1>
        <div className="flex gap-2">
          {ManuscriptMap.selectedManuscripts.map((manuscript: Manuscript) => (
            <div className="border p-4" key={manuscript.identifier}>
              <h3>{manuscript.title}</h3>
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
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default ManuscriptMap;
