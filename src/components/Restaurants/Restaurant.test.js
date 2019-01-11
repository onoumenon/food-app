import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render } from "react-testing-library";
import Restaurant from "./Restaurant";

test("renders a restaurant with an image, name, cusine, and opening hours", () => {
  const details = {
    name: "The Burger Bar by Fatboy's Concepts (Boat Quay)",
    address: "35 Boat Quay, 049824 Singapore",
    openingTime: "11:00 AM",
    closingTime: "10:30 PM",
    cusine: { name: "Western" },
    imageUrl: "images/restaurants/5c342ac9fc13ae39f8000000.jpg"
  };
  const { getByText, getByAltText } = render(<Restaurant details={details} />);
  expect(getByText(/The Burger Bar by Fatboy/i)).toBeInTheDocument();
  expect(getByText(/western/i)).toBeInTheDocument();
  expect(getByText(/11:00 AM.*10:30 PM/i)).toBeInTheDocument();
  expect(getByAltText("restaurant image")).toHaveAttribute(
    "src",
    details.imageUrl
  );
});
