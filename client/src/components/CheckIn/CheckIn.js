import React from 'react';
import axios from "axios";
import TopicsDiagram from "../TopicsDiagram";
import TopicsExplorer from "../TopicsExplorer";
import SuggestionsExplorerCouple from "../SuggestionsExplorerCouple";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Form, FormGroup, ControlLabel, FormControl } from "react-bootstrap";

// import topics from "../../topicsfull.json";
import "./CheckIn.css";


class CheckIn extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClose1 = this.handleClose1.bind(this);
    this.handleClose2 = this.handleClose2.bind(this);

    this.state = {
      show1: true,
      show2: false,
      topics: [],
      showSuggestions: false,
      activePanelKey: "",
      activeDiagramButton: "",
      key: "",
      results: [],
      usernames: ""
    };
  }
  

  // Get all the topics info from the db
  componentDidMount = () => {
		axios.get("/api/").then((response) => {
      const topics = response.data.sort(function(a, b) {
        return a.num - b.num
      });
			this.setState({
        topics: topics,
        results: topics
      });
		});
  }

  // Closes modal 1
  handleClose1() {
    this.setState({ show1: false });
  }

  // Closes modal 2 (try again button) and checks for partner results again
  handleClose2() {
    this.setState({ show2: false });
    this.getResults(this.state.key);
  }

  // Opens modal 2
  handleOpen2() {
    this.setState({ show2: true });
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

  //Save form input as variables
  submitClick = () => {
    const initials = this.initialsInput.value;
    const key = this.keyInput.value;
    this.saveUser(initials, key);
  }
  
  //Save key in state and create new user in db
  saveUser = (initials, key) => {
    this.setState({key: key});
    const newUser = {
      initials: initials,
      key: key,
      topics: this.state.topics
    };
    axios.post("/api/user", newUser).then((response) => {
      console.log(response);
      this.getResults(key);
    });
  }

  // Get users with key and check if user is first or second to finish
  getResults = (key) => {
    //get route with :key
    axios.get("/api/user/" + key).then((response) => {
      // if response is only 1 show modal saying partner not done with try again button
      if (response.data.length === 1) {
        this.handleOpen2();
      } else if (response.data.length === 2) {
        this.compareAnswers(response.data)
      }    
    });
  }
  
  compareAnswers = (usersData) => {
    const user1Data = usersData[0];
    const user2Data = usersData[1];
    const usernames = user1Data.initials + " & " + user2Data.initials;
    this.setState({usernames: usernames})
    //user1 map each topic and map each subtopic to compare to user2 topicindex and subtopicindex
    user1Data.topics.map((topic, topicIndex) => {
      topic.subtopics.map((subtopic, subtopicIndex) => {
        //if one or both are talk=true, set state of topicindex subtopicindex to true
        if (subtopic.talk === true || user2Data.topics[topicIndex].subtopics[subtopicIndex].talk === true) {
          const results = this.state.results.slice();
          results[topicIndex].subtopics[subtopicIndex].talk = true;
          this.setState({results: results})
        }
      })
    })
    this.setState({ showSuggestions: true });
    this.setState({ activePanelKey: "" });
    this.setState({ activeDiagramButton: "" });
  }
  
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12 text-center">
            
          </div>
        </div>

        {/* FIRST MODAL */}
        <Modal className="CheckIn-modal" show={this.state.show1} onHide={this.handleClose1}>
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
            <Button className="CheckIn-modal-button" onClick={this.handleClose1}>Close</Button>
          </Modal.Footer>
        </Modal>

        {/* SECOND MODAL */}
        <Modal className="CheckIn-modal" show={this.state.show2} onHide={this.handleClose2}>
          <Modal.Header className="CheckIn-modal-header">
            <Modal.Title className="CheckIn-modal-title"></Modal.Title>
          </Modal.Header>
          <Modal.Body className="CheckIn-modal-body">
            <h4>Looks like you're the first to finish!</h4>
            <br />
            <p>
              When your partner has finished, you can click the button below to get results.
            </p>
          </Modal.Body>
          <Modal.Footer className="CheckIn-modal-footer">
            <Button className="CheckIn-modal-button" onClick={this.handleClose2}>Get Results</Button>
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
        
        {/* FORM AND SUBMIT BUTTON */}
        <div className="row">
          <div className="col-md-12 text-center">
            <Form inline>
              <FormGroup className="CheckIn-formgroup" controlId="formInlineInitials">
                <ControlLabel>Nickname or initials</ControlLabel>{' '}
                <FormControl inputRef={input => this.initialsInput = input} type="text"/>
              </FormGroup>{' '}
              <FormGroup className="CheckIn-formgroup" controlId="formInlineKey">
                <ControlLabel>Key (must be identical to partner's)</ControlLabel>{' '}
                <FormControl inputRef={input => this.keyInput = input} type="text"/>
              </FormGroup>{' '}
              <br />
              <Button className="CheckIn-submit-button" onClick={this.submitClick}>Submit</Button>
            </Form>;           
          </div>
        </div>
        

        {/* SUGGESTIONS */}
        <div className="row">
          <div className="col-md-12 CheckIn-suggestions-col">
            { this.state.showSuggestions ? <SuggestionsExplorerCouple topics={this.state.results} usernames={this.state.usernames}/> : null }
          </div>
        </div>
      </div>
    );
  }
}
  
export default CheckIn;