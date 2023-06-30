"use client";

import DropInfo from "@/components/DropInfo";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pb-20">
      <div className="flex justify-center relative">
        <Image
          className="image w-screen opacity-70 border-gold border-y-2"
          src="/images/manuscript.png"
          alt="home"
          height={30}
          width={30}
        />
        <p className="absolute top-[40%] text-white solid text-8xl">
          {" "}
          Gallery of Glosses
        </p>
      </div>
      <div className="flex gap-2 p-4 h-full justify-center">
        <div className="flex gap-4 w-[80%]">
          <div className="flex-col gap-y-2 bg-bg-color border border-gold w-[40%] h-fit p-4 rounded-md">
            Slideshow Placeholder
          </div>
          <div className="border border-gold bg-bg-color p-4 rounded-md">
            <div>
              <div className="p-2 flex flex-col gap-3">
                <p className="text-3xl font-semibold">
                  {" "}
                  Welcome to the Gallery of Glosses
                </p>
                <p className="text-2xl text-gray-500">
                  The Gallery of Glosses is a comprehensive digital resource
                  dedicated to the study, interpretation, and appreciation of
                  glosses &mdash; explanatory annotations on the margins or
                  between the lines of ancient manuscripts.
                </p>
                <p className="text-2xl text-gray-500">
                  The platform is designed to cater to scholars, historians,
                  theologians, philosophers, and law enthusiasts with a passion
                  for medieval studies.
                </p>
              </div>
              <div className="p-2 flex justify-center">
                <Link
                  href="/glosses"
                  className="bg-bg-secondary-color rounded-md p-2 hover:bg-bg-color transition font-semibold border border-gold"
                >
                  Start Browsing Glosses
                </Link>
              </div>
              <div className="flex flex-col gap-1 p-2">
                <DropInfo title="What is a Gloss?">
                  <div className="">
                    A gloss is a note or explanation inserted in the margins or
                    between lines of a text to explain, translate, or expand on
                    difficult or complex passages. They serve as a valuable
                    insight into the scholarly and interpretative practices of
                    the past, providing context and interpretations for text
                    that can aid in our understanding of medieval theology,
                    philosophy, and law.
                  </div>
                </DropInfo>
                <DropInfo title="Why Study Glosses?">
                  <div>
                    Glosses provide a unique perspective on the ways medieval
                    scholars understood and interpreted canonical texts. By
                    studying these annotations, we gain insights into the
                    intellectual landscape of the medieval period, and how
                    scholars grappled with the complexities of the texts they
                    studied.
                  </div>
                </DropInfo>
                <DropInfo title="Gallery of Glosses Tools:">
                  <ul className="list-disc ml-5">
                    <p className="py-2 font-semibold text-lg">
                      Our website offers the opportunity to visualize the
                      journey of glosses across time.
                    </p>
                    <li>
                      The interactive map illustrates the geographical spread
                      and evolution of manuscripts over centuries. Explore the
                      colorful pins, each representing a manuscript and
                      color-coded according to different decades or
                      quarter-centuries, to trace the paths of these influential
                      texts.
                    </li>
                    <p className="py-2 font-semibold text-lg">
                      Delve into the &quot;Explore Glosses&quot; section for a
                      variety of browsing options.
                    </p>
                    <li>
                      &quot;Browse by Book&quot;, you&apos;ll find glosses
                      associated with authoritative books from the medieval era,
                      shedding light on how these texts were perceived and
                      interpreted.
                    </li>
                    <li>
                      &quot;Browse by Theme&quot; brings together collections of
                      glosses centered around specific research topics, offering
                      insights into the diverse themes that preoccupied scholars
                      and scribes of the time.
                    </li>
                    <li>
                      &quot;Browse by Manuscript&quot; allows you to examine all
                      glosses derived from a particular manuscript, offering a
                      deeper understanding of each unique textual artifact.
                    </li>
                    <li>
                      &quot;Browse by Tag&quot; section brings together glosses
                      linked by shared tags, offering another perspective on
                      these fascinating historical texts.
                    </li>
                  </ul>
                </DropInfo>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
