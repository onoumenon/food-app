import React, { Component } from "react";
import { getRestaurants } from "../../services/restaurantService";
import Restaurant from './Restaurant';
import "./Restaurants.scss"

class Restaurants extends Component {
  state = {
    restaurants: getRestaurants()
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {this.state.restaurants.map(restaurant => (
            <div className="card-col">
              <Restaurant details={restaurant}/>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Restaurants;
