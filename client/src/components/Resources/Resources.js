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
    "url": "http://www.loveisrespect.org/healthy-relationships/communicate-better/",
    "category": "article",
    "fx": -200,
    "fy": -150
  },
  {
    "text": "Frequency",
    "url": "http://www.scarleteen.com/article/relationships/to_ditch_and_be_ditched_relationships_friends_and_finding_a_balance",
    "category": "article",
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
    "url": "http://www.scarleteen.com/article/relationships/how_to_clash_with_love_some_conflict_resolution_basics",
    "category": "article",
    "fx": -500,
    "fy": -150
  },

  {
    "text": "Structure",
    "url": "",
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
    "url": "http://www.scarleteen.com/article/relationships/a_first_polyamory_guide",
    "category": "article",
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
    "url": "",
    "fx": -200,
    "fy": 150
  },
  {
    "text": "Sexual Satisfaction",
    "url": "http://www.scarleteen.com/article/sexuality/yield_for_pleasure",
    "category": "article",
    "fx": -400,
    "fy": 300
  },
  {
    "text": "Protection",
    "category": "youtube",
    "url": "https://www.youtube.com/watch?v=tkVcpxOYhd8",
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
    "url": "",
    "fx": 200,
    "fy": 150
  },
  {
    "text": "Finances",
    "url": "http://www.scarleteen.com/article/etc/you_them_and_a_uhaul_considering_cohabitation",
    "category": "article",
    "fx": 400,
    "fy": 300
  },
  {
    "text": "Chores",
    "url": "http://www.scarleteen.com/article/etc/you_them_and_a_uhaul_considering_cohabitation",
    "category": "article",
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