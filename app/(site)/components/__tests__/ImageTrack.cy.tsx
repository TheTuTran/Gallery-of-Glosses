import React from "react";
import { ImageTrack } from "../ImageTrack";

describe("<ImageTrack />", () => {
  beforeEach(() => {
    cy.mount(<ImageTrack />);
  });

  it("renders the 'Gallery of Glosses' title overlay", () => {
    cy.get(".image-track").contains("Gallery of Glosses").should("be.visible");
  });

  it("ensures images are not draggable", () => {
    cy.get("img").each(($el) => {
      expect($el).to.have.attr("draggable", "false");
    });
  });

  it("checks for image dimensions", () => {
    cy.get("img").each(($el) => {
      expect($el).to.have.attr("width", "500");
      expect($el).to.have.attr("height", "300");
    });
  });
});
