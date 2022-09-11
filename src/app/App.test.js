/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, screen } from "@testing-library/react";
import App from "./App.component.jsx";

afterEach(cleanup);

describe("This will test App", () => {
  test("renders message", () => {
    render(<App firstName="Tiago" lastName="Souza" />);
    const app = screen.getByText("Pig Game");
    expect(app).toBeInTheDocument();
  });
});
