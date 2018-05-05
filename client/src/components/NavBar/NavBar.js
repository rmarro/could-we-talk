import React from "react";
import {Navbar, Nav, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import './NavBar.css';

const styles = {
    ["MainNavBar-header-brand"]: {
        color: "#d3d3d3"
    }
}

class MainNavBar extends React.Component {
    render() {
        return(
            <div className="row">
                <Navbar fluid="true">
                    <Navbar.Header>
                        <Navbar.Brand className="MainNavBar-header-brand" style={styles["MainNavBar-header-brand"]}>
                            Could We Talk?
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight className="MainNavBar-navbar-nav">
                        <LinkContainer exact="true" to="/">
                            <NavItem eventKey={1}>
                                Home
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer exact="true" to="/checkup">
                            <NavItem eventKey={2}>
                                Solo
                            </NavItem>
                        </LinkContainer>
                        <NavItem eventKey={3} exact="true" href="#">
                            Couple
                        </NavItem>
                        <LinkContainer exact="true" to="/resources">
                            <NavItem eventKey={4}>
                                Resources
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar>
            </div>
        )
    }
};

export default MainNavBar
