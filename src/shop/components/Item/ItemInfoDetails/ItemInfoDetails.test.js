import React from "react";
import { render } from "@testing-library/react";
import ItemInfoDatails from "./ItemInfoDatails";
const products = require("../../../test/products.json");

describe("ItemInfoDatails component", () => {
  test("Should render ItemInfoDatails Component", () => {
    const props = products[0]
    const { asFragment  } = render(<ItemInfoDatails {...props} /> );
    expect(asFragment ()).toMatchSnapshot();
  });
});
