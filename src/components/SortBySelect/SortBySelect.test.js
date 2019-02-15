import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render } from "react-testing-library";
import SortBySelect from "./SortBySelect";

test("renders a select list from options, 'Restaurant Name' is selected by default", () => {
  const sortByOptions = [
    { name: "Restaurant Name", value: "name" },
    { name: "Average Price", value: "averagePrice" }
  ];

  const { getBySelectText, getByText, getByLabelText } = render(
    <SortBySelect
      options={sortByOptions}
      selected={"name"}
      handleSelect={() => {}}
    />
  );

  expect(getBySelectText("Restaurant Name")).toBeVisible()
  expect(getByLabelText("Sort By")).toContainElement(getByText("Restaurant Name"))
  expect(getByLabelText("Sort By")).toContainElement(getByText("Average Price"))
});
