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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                to="/home"
                className="nav-link font-weight-bold"
                activeStyle={{ color: "white" }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/orders"
                className="nav-link font-weight-bold"
                activeStyle={{ color: "white" }}
              >
                Orders
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/admin"
                className="nav-link font-weight-bold"
                activeStyle={{ color: "white" }}
              >
                Admin
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
