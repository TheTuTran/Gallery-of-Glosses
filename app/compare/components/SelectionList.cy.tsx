import React from "react";
import { SelectionList } from "./SelectionList";

describe("<SelectionList />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <SelectionList
        selectedRows={{
          rows: [],
        }}
      />
    );
  });
});
