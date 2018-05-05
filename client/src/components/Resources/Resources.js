import React from "react";
import { Component } from 'react';
import { render } from 'react-dom';
import MindMap from 'react-mindmap';
 
class Example extends Component {
  render() {
    return (
      <MindMap
        nodes={this.props.nodes}
        connections={this.props.connections}
      />
    );
  }
}
 
export default Example;