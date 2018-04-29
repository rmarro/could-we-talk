import React from 'react';
import {Button} from "react-bootstrap";
import "./TopicsDiagram.css";


class TopicsDiagram extends React.Component {

    state = {
        selectedTopic: ""
    }

    changeSelected = (topic) => {
        this.setState({ selectedTopic: topic })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6 text-center">
                        <Button className={this.state.selectedTopic === "Communication" ? "TopicsDiagram-button-selected" : "TopicsDiagram-button"} onClick={() => {this.changeSelected("Communication"); this.props.handleSelect("Communication")}}>Communication</Button>
                    </div>
                    <div className="col-md-6 text-center">
                        <Button className={this.state.selectedTopic === "Structure" ? "TopicsDiagram-button-selected" : "TopicsDiagram-button"} onClick={() => {this.changeSelected("Structure"); this.props.handleSelect("Structure")}}>Structure</Button>
                    </div>
                </div>

                <div className="row">
                </div>

                <div className="row">
                    <div className="col-md-6 text-center">
                        <Button className="TopicsDiagram-button" onClick={() => this.props.handleSelect("Sexual Health")}>Sexual Health</Button>
                    </div>
                    <div className="col-md-6 text-center">
                        <Button className="TopicsDiagram-button" onClick={() => this.props.handleSelect("Other")}>Other</Button>
                    </div>
                </div>
            </div>
        )
    }
};

export default TopicsDiagram

// {this.state.selectedTopic === "Communication" ? "active TopicsDiagram-button" : "TopicsDiagram-button"}