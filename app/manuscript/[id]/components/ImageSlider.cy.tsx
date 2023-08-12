import React from "react";
import { ImageSlider } from "./ImageSlider";

describe("<ImageSlider />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ImageSlider baseProject={""} />);
  });
});
