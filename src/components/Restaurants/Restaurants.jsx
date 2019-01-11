import React, { Component } from 'react';
import { getRestaurants } from "../../services/restaurantService";

const cardStyle = {
  width: "20rem",
};

class Restaurants extends Component {
  state = {
    restaurants: getRestaurants()
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">

        {this.state.restaurants.map( restaurant => (
          <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 d-flex" >
            
            <div className="card my-3" style={cardStyle}>
              <img src={restaurant.imageUrl} className="card-img-top img-fluid"/>
              <div className="card-body">
                <h5 className="card-title">{restaurant.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{restaurant.cusine.name}</h6>
                <p className="card-text"> {restaurant.openingTime} - {restaurant.closingTime}</p>
              </div>

              <div class="card-footer text-muted">
                <a href="#" className="btn btn-primary btn-sm">Order</a>
              </div>

            </div>  
          </div>
        ))} 

        </div>
      </div>
    )
  }
}

export default Restaurants
