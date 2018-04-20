import React from "react";
import PropTypes from "prop-types";
import "./TopicCard.css";
import Card, { CardContent } from "material-ui/Card";



function SimpleCard(props) {
    return (
        <div>
            <Card>
                <CardContent>
                    <p>{props.name}</p>
                    <p>{props.subtopics.map(subt => {
                        return <p>{subt.name}</p>
                    })}</p>
                </CardContent>
            </Card>
        </div>
    )
}


export default SimpleCard;