import React from "react";
import ManuscriptMap from "./ManuscriptMap";
import { Manuscript } from "@/lib/Manuscript";

describe("<ManuscriptMap />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <ManuscriptMap
        yearLow={0}
        yearHigh={0}
        manuscripts={[]}
        handleMarkerClick={function (manuscripts: Manuscript[]): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
  });
});
