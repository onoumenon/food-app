import React from "react";

function SortBySelect({ selectedSort, handleSortSelect }) {
  return (
    <div>
      <label htmlFor="sortBy" className="mr-1">
        Sort by:
      </label>
      <select
        className="btn btn-outline-primary btn-sm mt-1"
        id="sortBy"
        onChange={handleSortSelect}
        value={selectedSort}
      >
        <option value="name" className="dropdown-item">
          Restaurant Name
        </option>
        <option value="averagePrice" className="dropdown-item">
          Average Price
        </option>
      </select>
    </div>
  );
}

export default SortBySelect;
