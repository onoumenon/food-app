import React, { Component } from "react";
import { getRestaurants } from "./../../services/restaurantService";
import Restaurants from "../Restaurants/Restaurants";

export class Homepage extends Component {
  state = {
    restaurants: getRestaurants()
  };
  render() {
    return (
      <div className="row">
        {this.state.restaurants.map(item => (
          <Restaurants key={item._id} item={item} />
        ))}
      </div>
    );
  }
}

export default Homepage;
