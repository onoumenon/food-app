import React, { Component } from "react";
import HomePage from "./components/HomePage/HomePage";
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <HomePage />
      </div>
    );
  }
}

export default App;
