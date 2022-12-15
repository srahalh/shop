import React from "react";
import { render } from "@testing-library/react";
import Search from "./Search";

describe("Search component", () => {
  test("Should render Search Component", () => {
    const { asFragment  } = render(<Search />);
    expect(asFragment ()).toMatchSnapshot();
  });
});
