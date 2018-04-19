import React, { Component } from 'react';
import './App.css';
import ExplorerContainer from "./components/ExplorerContainer";


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <ExplorerContainer>{this.props.children}</ExplorerContainer>
        </div>
        {/* <div className="row">
          <SuggestionsContainer>{this.props.children}</SuggestionsContainer>
        </div> */}

      </div>
    );
  }
}

export default App;
