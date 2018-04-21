import React from "react";
import {Navbar, Nav, NavItem} from "react-bootstrap";
// import {Nav} from "react-bootstrap";
// import {NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";


class MainNavBar extends React.Component {
    render() {
        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        Could We Talk?
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <LinkContainer exact="true" to="/">
                        <NavItem eventKey={1}>
                            Home
                        </NavItem>
                    </LinkContainer>
                    <LinkContainer exact="true" to="/checkup">
                        <NavItem eventKey={2}>
                            Check Up
                        </NavItem>
                    </LinkContainer>
                    <NavItem eventKey={3} exact="true" href="#">
                        Check In
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
};

export default MainNavBar