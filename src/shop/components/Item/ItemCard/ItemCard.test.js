import React from "react";
import { renderWithProviders } from "../../../test/setupTests";
import ItemCard from "./ItemCard";
const fulfilledState = require("../../../test/fulfilledProductDetailState.json");


describe("Test ItemCard", () => {
  test("Should render ItemCard", () => {
    const { asFragment  } = renderWithProviders(<ItemCard {...fulfilledState.products.queries["getProductById(\"9\")"].data[0]} />);
    expect(asFragment ()).toMatchSnapshot();
  });
});
