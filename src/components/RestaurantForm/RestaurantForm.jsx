import React, { Component } from "react";
import { getCuisines } from "../../services/cuisineService";
import Input from "../common/Input/Input";
import SelectInput from "../common/Input/SelectInput";

class RestaurantForm extends Component {
  state = {
    cuisines: getCuisines(),
    data: {
      name: "",
      address: "",
      openingTime: "",
      closingTime: "",
      cuisineId: "",
      averagePrice: "",
      imageUrl: ""
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Creating a new restaurant");
    this.props.history.replace(this.props.returnPath);
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  render() {
    const { cuisines } = this.state;
    return (
      <div>
        <h3>New Restaurant</h3>
        <form onSubmit={this.handleSubmit}>
          <Input name="name" label="Name" onChange={this.handleChange} />
          <Input name="address" label="Address" onChange={this.handleChange} />
          <Input
            name="opening-time-input"
            label="Opening Time"
            type="text"
            onChange={this.handleChange}
          />
          <Input
            name="closing-time-input"
            label="Closing Time"
            type="text"
            onChange={this.handleChange}
          />
          <SelectInput
            name="cuisineId"
            label="Cuisine"
            options={cuisines}
            onChange={this.handleChange}
          />
          <Input
            name="averagePrice"
            label="Average Price"
            type="number"
            onChange={this.handleChange}
          />
          <Input
            name="imageUrl"
            label="Image URL"
            onChange={this.handleChange}
          />
          <button className="btn btn-primary btn-sm">Save</button>
        </form>
      </div>
    );
  }
}

export default RestaurantForm;
