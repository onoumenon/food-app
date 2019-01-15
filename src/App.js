import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <HomePage />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
