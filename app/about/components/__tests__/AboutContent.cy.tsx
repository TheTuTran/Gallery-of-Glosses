import React from "react";
import { AboutContent } from "../ui/AboutContent";

describe("<AboutContent />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AboutContent />);
  });
});
