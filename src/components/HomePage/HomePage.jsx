import React, { Component } from "react";
import { getRestaurants } from "../../services/restaurantService";
import { getCuisines, getDefaultCuisine } from "../../services/cuisineService";
import Restaurant from "../Restaurant/Restaurant";
import FilterBar from "../FilterBar/FilterBar";

class HomePage extends Component {
  state = {
    restaurants: getRestaurants(),
    cuisines: [getDefaultCuisine(), ...getCuisines()],
    selectedCuisine: null
  };

  handleCuisineSelect = cuisine => {
    const finalCuisine = cuisine.name === "All" ? null : cuisine;
    this.setState({
      selectedCuisine: finalCuisine
    });
  };

  render() {
    const { restaurants, cuisines, selectedCuisine } = this.state;
    const filteredRestaurantList =
      selectedCuisine && selectedCuisine._id
        ? restaurants.filter(res => res.cuisine._id === selectedCuisine._id)
        : restaurants;

    return (
      <div className="container">
        <div className="row">
          <div className="col-4 mx-auto mt-3">
            <FilterBar
              cuisines={cuisines}
              selected={selectedCuisine}
              handleClick={this.handleCuisineSelect}
            />
          </div>
        </div>

        <div className="row">
          {filteredRestaurantList.map(restaurant => (
            <div
              className="col-sm-6 col-md-6 col-lg-4 col-xl-3 d-flex"
              key={restaurant._id}
            >
              <Restaurant details={restaurant} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default HomePage;
