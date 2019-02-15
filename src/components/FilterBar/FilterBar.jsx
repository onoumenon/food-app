import React from "react";

const FilterBar = props => {
  return (
    <div className="btn-group" role="group">
      <button type="button" className="btn btn-primary">
        All
      </button>
      <button type="button" className="btn btn-outline-primary">
        Western
      </button>
      <button type="button" className="btn btn-outline-primary">
        Chinese
      </button>
      <button type="button" className="btn btn-outline-primary">
        Japanese
      </button>
      <button type="button" className="btn btn-outline-primary">
        Thai
      </button>
    </div>
  );
};

export default FilterBar;
