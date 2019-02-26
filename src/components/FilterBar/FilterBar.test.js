import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render } from "react-testing-library";
import FilterBar from "./FilterBar";

test("renders cuisines from list", () => {
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

  const { getByText } = render(<FilterBar cuisines={data} />);
  expect(getByText(/western/i)).toBeInTheDocument();
  expect(getByText(/japanese/i)).toBeInTheDocument();
});

test.skip("renders selectedCuisine with className active", () => {});
