import React from "react";
import { SelectionList } from "../ui/SelectionList";

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
