import { render, screen } from "@testing-library/react";
import React from "react";
import ErrorMessage from "./ErrorMessage";
import { MESSAGES } from "./Messages";

describe("Error Message component", () => {
  test("should render the component into the screen", () => {
    render(<ErrorMessage message="Some Message" />);
    expect(screen.getByText(/Some Message/i)).toBeTruthy();
  });

  test("should render the default message when error message its null", () => {
    render(<ErrorMessage message={null} />);
    expect(screen.getByText(/error/i).innerHTML).toStrictEqual(
      MESSAGES.DEFAULT_MESSAGE
    );
  });
});
