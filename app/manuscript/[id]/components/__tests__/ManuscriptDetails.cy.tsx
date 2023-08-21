import React from "react";
import { ManuscriptDetails } from "../ManuscriptDetails";
import { Manuscript } from "@/lib/Manuscript";

describe("<ManuscriptDetails />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react

    const mockManuscript: Manuscript = {
      title: "",
      identifier: "",
      alternative: "",
      city: "",
      repository: "",
      origin: "",
      region: "",
      date: 2000,
      institution: "",
      provenance: "",
      "tpen://base-project": "",
      url: "",
      notes: "",
    };
    cy.mount(<ManuscriptDetails manuscript={mockManuscript} />);
  });
});
