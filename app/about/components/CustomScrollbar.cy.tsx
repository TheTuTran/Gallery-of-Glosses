import React from "react";
import CustomScrollbar from "./CustomScrollbar";

describe("<CustomScrollbar />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CustomScrollbar scroll={0} total={0} />);
  });
});
