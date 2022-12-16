import React from "react";
import { ProductListPage } from "./ProductListPage";
import { renderWithProviders } from "../../test/setupTests";
const fulfilledState = require("../../test/fulfilledPoductsState.json");


describe("Test ProductListPage", () => {
  test("Should render ProductListPage", () => {
    const { asFragment  } = renderWithProviders(<ProductListPage />, { preloadedState: fulfilledState });
    expect(asFragment ()).toMatchSnapshot();
  });
});
