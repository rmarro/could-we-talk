import React from "react";
import { Component } from 'react';
import MindMap from 'react-mindmap';
 

const nodes = [
  {
    "text": "Resources",
  },
  {
    "text": "Communication",
    "url": "",

  },
  {
    "text": "Structure",
    "url": "",
  },
  {
    "text": "Sexual Health",
    "url": "",
  }
]

const connections = [
  {
    "source": "Resources",
    "target": "Communication",
  },
  {
    "source": "Resources",
    "target": "Structure",
  },
  {
    "source": "Resources",
    "target": "Sexual Health",
  }
]


class Example extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <MindMap
            nodes={nodes}
            connections={connections}
          />
        </div>
      </div>
    );
  }
}
 
export default Example;