import React from "react";
import LoadingBox from "@/components/LoadingBox";

describe("<LoadingBox />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LoadingBox label={""} />);
  });
});
