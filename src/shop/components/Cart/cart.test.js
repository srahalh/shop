import React from "react";
import { renderWithProviders } from "../../test/setupTests";
import Cart from "./Cart";
const fulfilledState = require("../../test/fulfilledProductDetailState.json");


describe("Test Cart", () => {
  test("Should render Cart and have count of state in snapshot", () => {
    const { asFragment  } = renderWithProviders(<Cart />, { preloadedState: fulfilledState});
    expect(asFragment ()).toMatchSnapshot();
  });
});
