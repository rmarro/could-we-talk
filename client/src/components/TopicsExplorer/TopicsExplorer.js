import React from "react";
import "./TopicsExplorer.css";
import { PanelGroup } from "react-bootstrap";
import { Panel } from "react-bootstrap";
import { ToggleButton } from "react-bootstrap";
import { ToggleButtonGroup } from "react-bootstrap";
import { ButtonToolbar } from "react-bootstrap";

class TopicsExplorer extends React.Component {

	render() {
		return (
			<div className="topicsexplorer">
				<PanelGroup accordion id="accordion-controlled-example" activeKey={this.props.activeKey} onSelect={this.props.panelSelect}>
					{/* Make a panel for each main topic */}
					{this.props.topics.map((topic, topicIndex) => {
						return (
							<div className="TopicsExplorer-panel-div">
								<Panel eventKey={topic.topic}>
									<Panel.Heading>
										<Panel.Title className="TopicsExplorer-panel-title" toggle onClick={ () => {this.props.diagramButtonSelect(topic.topic)}}>{topic.topic}</Panel.Title>
									</Panel.Heading>
									<Panel.Body className="TopicsExplorer-panel-body" collapsible>
										{/* Show the description and button options for each subtopic */}
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


