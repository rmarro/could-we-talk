import React from "react";
import {Navbar, Nav, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import './NavBar.css';

const styles = {
    ["MainNavBar-Header-Brand"]: {
        color: "#61E6ED"
    }
}

class MainNavBar extends React.Component {
    render() {
        return(
            <div className="row">
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand className="MainNavBar-Header-Brand" style={styles["MainNavBar-Header-Brand"]}>
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
            </div>
        )
    }
};

export default MainNavBar