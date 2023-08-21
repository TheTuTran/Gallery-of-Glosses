import React from "react";
import ManuscriptMapModal from "../ui/ManuscriptMapModal";

// need to change test

describe("<ManuscriptMapModal />", () => {
  it("renders", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ManuscriptMapModal />);
  });
});
