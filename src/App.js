import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import OrderPage from "./components/OrderPage/OrderPage";
import AdminPage from "./components/AdminPage/AdminPage";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/orders" component={OrderPage} />
            <Route path="/admin" component={AdminPage} />
            <Redirect from="/" to="/home" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
