import React from "react";
import { OpenModalButton } from "../ui/OpenModalButton";

describe("<OpenModalButton />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <OpenModalButton
        handleOpen={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
  });
});
