"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { MdHistoryEdu } from "react-icons/md";
import { AiOutlineInfoCircle, AiFillBook } from "react-icons/ai";

import SidebarItem from "../../../components/SidebarItem";
import Box from "@/components/Box";

/**
 * Sidebar functional component.
 * This component is used to display a sidebar navigation.
 * It uses the `usePathname` hook to get the current URL path.
 * Then, it uses the `useMemo` hook to create a list of route objects, which each contain:
 *  - An icon
 *  - A label
 *  - An `active` state indicating if the current URL path matches the route
 *  - An `href` for navigation
 *
 * @returns A JSX element representing the Sidebar component.
 */
const Sidebar = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: AiOutlineInfoCircle,
        label: "About this Site",
        active: pathname === "/about",
        href: "/about",
      },
      {
        icon: MdHistoryEdu,
        label: "Project History",
        active: pathname === "/about/history",
        href: "/about/history",
      },
      {
        icon: AiFillBook,
        label: "Terminology and Abbreviations",
        active: pathname === "/about/terminology",
        href: "/about/terminology",
      },
    ],
    [pathname]
  );

  return (
    <div className="h-full">
      <Box className="hidden md:flex flex-col gap-y-2 h-full w-[300px] p-2 rounded-md">
        <div className="flex flex-col gap-y-4 px-8 py-4">
          {routes.map((item) => (
            <SidebarItem key={item.label} {...item} />
          ))}
        </div>
      </Box>
    </div>
  );
};

export default Sidebar;
