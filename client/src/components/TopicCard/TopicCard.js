import React from "react";
import "./TopicCard.css";


class TopicCard extends React.Component {

    render() {
        return (
            <div>
                <div className="col-md-6">
                    <div className="topic-card">
                        <p>{this.props.name}</p>
                    </div>
                </div>
            </div>
        )
    }
};

export default TopicCard;