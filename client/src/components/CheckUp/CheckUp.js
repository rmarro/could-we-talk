import React from 'react';
import axios from "axios";
import TopicsExplorer from "../TopicsExplorer";
import { Button } from "react-bootstrap";
// import topics from "../../topics.json";


class CheckUp extends React.Component {
  state = {
    topics: []
  };

  componentDidMount = () => {
		axios.get("/api/").then((response) => {
			// ??? what do we do with the data?
			this.setState({
				topics: response.data
      });
		});
  }
  
  // I think I need to add a function that changes state of subtopic to talk: true and pass that as a prop into the topics explorer, then pass that as a prop (??) into the buttons so that when "we should talk about this" is selected, the state here updates the subtopic. Then the state gets passed to the suggestions explorer, and only renders the suggestions if that subtopic is talk: true (?????)
  // Set subtopic talk to true
  makeTalkTrue = (topicIndex, subtopicIndex) => {
    const topics = this.state.topics.slice();
    topics[topicIndex].subtopics[subtopicIndex].talk = true;
    this.setState({topics: topics});
    console.log(topics);
  }

    render() {
      return (
        <div className="container">
          <div className="row">
            <TopicsExplorer topics={this.state.topics} makeTalkTrue={this.makeTalkTrue}>{this.props.children}</TopicsExplorer>
          </div>
          {/* <div className="row">
            <SuggestionsExplorer>{this.props.children}
            </SuggestionsExplorer>
          </div> */}
  
        </div>
      ); 
    }
  }
  
  export default CheckUp;
  