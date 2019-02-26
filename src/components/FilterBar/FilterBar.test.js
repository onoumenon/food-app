import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render } from "react-testing-library";
import FilterBar from "./FilterBar";

const data = [
  {
    _id: "5c3430ecfc13ae122d000000",
    name: "Western"
  },
  {
    _id: "5c3430ecfc13ae122d000001",
    name: "Japanese"
  }
];

test("renders cuisines from list", () => {
  const { getByText } = render(<FilterBar cuisines={data} />);
  expect(getByText(/western/i)).toBeInTheDocument();
  expect(getByText(/japanese/i)).toBeInTheDocument();
});

test("renders selectedCuisine with className btn btn-outline-primary", () => {
  const selectedCuisine = {
    _id: "5c3430ecfc13ae122d000001",
    name: "Japanese"
  };
  const { getByText, debug } = render(
    <FilterBar cuisines={data} selected={selectedCuisine._id} />
  );
  expect(getByText(/japanese/i)).toHaveClass("btn btn-outline-primary");
  debug();
});
