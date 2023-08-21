import React from "react";
import { RelatedManuscripts } from "../RelatedManuscripts";
import { Manuscript } from "@/lib/Manuscript";

describe("<RelatedManuscripts />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <RelatedManuscripts
        relatedManuscripts={[]}
        loading={false}
        onManuscriptClicked={function (Manuscript: Manuscript): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
  });
});
