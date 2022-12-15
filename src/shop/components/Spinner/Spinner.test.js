import { render } from "@testing-library/react";
import React from "react";
import Spinner from "./Spinner";

describe("Spinner component", () => {
  test("Should render Spinner Component", () => {
    const { asFragment  } = render(<Spinner/>);
    expect(asFragment ()).toMatchSnapshot();
  });
});

