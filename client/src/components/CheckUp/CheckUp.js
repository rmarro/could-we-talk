import React from 'react';
import axios from "axios";
import TopicsDiagram from "../TopicsDiagram";
import TopicsExplorer from "../TopicsExplorer";
import SuggestionsExplorer from "../SuggestionsExplorer";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
// import topics from "../../topicsfull.json";
import "./CheckUp.css";


class CheckUp extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: true,
      topics: [],
      showSuggestions: false,
      activePanelKey: "",
      activeDiagramButton: ""
    };
  }
  

  // Get all the topics info from the db
  componentDidMount = () => {
		axios.get("/api/").then((response) => {
      const topics = response.data.sort(function(a, b) {
        return a.num - b.num
      });
			this.setState({
				topics: topics
      });
		});
  }

  // Closes modal
  handleClose() {
    this.setState({ show: false });
  }

  // Active topic in the diagram
  diagramButtonSelect = (activeDiagramButton) => {
    this.setState({ activeDiagramButton })
  }
  
  // From accordion to control which section is open
	panelSelect = (activePanelKey) => {
		this.setState({ activePanelKey });
	}

  // Set subtopic talk to true
  makeTalkTrue = (topicIndex, subtopicIndex) => {
    const topics = this.state.topics.slice();
    topics[topicIndex].subtopics[subtopicIndex].talk = true;
    this.setState({topics: topics});
  }

  // Set subtopic talk to false
  makeTalkFalse = (topicIndex, subtopicIndex) => {
    const topics = this.state.topics.slice();
    topics[topicIndex].subtopics[subtopicIndex].talk = false;
    this.setState({topics: topics});
  }

  // "I'm done" Button to minimize explorer and show suggestions tabs
  showSuggestionsClick = () => {
    this.setState({ showSuggestions: true });
    this.setState({ activePanelKey: "" });
    this.setState({ activeDiagramButton: "" })
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12 text-center">
            
          </div>
        </div>

        {/* MODAL */}
        <Modal className="CheckUp-modal" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header className="CheckUp-modal-header">
            <Modal.Title className="CheckUp-modal-title">How it works:</Modal.Title>
          </Modal.Header>
          <Modal.Body className="CheckUp-modal-body">
            <h4>Click topics to explore and reflect on your relationship</h4>
            <br />
            <p>
              For each topic, you'll choose if it's feeling awesome, fine for now, or is something you want to talk about with your partner. You don't have to answer everything! Just do what's relevant to you.
            </p>
          </Modal.Body>
          <Modal.Footer className="CheckUp-modal-footer">
            <Button className="CheckUp-modal-button" onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>

        {/* DIAGRAM AND TOPICS PANEL*/}
        <div className="row CheckUp-toprow">
          <div className="col-md-6 CheckUp-diagram-div">
            <TopicsDiagram diagramButtonSelect={this.diagramButtonSelect} activeDiagramButton={this.state.activeDiagramButton} panelSelect={this.panelSelect}/>
          </div>
          <div className="col-md-6">
          <TopicsExplorer topics={this.state.topics} makeTalkTrue={this.makeTalkTrue} makeTalkFalse={this.makeTalkFalse} activeKey={this.state.activePanelKey} panelSelect={this.panelSelect} diagramButtonSelect={this.diagramButtonSelect}/>
          </div>
        </div>
        
        {/* DONE BUTTON */}
        <div className="row">
          <div className="col-md-12 text-center">
            <Button className="CheckUp-showsuggestions-button" onClick={this.showSuggestionsClick}>I'm done!</Button>
          </div>
        </div>

        {/* SUGGESTIONS */}
        <div className="row">
          <div className="col-md-12 CheckUp-suggestions-col">
            { this.state.showSuggestions ? <SuggestionsExplorer topics={this.state.topics}/> : null }
          </div>
        </div>
      </div>
    );
  }
}
  
export default CheckUp;