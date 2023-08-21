import React from "react";
import Image from "next/image";

interface MenuItem {
  title: string;
  src: string;
  content: string;
}

// Interface for the props expected by the MenuList component
interface MenuListProps {
  handleChangeContent: (scene: string) => void;
  menuContent: MenuItem[];
}

// The MenuList component
export const MenuList: React.FC<MenuListProps> = ({
  handleChangeContent,
  menuContent,
}) => (
  <main className="menu-items">
    {menuContent.map(({ title, src, content }) => (
      <div
        key={src}
        className="menu-item"
        onClick={() => handleChangeContent(content)}
      >
        <Image
          className="menu-item-image"
          src={src}
          width={1000}
          height={1000}
          alt={""}
        />
        <p className="menu-item-label">{title}</p>
      </div>
    ))}
  </main>
);
