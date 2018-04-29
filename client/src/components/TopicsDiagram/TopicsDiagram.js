import React from 'react';
import {Button} from "react-bootstrap";
import "./TopicsDiagram.css";


const newState = "Structure";

class TopicsDiagram extends React.Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6 text-center">
                        <div className="TopicsDiagram-word-div">Communication</div>
                    </div>
                    <div className="col-md-6 TopicsDiagram-word-div text-center">
                    <Button  onClick={() => this.props.handleSelect("Structure")}>Structure</Button>
                    </div>
                </div>

                <div className="row">
                </div>

                <div className="row">
                </div>
            </div>
        )
    }
};

export default TopicsDiagram