import React from "react";

function Table() {
  return (
    <table className="table mt-5">
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Opening Hours</th>
          <th>Cuisine</th>
          <th>AveragePrice</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The Burger Bar by Fatboy's Concepts (Boat Quay)</td>
          <td>35 Boat Quay, 049824 Singapore</td>
          <td>11:00 AM - 10:30 PM</td>
          <td>Western</td>
          <td>$25</td>
          <td><button className="btn btn-danger btn-sm">Delete</button></td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;