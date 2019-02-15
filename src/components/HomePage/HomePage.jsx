import React, { Component } from "react";
import { getRestaurants } from "../../services/restaurantService";
import Restaurant from "../Restaurant/Restaurant";
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
              <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                <button type="button" className="btn btn-primary">All</button>
                <button type="button" className="btn btn-outline-primary">Western</button>
                <button type="button" className="btn btn-outline-primary">Chinese</button>
                <button type="button" className="btn btn-outline-primary">Japanese</button>
                <button type="button" className="btn btn-outline-primary">Thai</button>
              </div>
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
