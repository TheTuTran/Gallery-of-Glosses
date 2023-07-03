"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import NavbarItem from "./NavbarItem";

interface NavbarProps {
  children: React.ReactNode;
}

/**
 * The Navbar component renders a navigation bar with links to different routes.
 * The active route is highlighted.
 */
const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const pathname = usePathname();

  // Define routes for the Navbar. Use the pathname to determine the active route.
  const routes = useMemo(
    () => [
      {
        label: "Gallery of Glosses",
        active: pathname === "/",
        href: "/",
      },
      {
        label: "About",
        active: pathname.includes("/about"),
        href: "/about",
      },
      {
        label: "Browse Glosses",
        active: pathname === "/glosses",
        href: "/glosses",
      },
      {
        label: "Compare Glosses",
        active: pathname === "/compare",
        href: "/compare",
      },
      {
        label: "Explore Maps",
        active: pathname === "/map",
        href: "/map",
      },
    ],
    [pathname]
  );

  const leftItems = routes.slice(0, 3);
  const rightItems = routes.slice(3);

  return (
    <div className="flex flex-col h-full w-full">
      <div
        className={`z-40 fixed hidden md:flex flex-col h-[60px] w-full p-2 transition duration-200 bg-black`}
      >
        <div className="rounded-lg h-fit w-full flex justify-between px-8">
          <div className="flex gap-8 text-center">
            {leftItems.map((item) => (
              <NavbarItem key={item.label} {...item} />
            ))}
          </div>
          <div className="flex gap-8 text-center">
            {rightItems.map((item) => (
              <NavbarItem key={item.label} {...item} />
            ))}
          </div>
        </div>
      </div>
      <main className="pt-[60px] flex-1 w-full m-0 bg-gradient-to-b from-black/95">
        {children}
      </main>
    </div>
  );
};

export default Navbar;
