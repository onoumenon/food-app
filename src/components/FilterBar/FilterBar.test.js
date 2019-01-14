import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render } from "react-testing-library";
import FilterBar from "./FilterBar";

test("renders a cuisine menu from a list, All is selected by default", () => {
  const allCuisine = {
    _id: "5c3430ecfc13ae122d000005",
    name: "All"
  }
  const cuisines = [
    allCuisine,
    {
      _id: "5c3430ecfc13ae122d000000",
      name: "Western"
    }
  ]
  
  const { getByText } = render(<FilterBar cuisines={cuisines} selected={null} handleClick={null}/>);
  expect(getByText(/all/i)).toBeInTheDocument();
  expect(getByText(/western/i)).toBeInTheDocument();
  expect(getByText(/all/i)).toHaveAttribute("class", "btn btn-primary");
})


test("If there is a selected cuisine specified, it will be selected", () => {
  const western = {
    _id: "5c3430ecfc13ae122d000000",
    name: "Western"
  }
  const cuisines = [
    {
      _id: "5c3430ecfc13ae122d000005",
      name: "All"
    },
    western    
  ]
  const { getByText } = render(<FilterBar cuisines={cuisines} selected={western} handleClick={null}/>);
  expect(getByText(/all/i)).toBeInTheDocument();
  expect(getByText(/western/i)).toBeInTheDocument();
  expect(getByText(/western/i)).toHaveAttribute("class", "btn btn-primary");
})
