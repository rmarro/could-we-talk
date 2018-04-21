import React from 'react';
import ExplorerContainer from "../ExplorerContainer";

class CheckUp extends React.Component {
    render() {
      return (
        <div className="container">
          <div className="row">
            <ExplorerContainer>{this.props.children}</ExplorerContainer>
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
  