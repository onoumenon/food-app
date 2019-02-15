import React from "react";

const FilterBar = props => {
  const { cuisines, selected, handleClick } = props;
  const getClass = (cuisine, selected) => {
    if (!selected && cuisine.name === "All") return "btn btn-primary";
    if (selected && cuisine._id === selected._id) return "btn btn-primary";
    return "btn btn-outline-primary";
  };

  return (
    <div className="btn-group" role="group">
      {cuisines.map(cuisine => (
        <button
          key={cuisine._id}
          type="button"
          className={getClass(cuisine, selected)}
          onClick={() => handleClick(cuisine)}
        >
          {cuisine.name}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
