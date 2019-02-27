import "react-testing-library/cleanup-after-each";
import { render } from "react-testing-library";
import React from "react";
import "jest-dom/extend-expect";
import SortBySelect from "./SortBySelect";

const selectOptions = [
  { name: "Restaurant Name", value: "name" },
  { name: "Average Price", value: "avgprice" }
];

test("renders a select list from options", () => {
  const { getByText, getBySelectText } = render(
    <SortBySelect options={selectOptions} />
  );
  expect(getBySelectText("Restaurant Name").children.length).toEqual(2);
  expect(getByText("Restaurant Name")).toHaveAttribute(
    "value",
    selectOptions[0].value
  );
  expect(getByText("Average Price")).toHaveAttribute(
    "value",
    selectOptions[1].value
  );
});

test("sort by: Restaurant Name selected by default", () => {
  const { getBySelectText } = render(<SortBySelect options={selectOptions} />);
  expect(getBySelectText("Restaurant Name")).toBeInTheDocument();
});
