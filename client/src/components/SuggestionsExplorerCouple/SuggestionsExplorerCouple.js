//within each tab, render an accordion component (that component maps each subtopic)

import React from "react";
import "./SuggestionsExplorerCouple.css";
import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import SuggestionTabCouple from "../SuggestionTabCouple"; 


class SuggestionsExplorerCouple extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            activeKey: ""
        };
    }

    // From tabs to control which section is open
    handleSelect(activeKey) {
        this.setState({ activeKey });
    }

    render() {
        return (
            <div className="SuggestionsExplorerCouple-div">
                <Tabs activeKey={this.state.activekey} onSelect={this.handleSelect} id="controlled-tab-example">
                    {this.props.topics.map(topic => {
                        return (
                            <Tab eventKey={topic.topic} title={topic.topic}>
                                <SuggestionTabCouple topic={topic.topic} subtopics={topic.subtopics} resources={topic.resources} usernames={this.props.usernames}/>
                            </Tab> 
                        )
                    })}
                </Tabs>
            </div>
        )
    }
};

export default SuggestionsExplorerCouple;