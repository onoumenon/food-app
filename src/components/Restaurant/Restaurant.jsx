import React from "react";

function Restaurant(props) {
  const { details } = props;
  const width = { width: "20rem" };
  return (
    <div className="card my-3" style={width}>
      <img
        src={details.imageUrl}
        className="card-img-top img-fluid"
        alt="restaurant"
      />
      <div className="card-body">
        <h5 className="card-title">{details.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {details.cuisine.name}
        </h6>
        <p className="card-text">
          {" "}
          {details.openingTime} - {details.closingTime}
        </p>
      </div>

      <div className="card-footer text-muted">
        <button className="btn btn-info btn-sm">Order</button>
      </div>
    </div>
  );
}

export default Restaurant;
