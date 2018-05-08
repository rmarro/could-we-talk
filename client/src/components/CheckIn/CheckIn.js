import React from 'react';
import axios from "axios";
import TopicsDiagram from "../TopicsDiagram";
import TopicsExplorer from "../TopicsExplorer";
import SuggestionsExplorer from "../SuggestionsExplorer";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
// import topics from "../../topicsfull.json";
import "./CheckIn.css";


class CheckIn extends React.Component {
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

  // TODO CHANGE THIS TO POST ROUTE
  // SEND KEY, INITIAL, AND STATE (KEY AND INITIAL WILL BE FROM FORM)
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
        <Modal className="CheckIn-modal" show={this.state.show} onHide={this.handleClose} bsSize="small">
          <Modal.Header className="CheckIn-modal-header">
            <Modal.Title className="CheckIn-modal-title">How it works:</Modal.Title>
          </Modal.Header>
          <Modal.Body className="CheckIn-modal-body">
            <h4>Click topics to explore and reflect on your relationship</h4>
            <br />
            <p>
              For each topic, you'll choose if it's feeling awesome, fine for now, or is something you want to talk about with your partner. You don't have to answer everything! Just do what's relevant to you.
            </p>
            <p>
              When you're done, choose a key that both you and your partner will use to compare your results. Make sure you each enter the exact same key!
            </p>
          </Modal.Body>
          <Modal.Footer className="CheckIn-modal-footer">
            <Button className="CheckIn-modal-button" onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>

        {/* DIAGRAM AND TOPICS PANEL*/}
        <div className="row CheckIn-toprow">
          <div className="col-md-10 col-md-offset-1 CheckIn-toprow-div">
            <div className="row">
              <div className="col-md-6 CheckIn-diagram-div">
                <TopicsDiagram diagramButtonSelect={this.diagramButtonSelect} activeDiagramButton={this.state.activeDiagramButton} panelSelect={this.panelSelect}/>
              </div>
              <div className="col-md-6">
              <TopicsExplorer topics={this.state.topics} makeTalkTrue={this.makeTalkTrue} makeTalkFalse={this.makeTalkFalse} activeKey={this.state.activePanelKey} panelSelect={this.panelSelect} diagramButtonSelect={this.diagramButtonSelect}/>
              </div>
            </div>
          </div>
        </div>
        
        {/* DONE BUTTON */}
        <div className="row">
          <div className="col-md-12 text-center">
            <Button className="CheckIn-showsuggestions-button" onClick={this.showSuggestionsClick}>I'm done!</Button>
          </div>
        </div>

        {/* SUGGESTIONS */}
        <div className="row">
          <div className="col-md-12 CheckIn-suggestions-col">
            { this.state.showSuggestions ? <SuggestionsExplorer topics={this.state.topics}/> : null }
          </div>
        </div>
      </div>
    );
  }
}
  
export default CheckIn;