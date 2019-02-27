import React, { Component } from "react";
import { getRestaurants } from "../../services/restaurantService";
import { getCuisines, getDefaultCuisine } from "../../services/cuisineService";
import Restaurant from "../Restaurant/Restaurant";
import FilterBar from "../FilterBar/FilterBar";
import SortBySelect from "./../SortBySelect/SortBySelect";

class HomePage extends Component {
  state = {
    restaurants: getRestaurants(),
    cuisines: [getDefaultCuisine(), ...getCuisines()],
    selectedCuisine: null,
    sortByOptions: [
      { name: "Restaurant Name", value: "name" },
      { name: "Average Price", value: "averagePrice" }
    ],
    selectedSort: "name"
  };

  handleCuisineSelect = cuisine => {
    const finalCuisine = cuisine.name === "All" ? null : cuisine;
    this.setState({
      selectedCuisine: finalCuisine
    });
  };

  handleSortSelect = event => {
    this.setState({ selectedSort: event.target.value });
  };

  render() {
    const {
      restaurants,
      cuisines,
      selectedCuisine,
      selectedSort,
      sortByOptions
    } = this.state;

    const filteredRestaurantList =
      selectedCuisine && selectedCuisine._id
        ? restaurants.filter(res => res.cuisine._id === selectedCuisine._id)
        : restaurants;

    const sortedFilteredRestaurantList = filteredRestaurantList.sort(
      (first, second) => {
        if (selectedSort === "averagePrice")
          return first[selectedSort] - second[selectedSort];
        else {
          if (
            first[selectedSort].toLowerCase() <
            second[selectedSort].toLowerCase()
          )
            return -1;
          if (
            first[selectedSort].toLowerCase() >
            second[selectedSort].toLowerCase()
          )
            return 1;
          return 0;
        }
      }
    );

    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col-sm-6 col-md-6 d-inline-flex justify-content-between">
            <FilterBar
              cuisines={cuisines}
              selected={selectedCuisine}
              handleClick={this.handleCuisineSelect}
            />
          </div>
          <div className="d-inline-flex col-sm-6 col-md-6 justify-content-md-end">
            <SortBySelect
              options={sortByOptions}
              selectedSort={this.state.selectedSort}
              handleSortSelect={this.handleSortSelect}
            />
          </div>
        </div>
        <div className="row">
          {sortedFilteredRestaurantList.map(restaurant => (
            <div
              className="col-sm-6 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center"
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
