import React, { Component } from "react";
import { getCuisines } from "../../services/cuisineService";

class RestaurantForm extends Component {
  state = {
    cuisines: getCuisines()
  };
  handleClick = () => {
    this.props.history.replace(this.props.returnPath);
  };

  render() {
    const { cuisines } = this.state;
    return (
      <div>
        <h1>Restaurant Form</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name-input">Name</label>
            <input type="text" className="form-control" id="name-input" />
          </div>
          <div className="form-group">
            <label htmlFor="address-input">Address</label>
            <input type="text" className="form-control" id="address-input" />
          </div>
          <div className="form-group">
            <label htmlFor="opening-time-input">Opening Time</label>
            <input
              type="text"
              className="form-control"
              id="opening-time-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="closing-time-input">Closing Time</label>
            <input
              type="text"
              className="form-control"
              id="closing-time-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cuisine-input">Cuisine</label>
            <select defaultValue="" className="custom-select">
              <option key="default">Choose one</option>
              {cuisines.map((option, index) => (
                <option value={option._id} key={`${option._id}`}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="price-input">Average Price</label>
            <input
              type="number"
              min="1"
              className="form-control"
              id="price-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="image-url-input">Image URL</label>
            <input type="text" className="form-control" id="image-url-input" />
          </div>
          <button className="btn btn-primary btn-sm" onClick={this.handleClick}>
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default RestaurantForm;
