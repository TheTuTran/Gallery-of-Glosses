import React from "react";
import { TermsContent } from "../ui/TermsContent";

describe("<TermsContent />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TermsContent />);
  });
});
