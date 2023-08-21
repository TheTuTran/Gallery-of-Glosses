import React from "react";
import ManuscriptModalDetails from "../ui/ManuscriptModalDetails";
import { Manuscript } from "@/lib/Manuscript";
import { LatLngTuple } from "leaflet";

describe("<ManuscriptModalDetails />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react

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
      <ManuscriptModalDetails
        manuscript={mockManuscript}
        onMoreInfoClick={function (manuscript: Manuscript): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
  });
});
