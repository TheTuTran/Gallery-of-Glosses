import React from "react";
import CompareModal from "../ui/CompareModal";

describe("<CompareModal />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CompareModal />);
  });
});
