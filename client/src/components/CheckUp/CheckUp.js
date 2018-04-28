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
          <div className="col-md-6 CheckUp-diagram-div">
          </div>
          <div className="col-md-6">
          <TopicsExplorer topics={this.state.topics} makeTalkTrue={this.makeTalkTrue} makeTalkFalse={this.makeTalkFalse}>{this.props.children}</TopicsExplorer>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-12 text-center">
            <Button className="CheckUp-showsuggestions-button" onClick={this.showSuggestionsClick}>I'm done!</Button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 CheckUp-suggestions-col">
            {/* If state.showSuggestions is true, render suggestionsExplorer, otherwise render null*/}
            { this.state.showSuggestions ? <SuggestionsExplorer topics={this.state.topics}>{this.props.children}
            </SuggestionsExplorer> : null }
          </div>
        </div>
      </div>
    );
  }
}
  
export default CheckUp;