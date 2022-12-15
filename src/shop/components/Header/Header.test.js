import React from "react";
import * as router from "react-router";
import { fireEvent, renderWithProviders, screen } from "../../test/setupTests";
import Header from "./Header";

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
});

describe("Header component", () => {
  test("should render the component into the screen", () => {
    renderWithProviders(<Header />);
    expect(screen.getByText(/Shopping Store/i)).toBeTruthy();
  });

  test("Header Navigation", async () => {
    renderWithProviders(<Header />);
    await fireEvent.click(screen.getByText(/Shopping Store/i));
    expect(navigate).toHaveBeenCalledWith("/");
  });
});
