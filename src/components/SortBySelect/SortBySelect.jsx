import React from "react";

const SortBySelect = props => {
  const { list } = props;
  return (
    <div>
      <label htmlFor="sort-by-select">Sort By</label>
      <select
        name="sort-by-select"
        className="btn btn-primary dropdown-toggle mx-2"
      >
        {list.map((item, index) => (
          <option key={index} value={item.value}>{item.name}</option>
        ))}
      </select>
    </div>
  );
};

export default SortBySelect;
