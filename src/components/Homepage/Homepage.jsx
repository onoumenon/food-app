import React, { Component } from "react";
import { getRestaurants } from "./../../services/restaurantService";
import Restaurants from "../Restaurants/Restaurants";

export class Homepage extends Component {
  state = {
    restaurants: getRestaurants()
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.restaurants.map(item => (
            <Restaurants key={item._id} item={item} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Homepage;
