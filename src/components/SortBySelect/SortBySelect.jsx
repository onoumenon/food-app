import React from "react";

function SortBySelect({ selectedSort, handleSortSelect, options }) {
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
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SortBySelect;
