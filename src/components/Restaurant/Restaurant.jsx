import React from "react";

function Restaurant(props) {
  const { details } = props;
  return (
    <div className="card my-3" style={{ width: "20rem" }}>
      <img
        src={details.imageUrl}
        className="card-img-top img-fluid"
        alt="restaurant"
      />
      <div className="card-body">
        <h5 className="card-title" data-testid="restaurant-card-title">
          {details.name}
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {details.cuisine.name}
        </h6>
        <h6 className="card-subtitle text-muted">
          {" "}
          {details.openingTime} - {details.closingTime} <br />
          Avg Price: ${details.averagePrice}
        </h6>
      </div>

      <div className="card-footer text-muted">
        <button className="btn btn-secondary btn-sm mx-1">Order</button>
      </div>
    </div>
  );
}

export default Restaurant;
