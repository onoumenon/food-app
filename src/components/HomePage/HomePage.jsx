import React, { Component } from "react";
import { getRestaurants } from "../../services/restaurantService";
import Restaurant from "../Restaurant/Restaurant";
import "./HomePage.scss";

class HomePage extends Component {
  state = {
    restaurants: getRestaurants()
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {this.state.restaurants.map((restaurant, index) => (
            <div className="card-col" key={restaurant._id}>
              <Restaurant details={restaurant} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default HomePage;
