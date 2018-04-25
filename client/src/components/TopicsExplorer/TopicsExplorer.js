import React from "react";
import "./TopicsExplorer.css";
import { PanelGroup } from "react-bootstrap";
import { Panel } from "react-bootstrap";
import { Button } from "react-bootstrap";

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
										{/* Make button that calls makeTalkTrue with topic index and subtopic index*/}
										{topic.subtopics.map((subt, subtopicIndex) => {
											return <p><strong>{subt.name}:</strong> {subt.description} <Button onClick={() => this.props.makeTalkTrue(topicIndex, subtopicIndex)}>talk</Button></p> 
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


