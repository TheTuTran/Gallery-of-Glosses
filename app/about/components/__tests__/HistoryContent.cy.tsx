import React from "react";
import { HistoryContent } from "../ui/HistoryContent";

describe("<HistoryContent />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<HistoryContent />);
  });
});
