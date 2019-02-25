import React from "react";
// import "./Restaurants.scss";

function Restaurants({ item }) {
  const {
    _id,
    name,
    address,
    openingTime,
    closingTime,
    cuisine,
    imageUrl,
    averagePrice
  } = item;
  const cardStyle = { width: "18rem" };
  return (
    <div className=" col-sm-6 col-md-6 col-lg-4 col-xl-3 d-flex mb-3">
      <div className="card" style={cardStyle}>
        <img className="card-img-top" src={imageUrl} alt={name} />
        <div className="card-body">
          <h5 className="card-title font-weight-bold">{name}</h5>
          <div className="card-text">
            <h6 className="text muted m-0">{cuisine.name}</h6>
            <h6 className="text muted">
              {openingTime} - {closingTime}
            </h6>
          </div>
        </div>
        <div className="card-footer text-muted">
          <button className="btn btn-primary">Order</button>
        </div>
      </div>
    </div>
  );
}

export default Restaurants;
