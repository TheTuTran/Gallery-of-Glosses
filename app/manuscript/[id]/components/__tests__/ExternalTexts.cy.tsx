import React from "react";
import { ExternalTexts } from "../ExternalTexts";

// need change test

describe("<ExternalTexts />", () => {
  it("renders", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });

    // see: https://on.cypress.io/mounting-react
    cy.mount(<ExternalTexts links={[]} />);
  });
});
