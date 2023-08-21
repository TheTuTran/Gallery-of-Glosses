import React from "react";
import LoadingBox from "../LoadingBox";

describe("<LoadingBox />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LoadingBox label={""} />);
  });
});
