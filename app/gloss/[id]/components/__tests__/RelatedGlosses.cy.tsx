import React from "react";
import { RelatedGlosses } from "../ui/RelatedGlosses";
import { Gloss } from "@/lib/Gloss";

describe("<RelatedGlosses />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <RelatedGlosses
        relatedGlosses={[]}
        loading={false}
        onGlossClicked={function (gloss: Gloss): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
  });
});
