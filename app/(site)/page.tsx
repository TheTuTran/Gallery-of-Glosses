"use client";

import Box from "@/components/Box";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import {
  Parallax,
  ParallaxLayer,
  Parallax as ParallaxType,
} from "@react-spring/parallax";

export default function Home() {
  const parallaxRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        // The `current` page of the Parallax component starts at `0`.
        const currentPage = Math.floor(parallaxRef.current.scroll);

        if (window.scrollY > window.innerHeight * currentPage) {
          // User scrolled down, go to next page.
          parallaxRef.current.scrollTo(currentPage + 1);
        } else if (window.scrollY < window.innerHeight * currentPage) {
          // User scrolled up, go to previous page.
          parallaxRef.current.scrollTo(currentPage - 1);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen pb-20 relative">
      <Parallax pages={4} ref={parallaxRef}>
        <ParallaxLayer speed={2.75}>
          <div>
            <div className="flex justify-center relative">
              <Image
                className="image opacity-70 w-full border-gold border-y-2"
                src="/images/manuscript.png"
                alt="home"
                height={100}
                width={1000}
              />
              <p className="absolute top-[40%] text-white solid text-8xl">
                Gallery of Glosses
              </p>
            </div>
            <div className="flex gap-2 p-4 justify-center ">
              <div className="py-32 flex gap-4 w-[80%] ">
                <Box className="slide-in-left flex w-[40%] p-4 rounded-md items-center justify-center">
                  <p className="h-full">Slideshow Placeholder</p>
                </Box>
                <Box className="slide-in-right p-4 rounded-md">
                  <div className="pb-32">
                    <div className="p-2 flex flex-col gap-3">
                      <p className="text-3xl font-semibold">
                        Welcome to the Gallery of Glosses
                      </p>
                      <p className=" text-gray-500">
                        The Gallery of Glosses is a comprehensive digital
                        resource dedicated to the study, interpretation, and
                        appreciation of glosses &mdash; explanatory annotations
                        on the margins or between the lines of ancient
                        manuscripts.
                      </p>
                      <p className=" text-gray-500">
                        The platform is designed to cater to scholars,
                        historians, theologians, philosophers, and law
                        enthusiasts with a passion for medieval studies.
                      </p>
                    </div>
                  </div>
                </Box>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={2.75}>
          <div className="py-32 flex justify-center gap-20 bg-bg-color min-h-[100vh]">
            <div className="w-[30%] flex flex-col">
              <p className="font-bold text-3xl mb-10 text-gold">
                Browse Glosses
              </p>
              <ul className="list-style-type:none; text-gray-700 text-lg flex flex-col gap-4">
                <li>
                  Browse our collection of glosses by book, theme, manuscript,
                  and tags
                </li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda, asperiores! Eum ipsam minima dolores rem!
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Temporibus, eligendi.
                </li>
                <div className="mt-10 p-2 flex justify-center">
                  <Link
                    href="/glosses"
                    className="bg-bg-secondary-color rounded-md p-2 hover:bg-bg-color transition font-semibold border border-gold"
                  >
                    Start Browsing Glosses
                  </Link>
                </div>
              </ul>
            </div>
            <Box className="w-[40%] slide-in-right rounded-md items-center justify-center flex min-h-[432px]">
              Video of using Browse Glosses
            </Box>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={2.75}>
          <div className="py-32 flex justify-center gap-20 min-h-screen">
            <Box className="w-[40%] rounded-md items-center justify-center flex min-h-[432px]">
              Video of using Compare Glosses
            </Box>
            <div className="w-[30%] flex flex-col ">
              <p className="font-bold text-3xl mb-10 text-gold">
                Compare Glosses
              </p>
              <ul className="list-style-type:none; text-gray-200 text-lg flex flex-col gap-4">
                <li>
                  Compare Different Glosses and categorize different glosses and
                  download them as a csv.
                </li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda, asperiores! Eum ipsam minima dolores rem!
                </li>
              </ul>
              <div className="mt-10 p-2 flex justify-center">
                <Link
                  href="/compare"
                  className="bg-bg-secondary-color rounded-md p-2 hover:bg-bg-color transition font-semibold border border-gold"
                >
                  Compare Different Glosses
                </Link>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={2.75}>
          <div className="py-32 flex justify-center gap-20 bg-bg-color min-h-screen">
            <div className="w-[30%] flex flex-col ">
              <p className="font-bold text-3xl mb-10">Map of Glosses</p>
              <ul className="list-style-type:none; text-gray-700 text-lg flex flex-col gap-4">
                <li>Look at the origin of Glossed Matthew Manuscripts</li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda, asperiores! Eum ipsam minima dolores rem!
                </li>
                <div className="mt-10 p-2 flex justify-center">
                  <Link
                    href="/map"
                    className="bg-bg-secondary-color rounded-md p-2 hover:bg-bg-color transition font-semibold border border-gold"
                  >
                    Interact with the Map
                  </Link>
                </div>
              </ul>
            </div>
            <Box className="w-[40%] rounded-md items-center justify-center flex min-h-[432px]">
              Video of using Explore Maps
            </Box>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
