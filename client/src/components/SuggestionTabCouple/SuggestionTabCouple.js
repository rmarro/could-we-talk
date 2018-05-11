import React from "react";
import { PanelGroup } from "react-bootstrap";
import { Panel } from "react-bootstrap";
import { Well } from "react-bootstrap";
import "./SuggestionTabCouple.css";


class SuggestionTabCouple extends React.Component {
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
			<div className="SuggestionTabCouple-div">
				<h3 className="SuggestionTabCouple-intro">Hey {this.props.usernames}! Here are aspects of {this.props.topic} that one or both of you want to talk about. Click to see suggestions on getting the conversation started.</h3>
				<PanelGroup accordion id="accordion-controlled-example" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
					{this.props.subtopics.map(subtopic => {
                        if (subtopic.talk === true) {
                            return (
                                <div className="SuggestionTabCouple-panel-div">
                                    <Panel className="SuggestionTabCouple-panel" eventKey={subtopic.name}>
                                        <Panel.Heading className="SuggestionTabCouple-panel-heading">
                                            <Panel.Title className="SuggestionTabCouple-panel-title" toggle>{subtopic.name}</Panel.Title>
                                        </Panel.Heading>
                                        <Panel.Body className="SuggestionTabCouple-panel-body" collapsible>
											<div>
												<h4>{subtopic.questions}</h4>
											</div>
											<br></br>
											<div>
												<h4>Starting a conversation is as easy as saying this:</h4>
												<Well >{subtopic.starter}</Well>
											</div>
											<div>
												<h4>When you're talking, try to describe what's happening, how you feel about it, and what you would like to happen differently. Here are some examples:</h4>
												<Well>{subtopic.ideas.map(idea => {
													return <li>{idea}</li>
												})}</Well>
											</div>
                                        </Panel.Body>
                                    </Panel>
                                </div>
                            )
                        }
					})}
				</PanelGroup>
				<Well className="SuggestionTabCouple-resources-well">Check out these other resources on {this.props.topic}:
				<p>{this.props.resources.map(resource => {
					return <li>{resource}</li>
				})}</p></Well>
			</div>
		)
	}
};

export default SuggestionTabCouple; 