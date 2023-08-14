"use client";

import { GlossColumns } from "./components/GlossColumns";
import { DataTable } from "@/components/DataTable";
import Box from "@/components/Box";
import LoadingBox from "@/components/LoadingBox";
import { Sections } from "@/components/Sections";
import { useEffect, useState } from "react";
import { glossesSections } from "@/data/constants";
import AllContent from "./components/AllContent";
import BookContent from "./components/BookContent";
import TagContent from "./components/TagContent";
import ThemeContent from "./components/ThemeContent";
/**
 * Glosses content.
 * This page is used to display a list of glosses fetched from rerum.
 * It uses the `useState` and `useEffect` hooks to fetch and store the glosses data.
 *
 * @returns {React.ReactElement} A JSX element representing the Glosses component.
 */
export default function Glosses() {
  // state variable for controlling visibility for loading box
  const [isLoading, setIsLoading] = useState(false);

  // State variable for controlling the visibility of the menu
  const [menu, setMenu] = useState(false);

  // State variable for controlling the currently displayed content
  const [content, setContent] = useState("All");

  // Function to change the displayed content
  const handleChangeContent = (scene: string) => {
    setContent(scene);
    setMenu(false);
  };

  return (
    <>
      {/* Menu component that changes visibility based on state */}
      <div className={`menu ${menu ? "menu-open" : "menu-close"}`}>
        <Sections
          handleChangeContent={handleChangeContent}
          sectionContent={glossesSections}
        />
      </div>

      {/* Toggle button for menu */}
      <div className="menu-toggle-container">
        <button
          className={`menu-toggle-button ${
            menu ? "button-open" : "button-close"
          }`}
          type="button"
          onClick={() => setMenu(!menu)}
        ></button>
        <div
          className="menu-toggle-text"
          style={
            menu
              ? { color: "rgb(212, 229, 232)" }
              : { color: "rgb(91, 71, 56)" }
          }
        >
          {menu ? (
            <>
              <span style={{ "--n": ".1" } as React.CSSProperties}>C</span>
              <span style={{ "--n": ".2" } as React.CSSProperties}>l</span>
              <span style={{ "--n": ".3" } as React.CSSProperties}>o</span>
              <span style={{ "--n": ".4" } as React.CSSProperties}>s</span>
              <span style={{ "--n": ".5" } as React.CSSProperties}>e</span>
            </>
          ) : (
            <>
              <span style={{ "--n": ".1" } as React.CSSProperties}>O</span>
              <span style={{ "--n": ".2" } as React.CSSProperties}>p</span>
              <span style={{ "--n": ".3" } as React.CSSProperties}>e</span>
              <span style={{ "--n": ".4" } as React.CSSProperties}>n</span>
              <span style={{ "--n": ".5" } as React.CSSProperties}></span>
            </>
          )}
        </div>
      </div>

      <div onClick={() => setMenu(false)}>
        <div className={`${menu ? "move-page-up" : ""}`}>
          <Box className="rounded-md p-8 w-full">
            <div className="text-lg pb-2">
              {content === "All" ? (
                <p className="font-semibold">Displaying All Glosses</p>
              ) : content === "Book" ? (
                <>
                  <p className="font-semibold">
                    Displaying All Glosses by Book
                  </p>
                  <p className="py-2 text-sm">
                    Medieval scholars and scribes glossed over authoritative
                    texts that were important to their culture. Here you can
                    browse glosses on those authoritative books
                  </p>
                </>
              ) : content === "Tag" ? (
                <>
                  <p className="font-semibold">Displaying All Glosses by Tag</p>
                  <p className="py-2 text-sm">
                    Various glosses share certain features or terms. We have
                    selectively ascribed tags to capture this information. Here
                    you may browse according to term or feature tag and see all
                    the glosses that have shared content in this way.
                  </p>
                </>
              ) : (
                <>
                  <p className="font-semibold">
                    Displaying All Glosses by Theme
                  </p>
                  <p className="py-2 text-sm">
                    The same theme or topic could be addressed in various
                    glosses on different authoritative texts. Here you can
                    browse collections of glosses that have been curated around
                    specific research themes.
                  </p>
                </>
              )}
            </div>
            {content === "All" ? (
              <AllContent setIsLoading={setIsLoading} />
            ) : content === "Book" ? (
              <BookContent setIsLoading={setIsLoading} />
            ) : content === "Tag" ? (
              <TagContent setIsLoading={setIsLoading} />
            ) : (
              <ThemeContent setIsLoading={setIsLoading} />
            )}
          </Box>
        </div>
      </div>

      {isLoading && <LoadingBox label="Glosses" />}
    </>
  );
}
