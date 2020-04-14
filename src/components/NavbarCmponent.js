import React from 'react';
import {Navbar, Nav, NavItem } from 'react-bootstrap'
import {Link, NavLink} from 'react-router-dom'

const NavbarComponent = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#Users">User Info</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link to="/" href="/">Home</Nav.Link>
                        <Nav.Link to="/userform" href="/userform">Add User</Nav.Link>
                        <Nav.Link to="/usertable" href="/usertable">User Table</Nav.Link>
                        {/*<Nav.Link to="/userdetail" href="/userdetail">User Detail</Nav.Link>*/}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavbarComponent;