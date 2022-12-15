import React from "react";
import { render } from "@testing-library/react";
import ItemImage from "./ItemImage";
const products = require("../../../../../mock/products.json");

describe("ItemImage component", () => {
  test("Should render with imgURL", () => {
    const imageURL = products[0].imgUrl;
    const { asFragment  } = render(<ItemImage imageURL={imageURL} />);
    expect(asFragment ()).toMatchSnapshot();
  });
});