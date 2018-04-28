import React from 'react';
import axios from "axios";
import TopicsExplorer from "../TopicsExplorer";
import SuggestionsExplorer from "../SuggestionsExplorer";
import { Button } from "react-bootstrap";
// import topics from "../../topicsfull.json";
import "./CheckUp.css";



class CheckUp extends React.Component {
  state = {
    topics: [],
    showSuggestions: false
  };

  componentDidMount = () => {
		axios.get("/api/").then((response) => {
			this.setState({
				topics: response.data
      });
		});
  }
  
  // Set subtopic talk to true
  makeTalkTrue = (topicIndex, subtopicIndex) => {
    const topics = this.state.topics.slice();
    topics[topicIndex].subtopics[subtopicIndex].talk = true;
    this.setState({topics: topics});
    console.log(topics);
  }

  makeTalkFalse = (topicIndex, subtopicIndex) => {
    const topics = this.state.topics.slice();
    topics[topicIndex].subtopics[subtopicIndex].talk = false;
    this.setState({topics: topics});
    console.log(topics);
  }

  showSuggestionsClick = () => {
    this.setState({ showSuggestions: true })
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
          </div>
          <div className="col-md-6">
          <TopicsExplorer topics={this.state.topics} makeTalkTrue={this.makeTalkTrue} makeTalkFalse={this.makeTalkFalse}>{this.props.children}</TopicsExplorer>
          </div>
        </div>
        
        <Button onClick={this.showSuggestionsClick}>I'm done!</Button>
        <div className="row">
            { this.state.showSuggestions ? <SuggestionsExplorer topics={this.state.topics}>{this.props.children}
            </SuggestionsExplorer> : null }
          </div>
      </div>
    );
  }
}
  
export default CheckUp;