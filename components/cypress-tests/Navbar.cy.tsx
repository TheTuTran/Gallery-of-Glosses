import React from "react";
import Navbar from "@/components/Navbar";

describe("<Navbar />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Navbar children={undefined} />);
  });
});
