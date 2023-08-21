import React from "react";
import { ManuscriptMarker } from "../ui/ManuscriptMarker";
import { Manuscript } from "@/lib/Manuscript";
import { LatLngTuple } from "leaflet";

// need change test

describe("<ManuscriptMarker />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react

    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });

    const mockManuscript: Manuscript & { coordinates: LatLngTuple } = {
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
      coordinates: [51.505, -0.09],
    };

    cy.mount(
      <ManuscriptMarker
        manuscript={mockManuscript}
        handleMarkerClick={function (
          origin: string,
          coordinates: LatLngTuple
        ): void {
          throw new Error("Function not implemented.");
        }}
        getManuscriptsWithSameOrigin={function (origin: string): Manuscript[] {
          throw new Error("Function not implemented.");
        }}
        prepareOrigin={function (origin: string): string {
          throw new Error("Function not implemented.");
        }}
      />
    );
  });
});
