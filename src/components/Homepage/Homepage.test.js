import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render } from "react-testing-library";
import HomePage from "./HomePage";
import * as RestaurantService from "../../services/restaurantService";

test("Homepage renders list of two Restaurants", () => {
  const data = [
    {
      _id: "5c342ac9fc13ae39f8000000",
      name: "The Burger Bar by Fatboy's Concepts (Boat Quay)",
      openingTime: "11:00",
      closingTime: "22:30",
      cuisine: { name: "Western" },
      imageUrl: "images/restaurants/5c342ac9fc13ae39f8000000.jpg"
    },
    {
      _id: "5c342ac9fc13ae39f8000001",
      name: "The Soup Spoon (Tanjong Pagar Exchange)",
      openingTime: "12:00",
      closingTime: "21:30",
      cuisine: { name: "Western" },
      imageUrl: "images/restaurants/5c342ac9fc13ae39f8000001.jpg"
    }
  ];
});
