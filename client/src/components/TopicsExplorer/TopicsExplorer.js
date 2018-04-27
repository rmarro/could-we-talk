import React from "react";
import "./TopicsExplorer.css";
import { PanelGroup } from "react-bootstrap";
import { Panel } from "react-bootstrap";
import { ToggleButton } from "react-bootstrap";
import { ToggleButtonGroup } from "react-bootstrap";
import { ButtonToolbar } from "react-bootstrap";

class TopicsExplorer extends React.Component {
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
			<div className="topicsexplorer">
				<PanelGroup accordion id="accordion-controlled-example" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
					{this.props.topics.map((topic, topicIndex) => {
						return (
							<div>
								<Panel eventKey={topic.topic}>
									<Panel.Heading>
										<Panel.Title toggle>{topic.topic}</Panel.Title>
									</Panel.Heading>
									<Panel.Body collapsible>
										{topic.subtopics.map((subt, subtopicIndex) => {
											return (
												<div>
													<p><strong>{subt.name}:</strong> {subt.description}</p> 
													<p>
														<ButtonToolbar>
														<ToggleButtonGroup type="radio" name="options"><ToggleButton value={1} onClick={() => this.props.makeTalkFalse(topicIndex, subtopicIndex)}>Feeling awesome!</ToggleButton> <ToggleButton value={2} onClick={() => this.props.makeTalkFalse(topicIndex, subtopicIndex)}>Fine for now</ToggleButton> <ToggleButton value={3} onClick={() => this.props.makeTalkTrue(topicIndex, subtopicIndex)}>We should talk about this</ToggleButton></ToggleButtonGroup>
														</ButtonToolbar>
														</p>
												</div>
											)
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


