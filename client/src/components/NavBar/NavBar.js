import React from "react";
import {Navbar, Nav, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import './NavBar.css';

const styles = {
    ["MainNavBar-header-brand"]: {
        color: "#F4F4F3"
    }
}

class MainNavBar extends React.Component {
    render() {
        return(
            <div className="row">
                <Navbar className="MainNavBar">
                    <Navbar.Header>
                        <Navbar.Brand className="MainNavBar-header-brand" style={styles["MainNavBar-header-brand"]}>
                            Could We Talk?
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav className="MainNavBar-navbar-nav">
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
            </div>
        )
    }
};

export default MainNavBar
