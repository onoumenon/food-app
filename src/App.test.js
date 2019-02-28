import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent, cleanup } from "react-testing-library";
import App from "./App";

afterEach(cleanup);

// Helper Function: App is passed in as ui, and "/" is default route
function renderWithRouter(
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history
  };
}

test("full app rendering/navigating", () => {
  const { container, getByText } = renderWithRouter(<App />);
  expect(container.innerHTML).toMatch("Aroy Dee Thai Kitchen");
  fireEvent.click(getByText(/orders/i));
  expect(container.innerHTML).toMatch("Make your orders");
});

xtest("landing on a bad page", () => {
  const { container } = renderWithRouter(<App />, {
    route: "/something-that-does-not-match"
  });
  expect(container.innerHTML).toMatch("HomePage");
});
