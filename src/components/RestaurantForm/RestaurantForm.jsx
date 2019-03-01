import React, { Component } from "react";
import Input from "./../Input/Input";
import Select from "../Input/Select";
import { getCuisines } from "./../../services/cuisineService";
import { saveRestaurant } from "./../../services/restaurantService";

export class RestaurantForm extends Component {
  state = {
    cuisines: getCuisines(),
    data: {
      name: "",
      address: "",
      openingTime: "",
      closingTime: "",
      cuisine: "",
      averagePrice: 0,
      imageUrl: ""
    }
  };

  handleChange = event => {
    const copy = { ...this.state.data };
    const keyName = event.target.name;
    const type = event.target.type;
    const value = event.target.value;

    if (type === "number") {
      copy[keyName] = parseFloat(value);
    } else {
      copy[keyName] = value;
    }
    this.setState({ data: copy });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { data, cuisines } = this.state;
    const copy = { ...data };
    const foundcuisine = cuisines.find(
      cuisine => cuisine.id === copy.cuisineId
    );
    copy.cuisine = foundcuisine;
    saveRestaurant(copy);
    this.props.history.replace("/admin");
  };

  render() {
    const { cuisines } = this.state;
    const { handleChange } = this;

    return (
      <form onSubmit={this.handleSubmit} className="col-md-6 col-sm-10 mx-auto">
        <h2>Create New</h2>
        <Input name="Name" type="text" handleChange={handleChange} />
        <Input name="Address" type="text" handleChange={handleChange} />
        <Input name="Opening Time" type="time" handleChange={handleChange} />
        <Input name="Closing Time" type="time" handleChange={handleChange} />
        <Select
          name="Cuisine"
          options={cuisines}
          handleChange={handleChange}
          keyName="cuisine"
        />
        <Input name="Average Price" type="number" handleChange={handleChange} />
        <Input name="Image URL" type="text" handleChange={handleChange} />
        <button className="btn btn-primary">Save</button>
      </form>
    );
  }
}

export default RestaurantForm;
