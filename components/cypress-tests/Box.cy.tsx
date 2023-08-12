import React from "react";
import Box from "@/components/Box";

describe("<Box />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Box />);
  });
});
