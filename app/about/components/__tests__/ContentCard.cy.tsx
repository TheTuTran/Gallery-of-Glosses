import React from "react";
import ContentCard from "../ui/ContentCard";

describe("<ContentCard />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ContentCard title={""} content={""} />);
  });
});
