"use client";

import { useState } from "react";
import {
  AboutContent,
  AcknowledgementsContent,
  HistoryContent,
  MenuList,
  TermsContent,
  MenuButton,
} from "./components";
import { aboutMenuList } from "@/data/constants";

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
    <main>
      {/* Menu component that opens up based on the state */}
      <section className={`menu ${menu ? "menu-open" : "menu-close"}`}>
        <MenuList
          handleChangeContent={handleChangeContent}
          menuContent={aboutMenuList}
        />
      </section>

      {/* Toggle button for menu */}
      <MenuButton menu={menu} toggleMenu={() => setMenu(!menu)} />

      {/* Content display that changes based on state and closes the menu when clicked */}
      <section
        onClick={() => setMenu(false)}
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
      </section>
    </main>
  );
}
