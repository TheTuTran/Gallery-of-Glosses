"use client";

import Box from "@/components/Box";
import { Manuscript } from "@/lib/Manuscript";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Map() {
  const [manuscript, setManuscript] = useState<Manuscript>();

  useEffect(() => {
    const storedData = sessionStorage.getItem("manuscriptData");
    if (storedData) {
      const manuscriptData = JSON.parse(storedData);
      setManuscript(manuscriptData);
    }
  }, []);

  const placeholderImage = "https://via.placeholder.com/200";
  const placeholderRelatedManuscriptes = [
    { title: "Manuscript 1", link: "#" },
    { title: "Manuscript 2", link: "#" },
  ];
  const placeholderExternalLinks = [
    { title: "External Text 1", link: "#" },
    { title: "External Text 2", link: "#" },
  ];
  const placeholderCanonicalText =
    "This is where the canonical text related to the Manuscript will be.";
  return (
    <div className="flex gap-4 p-8">
      <Box className="min-h-screen w-[70%] rounded-md p-8 overflow-auto">
        <div>
          <h1 className="text-4xl mb-4">Manuscript Details</h1>
          <div className="border-[1.5px] border-black bg-grey/10 mb-4 rounded-md p-2">
            <div className="px-2 flex gap-2">
              <Link href="/">
                <p className="text-blue-500 font-semibold transition hover:underline">
                  Home
                </p>
              </Link>
              &gt;{" "}
              <Link href="/map">
                <p className="text-blue-500 font-semibold cursor-pointer transition hover:underline">
                  Explore Maps
                </p>
              </Link>
              &gt; <p className="font-semibold">{manuscript?.identifier}</p>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="w-1/2 pr-4">
              <h2 className="text-2xl mb-2">Transcription:</h2>
              <div className="bg-white border rounded-md shadow-md">
                <table className="basic w-full">
                  <tbody>
                    <tr>
                      <td className="px-4 py-2">Title:</td>
                      <td className="px-4 py-2">{manuscript?.title}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Identifier:</td>
                      <td className="px-4 py-2">{manuscript?.identifier}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Alternative:</td>
                      <td className="px-4 py-2">{manuscript?.alternative}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">City:</td>
                      <td className="px-4 py-2">{manuscript?.city}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Origin:</td>
                      <td className="px-4 py-2">{manuscript?.origin}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Region:</td>
                      <td className="px-4 py-2">{manuscript?.region}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Date:</td>
                      <td className="px-4 py-2">{manuscript?.date}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Institution:</td>
                      <td className="px-4 py-2">{manuscript?.institution}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Provenance:</td>
                      <td className="px-4 py-2">{manuscript?.provenance}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Notes:</td>
                      <td className="px-4 py-2">{manuscript?.notes}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">URL:</td>
                      <td className="px-4 py-2">{manuscript?.url}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl mb-2">Related Manuscriptes:</h2>
              <div className="flex flex-col">
                {placeholderRelatedManuscriptes.map((Manuscript, index) => (
                  <div key={index} className="mb-1">
                    <Link href={Manuscript.link}>
                      <p className="text-blue-600 hover:text-blue-800">
                        {Manuscript.title}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl mb-2">External Texts and Entities:</h2>
              <div className="flex flex-col">
                {placeholderExternalLinks.map((link, index) => (
                  <div key={index} className="mb-1">
                    <Link href={link.link}>
                      <p className="text-blue-600 hover:text-blue-800">
                        {link.title}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Box>

      <div className="w-[30%] bg-bgColor rounded-md p-8 border-gold border overflow-auto">
        <h2 className="text-2xl mb-2 text-blue-700">Manuscript Images:</h2>
        <img
          className="shadow-lg rounded-md"
          src={placeholderImage}
          alt="Manuscript image"
        />

        <div className="mt-6">
          <h2 className="text-2xl mb-2">Description:</h2>
          <p className="bg-white border rounded-md p-3 shadow-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            nostrum reprehenderit cum, soluta quam porro rerum placeat, delectus
            tempore animi reiciendis fugit eveniet! Repellat nulla maxime minima
            modi et dicta earum in nam corporis assumenda ad dolorem quis hic
            sequi quisquam iusto, id nihil provident, eligendi magnam vel
            dignissimos quaerat unde a. Culpa laudantium ab veniam doloremque
            saepe, dicta suscipit sapiente. Minus temporibus sint, alias dicta
            esse quisquam iste ut culpa pariatur doloribus tempore nemo illum
            cumque maxime consequatur perspiciatis veniam cupiditate? A
            voluptatum numquam magni sint, facilis aliquam mollitia unde animi,
            nostrum, deleniti doloremque repudiandae placeat nisi et vel!
          </p>
        </div>
      </div>
    </div>
  );
}
function setManuscript(manuscriptData: any) {
  throw new Error("Function not implemented.");
}
