import React from "react";
import {Navbar} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {NavItem} from "react-bootstrap";
import {Link} from "react-router-dom";


const MainNavBar = () =>(
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#home">Could We Talk?</a>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <NavItem eventKey={1} href="#">
                  Link
            </NavItem>
            <NavItem eventKey={2} href="#">
                  Link
            </NavItem>
        </Nav>
    </Navbar>
);

export default MainNavBar