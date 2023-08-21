import React from "react";
import { GlossDetails } from "../ui/GlossDetails";
import { Gloss } from "@/lib/Gloss";

describe("<GlossDetails />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react

    const mockGloss: Gloss = {
      title: "",
      description: "",
      targetChapter: "",
      targetVerse: "",
      targetedText: "",
      transcribedGloss: "",
      notes: "",
      tags: {
        "@type": "",
        items: [],
      },
    };
    cy.mount(<GlossDetails gloss={mockGloss} />);
  });
});
