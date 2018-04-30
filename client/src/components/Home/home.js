import React from "react";
import "./home.css";
import {Jumbotron} from "react-bootstrap";
import {Panel} from "react-bootstrap";
import {PageHeader} from "react-bootstrap";
import {Button} from "react-bootstrap";

const Home = () => 
<div>
    <Jumbotron className="Home-jumbotron">
        <h1 className="jumbo-maintext">Communication is key to a healthy relationship, but it can be hard to find the right words.</h1>
        <br/>
        <h2 className="jumbo-subtext"><strong>Could We Talk</strong> helps you reflect on your relationship, and gives you tools to bring up important conversations with your partner.</h2>
    </Jumbotron>

    <div className="row">
        <div className="col-md-5 col-md-offset-1">
            <Panel className="Home-panel">
                <Panel.Body className="Home-panel-body">
                    <h1 className="Home-panel-header">Relationship Check Up</h1>
                    <h3 className="Home-panel-subtext">Individually explore aspects of your relationship, and get customized conversation starters for things you want to address.</h3>
                    <br/>
                    <Button href="/checkup">Get started</Button>
                </Panel.Body>
            </Panel>
        </div>
        <div className="col-md-5">
            <Panel className="Home-panel">
                <Panel.Body className="Home-panel-body">
                    <h1 className="Home-panel-header">Relationship Check In</h1>
                    <h3 className="Home-panel-subtext">You and your partner each complete a check up, then get a customized guide to talking through things you want to discuss.</h3>
                    <br/>
                    <Button href="/checkin">Get started</Button>
                </Panel.Body>
            </Panel>
        </div>
    </div>

</div>

export default Home;