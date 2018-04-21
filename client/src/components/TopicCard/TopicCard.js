import React from "react";
import "./TopicCard.css";
import {Panel} from "react-bootstrap";


class TopicCard extends React.Component {
    render() {
        return (
            <div>
                <Panel>
                    <Panel.Heading>
                        <p>{this.props.name}</p>
                    </Panel.Heading>
                    <Panel.Body>
                        <p>{this.props.subtopics.map(subt => {
                            return <p>{subt.name}</p>
                        })}</p>
                    </Panel.Body>
                </Panel>
            </div>
        )
    }
};

export default TopicCard;