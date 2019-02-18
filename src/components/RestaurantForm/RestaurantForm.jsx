import React, { Component } from "react";
import { getCuisines } from "../../services/cuisineService";
import Input from "../common/Input/Input";
import SelectInput from "../common/Input/SelectInput";

class RestaurantForm extends Component {
  state = {
    cuisines: getCuisines()
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Creating a new restaurant")
    this.props.history.replace(this.props.returnPath);
  };

  render() {
    const { cuisines } = this.state;
    return (
      <div>
        <h3>New Restaurant</h3>
        <form onSubmit={this.handleSubmit}>
          <Input name="name" label="Name" />
          <Input name="address" label="Address" />
          <Input name="opening-time-input" label="Opening Time" type="text" />
          <Input name="closing-time-input" label="Closing Time" type="text" />
          <SelectInput name="cuisine" label="Cusine" options={cuisines} />
          <Input name="average-price" label="Average Price" type="number" />
          <Input name="image-url" label="Image URL" />
          <button className="btn btn-primary btn-sm">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default RestaurantForm;
