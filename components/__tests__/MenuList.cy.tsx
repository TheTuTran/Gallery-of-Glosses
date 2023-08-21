import React from "react";
import { MenuList } from "../MenuList";

describe("<Sections />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react

    const mockMenuList = [
      {
        title: "About Us",
        src: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFib3V0JTIwdXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        content: "About",
      },
      {
        title: "Project History",
        src: "https://images.unsplash.com/photo-1522442676585-c751dab71864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        content: "History",
      },
      {
        title: "Terminology and Abbreviations",
        src: "https://images.unsplash.com/photo-1563906267088-b029e7101114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        content: "Terms",
      },
    ];

    cy.mount(
      <MenuList
        handleChangeContent={function (scene: string): void {
          throw new Error("Function not implemented.");
        }}
        menuContent={mockMenuList}
      />
    );
  });
});
