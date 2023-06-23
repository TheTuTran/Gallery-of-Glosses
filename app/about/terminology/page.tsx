"use client"

import Sidebar from '@/app/about/components/Sidebar';
import DropInfo from '@/components/DropInfo';

export default function Terminology() {

    return (
        <div className="flex gap-4 p-8">
            <Sidebar />
            <div className="h-screen w-screen bg-white rounded-md p-8 border-gold border">
                <h1 className="text-4xl font-semibold mb-6">Terminology and Abbreviations</h1>
                <div className="flex flex-col gap-2">
                    <DropInfo title="Terms">
                            {[
                                { title: "Gloss", desc: "A gloss is an individual version of an explanation or interpretation found in one or more manuscripts. It provides brief marginal or interlinear annotations explaining the meaning of a word or wording in a text." },
                                { title: "Meta-Gloss", desc: "A meta-gloss represents the abstract idea of a gloss, of which various individual glosses are instances or versions." },
                                { title: "Glossary", desc: "A curated collection of glosses." },
                                // ...more terms here...
                            ].map((term, index) => (
                                <div key={index} className="border-b border-gray-200 py-4">
                                    <h3 className="text-xl mb-2">{term.title}</h3>
                                    <p className="text-sm">{term.desc}</p>
                                </div>
                            ))}
                    </DropInfo>
                    <DropInfo title="Abbreviations">
                            {[
                                { title: "Mt", desc: "This stands for the Gospel of Matthew, a part of the Bible. It is used as an authoritative text for the context of some glosses." },
                                { title: "[##:##]", desc: "A canonical reference system common in theological studies, where the numbers before and after the colon respectively represent the chapter and verse of a book from the Bible, e.g., Matthew 5:16 refers to Chapter 5, Verse 16 of the Gospel of Matthew." },
                                // ...more abbreviations here...
                            ].map((abbr, index) => (
                                <div key={index} className="border-b border-gray-200 py-4">
                                    <h3 className="text-xl mb-2">{abbr.title}</h3>
                                    <p className="text-sm">{abbr.desc}</p>
                                </div>
                            ))}
                    </DropInfo>
                </div>
            </div> 
        </div>
    )
}
