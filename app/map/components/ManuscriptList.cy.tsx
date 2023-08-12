import React from "react";
import ManuscriptList from "./ManuscriptList";
import { Manuscript } from "@/lib/Manuscript";

describe("<ManuscriptList />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <ManuscriptList
        manuscripts={[]}
        yearLow={0}
        yearHigh={0}
        onMoreInfoClick={function (manuscript: Manuscript): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
  });
});
