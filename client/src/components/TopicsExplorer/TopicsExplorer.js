import React from "react";
import "./TopicsExplorer.css";
import {PanelGroup} from "react-bootstrap";
import {Panel} from "react-bootstrap";

class TopicsExplorer extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleSelect = this.handleSelect.bind(this);
    
        this.state = {
          activeKey: '1'
        };
      }
    
      handleSelect(activeKey) {
        this.setState({ activeKey });
      }

    render() {
        return (
            <div className="topicsexplorer">
                <PanelGroup accordion id="accordion-controlled-example" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
                    {this.props.topics.map(topic => {
                        return (
                            <div>
                                <Panel eventKey={topic.id}>
                                    <Panel.Heading>
                                    <Panel.Title toggle>{topic.topic}</Panel.Title>
                                    </Panel.Heading>                                    
                                        <Panel.Body collapsible>
                                        {topic.subtopics.map(subt => {
                                            return <p><strong>{subt.name}:</strong> {subt.description}</p>
                                        })}
                                    </Panel.Body>
                                </Panel>
                            </div>
                        )
                    })}
                </PanelGroup>
            </div>
        )
    }
};

export default TopicsExplorer;