// MenuButton.tsx

import React from "react";

interface MenuButtonProps {
  menu: boolean;
  toggleMenu: () => void;
}

export const MenuButton: React.FC<MenuButtonProps> = ({ menu, toggleMenu }) => {
  return (
    <main className="menu-button-container">
      <button
        className={`menu-button ${menu ? "button-open" : "button-close"}`}
        type="button"
        onClick={toggleMenu}
      >
        {menu ? (
          <>
            <span className="menu-text">C</span>
            <span className="menu-text">L</span>
            <span className="menu-text">O</span>
            <span className="menu-text">S</span>
            <span className="menu-text">E</span>
          </>
        ) : (
          <>
            <span className="menu-text">O</span>
            <span className="menu-text">P</span>
            <span className="menu-text">E</span>
            <span className="menu-text">N</span>
          </>
        )}
      </button>
    </main>
  );
};
