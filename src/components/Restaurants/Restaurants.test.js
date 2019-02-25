import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render } from "react-testing-library";
import Restaurants from "./Restaurants";

test("Restaurants Component renders with attributes", () => {
  const data = {
    name: "The Soup Spoon (Tanjong Pagar Exchange)",
    openingTime: "12:00",
    closingTime: "21:30",
    cuisine: { name: "Western" },
    imageUrl: "images/restaurants/5c342ac9fc13ae39f8000001.jpg"
  };

  const { getByText, getByAltText } = render(<Restaurants item={data} />);

  expect(getByText(/The Soup Spoon/i)).toBeInTheDocument();
  expect(getByText(data.cuisine.name)).toBeInTheDocument();
  expect(
    getByText(`${data.openingTime} - ${data.closingTime}`)
  ).toBeInTheDocument();
  expect(getByAltText(data.name)).toHaveAttribute("src", data.imageUrl);
  expect(getByText("Order")).toBeInTheDocument();
});
