import React from 'react'
import './Restaurant.scss'

function Restaurant(props) {
  const {details} = props
  return (
    <div className="card my-3" >
      <img src={details.imageUrl} className="card-img-top img-fluid" alt="restaurant image"/>
      <div className="card-body">
        <h5 className="card-title">{details.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{details.cusine.name}</h6>
        <p className="card-text"> {details.openingTime} - {details.closingTime}</p>
      </div>

      <div className="card-footer text-muted">
        <a href="#" className="btn btn-primary btn-sm">Order</a>
      </div>

    </div>  
  )
}

export default Restaurant
