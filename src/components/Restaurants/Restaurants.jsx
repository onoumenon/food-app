import React, { Component } from "react";
import { getRestaurants } from "../../services/restaurantService";
import Restaurant from './Restaurant';

const cardStyle = {
  width: "20rem"
};

class Restaurants extends Component {
  state = {
    restaurants: getRestaurants()
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {this.state.restaurants.map(restaurant => (
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 d-flex">
              <Restaurant details={restaurant}/>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Restaurants;
