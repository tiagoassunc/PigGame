/**
 * @jest-environment jsdom
 */

import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, screen } from "@testing-library/react";

import App from "./App.component.jsx";

afterEach(cleanup);

describe("This will test App", () => {
  test("renders message", () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <App />,
      </Router>
    );
    const app = screen.getByText("Pig Game");
    expect(app).toBeInTheDocument();
  });
});
