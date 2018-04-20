import React from "react";
import "./TopicCard.css";


class TopicCard extends React.Component {

    render() {
        return (
            <div>
                <div className="col-md-12">
                    <div className="topic-card">
                        <p>{this.props.name}</p>
                        <p>{this.props.subtopics.map(subt => {
                            return <p>{subt.name}</p>
                        })}</p>
                    </div>
                </div>
            </div>
        )
    }
};

export default TopicCard;