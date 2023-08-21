import React from "react";
import Modal from "../Modal";

describe("<Modal />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Modal
        isOpen={false}
        onChange={function (open: boolean): void {
          throw new Error("Function not implemented.");
        }}
        title={""}
        description={""}
      />
    );
  });
});
