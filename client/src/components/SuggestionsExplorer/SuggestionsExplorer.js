//within each tab, render an accordion component (that component maps each subtopic)

import React from "react";
import "./SuggestionsExplorer.css";
import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import SuggestionTab from "../SuggestionTab"; 


class SuggestionsExplorer extends React.Component {
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
            <div className="suggestionsexplorer">
                <Tabs activeKey={this.state.activekey} onSelect={this.handleSelect} id="controlled-tab-example">
                    {this.props.topics.map(topic => {
                        return (
                            <Tab eventKey={topic.topic} title={topic.topic}>
                                <SuggestionTab subtopics={topic.subtopics}/>
                            </Tab>
                        )
                    })}
                </Tabs>
            </div>
        )
    }
};

export default SuggestionsExplorer;