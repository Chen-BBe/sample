import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../../test-utils";
import { App } from ".";

test("home renders welcome text", () => {
  render(<App />);
  const element = screen.getByText(/Welcome!/i);
  expect(element).toBeInTheDocument();
});
