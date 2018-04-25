import React from "react";
import { PanelGroup } from "react-bootstrap";
import { Panel } from "react-bootstrap";

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
			<div className="suggestiontab">
				<PanelGroup accordion id="accordion-controlled-example" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
					{this.props.subtopics.map(subtopic => {
						return (
							<div>
								<Panel eventKey={subtopic.name}>
									<Panel.Heading>
										<Panel.Title toggle>{subtopic.name}</Panel.Title>
									</Panel.Heading>
									<Panel.Body collapsible>
										{/* Make button that calls makeTalkTrue with topic index and subtopic index*/}
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

export default SuggestionTab;