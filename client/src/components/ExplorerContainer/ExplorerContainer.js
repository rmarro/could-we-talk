import React from "react";
import "./ExplorerContainer.css";
import topics from "../../topics.json";
import TopicCard from "../TopicCard";

class ExplorerContainer extends React.Component {

    state = {
        topics: topics
    }

    render() {
        return (
            <div className="explorercontainer">
                {this.state.topics.map(card => {
                    return <TopicCard name={card.topic} subtopics={card.subtopics} />
                })}
            </div>
        )
    }
}

export default ExplorerContainer;