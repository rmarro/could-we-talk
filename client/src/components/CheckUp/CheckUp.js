import React from 'react';
import axios from "axios";
import TopicsExplorer from "../TopicsExplorer";
import SuggestionsExplorer from "../SuggestionsExplorer";
// import topics from "../../topicsfull.json";


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

  render() {
    return (
      <div className="container">
        <div className="row">
          <TopicsExplorer topics={this.state.topics} makeTalkTrue={this.makeTalkTrue} makeTalkFalse={this.makeTalkFalse}>{this.props.children}</TopicsExplorer>
        </div>
        <div className="row">
            <SuggestionsExplorer topics={this.state.topics}>{this.props.children}
            </SuggestionsExplorer>
          </div>
      </div>
    );
  }

}
  
  export default CheckUp;
  