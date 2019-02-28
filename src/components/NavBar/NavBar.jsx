import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-secondary bg-secondary">
        <NavLink to="/home" className="navbar-brand">
          <h5 className="mt-2 font-weight-bolder text-white">
            <span role="img" aria-label="pancakes">
              🥡
            </span>{" "}
            DABAO
          </h5>
        </NavLink>

        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink
              to="/home"
              className="nav-link font-weight-bold text-white"
            >
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/orders"
              className="nav-link font-weight-bold text-white"
            >
              Orders
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/admin"
              className="nav-link font-weight-bold text-white"
            >
              Admin
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
