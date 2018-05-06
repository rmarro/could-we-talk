import React from 'react';
import {Button} from "react-bootstrap";
import "./TopicsDiagram.css";


class TopicsDiagram extends React.Component {


    // This only allows one button to be selected at a time
    // Being selected changes the class for the css (using :active was not working properly)
    onTopicClick = (topic) => {
        this.props.diagramButtonSelect(topic);
        this.props.panelSelect(topic)
    }

    render() {
        return (
            <div>
                <div className="row TopicsDiagram-buttonrow">
                    <div className="col-md-6 text-center">
                        <Button className={this.props.activeDiagramButton === "Communication" ? "TopicsDiagram-button-selected" : "TopicsDiagram-button"} onClick={() => this.onTopicClick("Communication")}>Communication</Button>
                    </div>
                    <div className="col-md-6 text-center">
                        <Button className={this.props.activeDiagramButton === "Structure" ? "TopicsDiagram-button-selected" : "TopicsDiagram-button"} onClick={() => this.onTopicClick("Structure")}>Structure</Button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 text-center">
                        <Button className="TopicsDiagram-center">Click a topic<br/>to explore</Button>
                    </div>
                </div>

                <div className="row TopicsDiagram-buttonrow">
                    <div className="col-md-6 text-center">
                        <Button className={this.props.activeDiagramButton === "Sexual Health" ? "TopicsDiagram-button-selected" : "TopicsDiagram-button"} onClick={() => this.onTopicClick("Sexual Health")}>Sexual Health</Button>
                    </div>
                    <div className="col-md-6 text-center">
                        <Button className={this.props.activeDiagramButton === "Responsibilities" ? "TopicsDiagram-button-selected" : "TopicsDiagram-button"} onClick={() => this.onTopicClick("Responsibilities")}>Responsibilities</Button>
                    </div>
                </div>
            </div>
        )
    }
};

export default TopicsDiagram
