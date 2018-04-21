import React from "react";
import "./TopicCard.css";
import {Panel} from "react-bootstrap";



const TopicCard = (props) =>(

        <div>
            <Panel>
                <Panel.body>
                    <p>{props.name}</p>
                    <p>{props.subtopics.map(subt => {
                        return <p>{subt.name}</p>
                    })}</p>
                </Panel.body>
            </Panel>
        </div>
    
)


export default TopicCard;