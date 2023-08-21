import React from "react";
import MapControls from "../ui/MapControls";

describe("<MapControls />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <MapControls
        yearLow={0}
        yearHigh={0}
        mapSelected={""}
        setYearLow={function (value: React.SetStateAction<number>): void {
          throw new Error("Function not implemented.");
        }}
        setYearHigh={function (value: React.SetStateAction<number>): void {
          throw new Error("Function not implemented.");
        }}
        setMapSelected={function (value: React.SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
  });
});
