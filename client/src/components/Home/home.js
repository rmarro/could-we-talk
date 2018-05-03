import React from "react";
import "./home.css";
import {Jumbotron} from "react-bootstrap";
import {Panel} from "react-bootstrap";
import {PageHeader} from "react-bootstrap";
import {Button} from "react-bootstrap";

const Home = () => 
<div>
    <div className="row Home-toprow">
        <Jumbotron className="Home-jumbotron">
            <div className="jumbo-maintext-div text-right">
                <h1 className="jumbo-maintext">Could we talk?</h1>
            </div>
            <div className="jumbo-subtext-div text-left">
                <div className="jumbo-subtext1"><h2>Get tools to build a</h2></div>
                <div className="jumbo-subtext2"><h2>[ HAPPY / HEALTHY / SPICY / INTENTIONAL / RADICAL ]</h2></div>
                <div className="jumbo-subtext3"><h2>relationship</h2></div>
            </div>
        </Jumbotron>
    </div>

    <div className="row Home-bottomrow">
        <div className="col-md-5 col-md-offset-1">
            <Panel className="Home-panel">
                <Panel.Body className="Home-panel-body">
                    <h1 className="Home-panel-header">SOLO EXPLORE</h1>
                    <h3 className="Home-panel-subtext">Individually explore aspects of your relationship, and get customized conversation starters for things you want to address.</h3>
                    <br/>
                    <div className="text-center"><Button className="Home-panel-button" href="/checkup">Get started</Button></div>
                </Panel.Body>
            </Panel>
        </div>
        <div className="col-md-5">
            <Panel className="Home-panel">
                <Panel.Body className="Home-panel-body">
                    <h1 className="Home-panel-header">COUPLE EXPLORE</h1>
                    <h3 className="Home-panel-subtext">You and your partner each complete a check up, then get a customized guide to talking through things you want to discuss.</h3>
                    <br/>
                    <div className="text-center"><Button className="Home-panel-button" href="/checkin">Get started</Button></div>
                </Panel.Body>
            </Panel>
        </div>
    </div>

</div>

export default Home;