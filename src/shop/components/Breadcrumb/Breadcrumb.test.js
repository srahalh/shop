import React from "react";
import { renderWithProviders } from "../../test/setupTests";
import Breadcrumb from "./Breadcrumb";
const fulfilledState = require("../../test/fulfilledProductDetailState.json");


describe("Test Breadcrumb", () => {
  test("Should render Breadcrumb and have title of state in snapshot", () => {
    const { asFragment  } = renderWithProviders(<Breadcrumb />, { preloadedState: fulfilledState, route: "/product/9"});
    expect(asFragment ()).toMatchSnapshot();
  });
});
