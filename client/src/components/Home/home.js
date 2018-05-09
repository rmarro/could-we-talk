import React from "react";
import "./home.css";
import {Jumbotron} from "react-bootstrap";
import {Panel} from "react-bootstrap";
import {Button} from "react-bootstrap";

const Home = () => 
<div>
    <Jumbotron className="Home-jumbotron">
        <h1 className="jumbo-maintext text-center">Communication is key to a healthy relationship, but it can be hard to find the right words.</h1>
        <br/>
        <h2 className="jumbo-subtext text-center"><strong>Could We Talk</strong> helps you reflect on your relationship, and gives you tools to bring up important conversations with your partner.</h2>
    </Jumbotron>
    <div className="Home-line"></div>
    <div className="row Home-bottom-row">
        <div className="col-md-5 col-md-offset-1">
            <Panel className="Home-panel">
                <Panel.Body className="Home-panel-body">
                    <h1 className="Home-panel-header">Solo Explore</h1>
                    <h2 className="Home-panel-subtext">Individually explore aspects of your relationship, and get customized conversation starters for things you want to address.</h2>
                    <br/>
                    <div><Button className="Home-panel-button" href="/solo">Get started</Button></div>
                </Panel.Body>
            </Panel>
        </div>
        <div className="col-md-5">
            <Panel className="Home-panel">
                <Panel.Body className="Home-panel-body">
                    <h1 className="Home-panel-header">Couple Explore</h1>
                    <h2 className="Home-panel-subtext">Compares answers between you and your partner, then get a customized guide to talking through things you want to discuss.</h2>
                    <br/>
                    <div><Button className="Home-panel-button" href="/couple">Get started</Button></div>
                </Panel.Body>
            </Panel>
        </div>
    </div>

    <div className="row Home-footer">
        <div className="col-md-12 text-center">
            Check it out on <a href="https://github.com/rmarro/could-we-talk" target="_blank">Github</a>
        </div>
    </div>

</div>

export default Home;