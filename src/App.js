import React, { Component } from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import OrderPage from "./components/OrderPage/OrderPage";
import AdminPage from "./components/AdminPage/AdminPage";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Route path="/home" component={HomePage} />
        <Route path="/orders" component={OrderPage} />
        <Route path="/admin" component={AdminPage} />
      </React.Fragment>
    );
  }
}

export default App;
