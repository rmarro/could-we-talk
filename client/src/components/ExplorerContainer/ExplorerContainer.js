import React from "react";
import "./ExplorerContainer.css";
import topics from "../../topics.json";
import SimpleCard from "../TopicCard";

class ExplorerContainer extends React.Component {

    state = {
        topics: topics
    }

    render() {
        return (
            <div className="explorercontainer">
                {this.state.topics.map(card => {
                    return <SimpleCard name={card.topic} subtopics={card.subtopics} />
                })}
            </div>
        )
    }
}

export default ExplorerContainer;