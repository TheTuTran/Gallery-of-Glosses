import React from "react";
import DropInfo from "../DropInfo";

describe("<DropInfo />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DropInfo title={""} />);
  });
});
