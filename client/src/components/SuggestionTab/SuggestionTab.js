import React from "react";
import { PanelGroup } from "react-bootstrap";
import { Panel } from "react-bootstrap";
import "./SuggestionTab.css";


class SuggestionTab extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.handleSelect = this.handleSelect.bind(this);

		this.state = {
			activeKey: ""
		};
	}

	// From accordion to control which section is open
	handleSelect(activeKey) {
		this.setState({ activeKey });
	} 

	render() {
		return (
			<div className="SuggestionTab-div">
				<h4>Looks like you want to talk about these aspects of {this.props.topic}. Click to see suggestions on getting the conversation started.</h4>
				<PanelGroup accordion id="accordion-controlled-example" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
					{this.props.subtopics.map(subtopic => {
                        if (subtopic.talk === true) {
                            return (
                                <div className="SuggestionTab-panel">
                                    <Panel eventKey={subtopic.name}>
                                        <Panel.Heading>
                                            <Panel.Title className="SuggestionTab-panel-title" toggle>{subtopic.name}</Panel.Title>
                                        </Panel.Heading>
                                        <Panel.Body collapsible>
											<div>
												<h4>{subtopic.questions}</h4>
											</div>
											<br></br>
											<div>
												<h4>Starting a conversation is as easy as saying this:</h4>
												<p>{subtopic.starter}</p>
											</div>
											<br></br>
											<div>
												<h4>When you're talking, try to describe what's happening, how you feel about it, and what you would like to happen differently. Here are some examples:</h4>
												{subtopic.ideas.map(idea => {
													return <li>{idea}</li>
												})}
											</div>
                                        </Panel.Body>
                                    </Panel>
                                </div>
                            )
                        }
					})}
				</PanelGroup>
			</div>
		)
	}
};

export default SuggestionTab;