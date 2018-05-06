import React from "react";
import { Component } from 'react';
import MindMap from 'react-mindmap';
 

const nodes = [
  {
    "text": "Resources",
    "fx": 0,
    "fy": 0
  },

  {
    "text": "Communication",
    "fx": -200,
    "fy": -150
  },
  {
    "text": "Frequency",
    "url": "",
    "fx": -400,
    "fy": -300
  },
  {
    "text": "Tone",
    "url": "",
    "fx": -200,
    "fy": -300
  },
  {
    "text": "Conflict Resolution",
    "url": "",
    "fx": -500,
    "fy": -150
  },

  {
    "text": "Structure",
    "fx": 200,
    "fy": -150
  },
  {
    "text": "Length",
    "url": "",
    "fx": 400,
    "fy": -300
  },
  {
    "text": "Exclusivity",
    "url": "",
    "fx": 200,
    "fy": -300
  },
  {
    "text": "Purpose",
    "url": "",
    "fx": 500,
    "fy": -150
  },

  {
    "text": "Sexual Health",
    "fx": -200,
    "fy": 150
  },
  {
    "text": "Sexual Satisfaction",
    "url": "",
    "fx": -400,
    "fy": 300
  },
  {
    "text": "Protection",
    "url": "",
    "fx": -200,
    "fy": 300
  },
  // {
  //   "text": "X1",
  //   "url": "",
  //   "fx": -500,
  //   "fy": 150
  // },

  {
    "text": "Responsibilities",
    "fx": 200,
    "fy": 150
  },
  {
    "text": "Finances",
    "url": "",
    "fx": 400,
    "fy": 300
  },
  {
    "text": "Chores",
    "url": "",
    "fx": 200,
    "fy": 300
  },
  // {
  //   "text": "X2",
  //   "url": "",
  //   "fx": 500,
  //   "fy": 150
  // },
  
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
  },
  {
    "source": "Resources",
    "target": "Responsibilities",
  },
  {
    "source": "Communication",
    "target": "Frequency",
  },
  {
    "source": "Communication",
    "target": "Tone",
  },
  {
    "source": "Communication",
    "target": "Conflict Resolution",
  },
  {
    "source": "Structure",
    "target": "Exclusivity",
  },
  {
    "source": "Structure",
    "target": "Length",
  },
  {
    "source": "Structure",
    "target": "Purpose",
  },
  {
    "source": "Sexual Health",
    "target": "Sexual Satisfaction",
  },
  {
    "source": "Sexual Health",
    "target": "Protection",
  },
  // {
  //   "source": "Sexual Health",
  //   "target": "X1",
  // },
  {
    "source": "Responsibilities",
    "target": "Finances",
  },
  {
    "source": "Responsibilities",
    "target": "Chores",
  },
  // {
  //   "source": "Responsibilities",
  //   "target": "X2",
  // }
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