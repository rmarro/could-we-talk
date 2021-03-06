import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from "./components/NavBar"
import Home from "./components/Home";
import CheckUp from "./components/CheckUp";
import Resources from "./components/Resources";
import CheckIn from "./components/CheckIn";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/solo" component={CheckUp} />
          <Route exact path="/couple" component={CheckIn} />
          <Route exact path="/resources" component={Resources} />
        </div>
      </Router>
    );
  }
}

export default App;
