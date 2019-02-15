import React, { Component } from "react";
import { getRestaurants } from "../../services/restaurantService";
import Restaurant from "../Restaurant/Restaurant";
import FilterBar from "../FilterBar/FilterBar";
import "./HomePage.scss";

class HomePage extends Component {
  state = {
    restaurants: getRestaurants()
  };
  render() {
    const { restaurants } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-4 mx-auto mt-3">
            <FilterBar />
          </div>
        </div>
        <div className="row">
          {restaurants.map(restaurant => (
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
