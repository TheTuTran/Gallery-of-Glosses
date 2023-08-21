import React from "react";
import NavbarItem from "../NavbarItem";

describe("<NavbarItem />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<NavbarItem label={""} href={""} />);
  });
});
