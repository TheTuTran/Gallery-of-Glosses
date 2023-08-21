"use client";

import { useState } from "react";
import { glossesMenuList } from "@/data/constants";
import {
  AllContent,
  BookContent,
  Box,
  LoadingBox,
  MenuButton,
  MenuList,
  TagContent,
  ThemeContent,
} from "./components";

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
    <main>
      {/* Menu component that changes visibility based on state */}
      <div className={`menu ${menu ? "menu-open" : "menu-close"}`}>
        <MenuList
          handleChangeContent={handleChangeContent}
          menuContent={glossesMenuList}
        />
      </div>

      {/* Toggle button for menu */}
      <MenuButton menu={menu} toggleMenu={() => setMenu(!menu)} />

      <section
        onClick={() => setMenu(false)}
        className={`${menu ? "move-page-up" : ""}`}
      >
        <Box className="rounded-md p-8 w-full">
          <section className="text-lg pb-2">
            {content === "All" ? (
              <h1 className="font-semibold">Displaying All Glosses</h1>
            ) : content === "Book" ? (
              <>
                <h1 className="font-semibold">
                  Displaying All Glosses by Book
                </h1>
                <p className="py-2 text-sm">
                  Medieval scholars and scribes glossed over authoritative texts
                  that were important to their culture. Here you can browse
                  glosses on those authoritative books
                </p>
              </>
            ) : content === "Tag" ? (
              <>
                <h1 className="font-semibold">Displaying All Glosses by Tag</h1>
                <p className="py-2 text-sm">
                  Various glosses share certain features or terms. We have
                  selectively ascribed tags to capture this information. Here
                  you may browse according to term or feature tag and see all
                  the glosses that have shared content in this way.
                </p>
              </>
            ) : (
              <>
                <h1 className="font-semibold">
                  Displaying All Glosses by Theme
                </h1>
                <p className="py-2 text-sm">
                  The same theme or topic could be addressed in various glosses
                  on different authoritative texts. Here you can browse
                  collections of glosses that have been curated around specific
                  research themes.
                </p>
              </>
            )}
          </section>
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
      </section>

      {isLoading && <LoadingBox label="Glosses" />}
    </main>
  );
}
