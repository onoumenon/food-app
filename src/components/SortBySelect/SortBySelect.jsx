import React from "react";

const SortBySelect = props => {
  return (
    <div>
      <label htmlFor="sort-by-select">Sort By</label>
      <select
        name="sort-by-select"
        className="btn btn-outline-primary dropdown-toggle mx-2"
      >
        <option value="name">Restaurant Name</option>
        <option value="averagePrice">Average Price</option>
      </select>
    </div>
  );
};

export default SortBySelect;
