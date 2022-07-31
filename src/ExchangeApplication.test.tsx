import React from "react";
import { render, screen } from "@testing-library/react";
import ExchangeApplication from "./ExchangeApplication";

test("renders learn react link", () => {
  render(<ExchangeApplication />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
