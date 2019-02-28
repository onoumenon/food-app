import React from "react";

const FilterBar = props => {
  const { cuisines, selected, handleClick } = props;
  const getClass = (cuisine, selected) => {
    if (!selected && cuisine.name === "All") return "btn btn-secondary";
    if (selected && cuisine._id === selected._id) return "btn btn-secondary";
    return "btn btn-outline-secondary";
  };

  return (
    <div className="btn-group" role="group">
      {cuisines.map(cuisine => (
        <button
          key={cuisine._id}
          type="button"
          className={getClass(cuisine, selected)}
          onClick={() => handleClick(cuisine)}
          data-testid={`filter-btn-${cuisine.name.toLowerCase()}`}
        >
          {cuisine.name}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
