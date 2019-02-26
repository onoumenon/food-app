import React from "react";

function Restaurant({ details }) {
  const {
    name,
    imageUrl,
    cuisine,
    openingTime,
    closingTime,
    averagePrice
  } = details;
  const width = { width: "20rem" };
  return (
    <div className="card my-3" style={width}>
      <img src={imageUrl} className="card-img-top img-fluid" alt="restaurant" />
      <div className="card-body">
        <h5 className="card-title font-weight-bold">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{cuisine.name}</h6>
        <h6 className="card-subtitle mb-2 text-muted">
          {openingTime} - {closingTime}
        </h6>
        <h6 className="card-subtitle mb-2 text-muted">
          Average Price: ${averagePrice}
        </h6>
      </div>

      <div className="card-footer text-muted">
        <button className="btn btn-primary btn-sm">Order</button>
      </div>
    </div>
  );
}

export default Restaurant;
