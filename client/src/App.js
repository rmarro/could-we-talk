import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from "./components/NavBar"
import Home from "./components/Home";
import CheckUp from "./components/CheckUp";
// import CheckIn from "./components/CheckIn";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/checkup" component={CheckUp} />
          {/* <Route exact path="/checkin" component={CheckIn} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
