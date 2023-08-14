"use client";

import { useEffect, useState } from "react";
import {
  AboutContent,
  AcknowledgementsContent,
  HistoryContent,
  Sections,
  TermsContent,
} from "./components";
import { aboutSections } from "@/data/constants";

// The About page component
export default function About() {
  // State variable for controlling the visibility of the menu
  const [menu, setMenu] = useState(false);

  // State variable for controlling the currently displayed content
  const [content, setContent] = useState("About");

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
          sectionContent={aboutSections}
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
              : { color: "rgb(182, 142, 113)" }
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

      {/* Content display that changes based on state and closes the menu when clicked */}
      <div onClick={() => setMenu(false)}>
        <div
          className={`bg-neutral-900 border-black border-2 w-[93vw] ml-auto rounded-md p-8 ${
            menu ? "move-page-up" : ""
          }`}
        >
          {content === "About" ? (
            <AboutContent />
          ) : content === "History" ? (
            <HistoryContent />
          ) : content === "Terms" ? (
            <TermsContent />
          ) : (
            <AcknowledgementsContent />
          )}
        </div>
      </div>
    </>
  );
}
