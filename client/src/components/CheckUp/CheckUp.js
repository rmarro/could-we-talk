import React from 'react';
import TopicsExplorer from "../TopicsExplorer";
import topics from "../../topics.json";


class CheckUp extends React.Component {
  state = {
    topics: topics
  };
    render() {
      return (
        <div className="container">
          <div className="row">
            <TopicsExplorer topics={this.state.topics}>{this.props.children}</TopicsExplorer>
          </div>
          {/* <div className="row">
            <SuggestionsContainer>{this.props.children}
            actually i think this should be the tab thing?
            </SuggestionsContainer>
          </div> */}
  
        </div>
      ); 
    }
  }
  
  export default CheckUp;
  