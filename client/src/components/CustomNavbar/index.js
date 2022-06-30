import React, {Fragment, useState} from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import './index.scss';

const CustomNavbar = (props) => {
    const [showBasic, setShowBasic] = useState(true);

    const menuForAuthenticated = () => {
        console.log("props.isAuthenticated is " + props.applicationState.isAuthenticated)
        return (props.applicationState.isAuthenticated ?
            <Navbar expand='lg' className="bg-primary rounded m-4">

            </Navbar> : <Fragment/>)
    }

    return (
        <Navbar activeKey="1" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav variant="pills" className="me-auto">
                    <Navbar.Brand className="navitem-style" as={Link} to="/">newscores</Navbar.Brand>
                    <Nav.Item className="navitem-style">
                        <Nav.Link as={Link} to="/about">about</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="navitem-style">
                        <Nav.Link as={Link} to="/events">events</Nav.Link>
                    </Nav.Item>
                    <NavDropdown className="navitem-style" title="music" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/music">About my music</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item as={Link} to="/music_scores">Scores</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/music_recordings">Recordings</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown className="navitem-style" title="graphics" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/artwork">artwork</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/fractals">fractals</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item className="navitem-style">
                        <Nav.Link as={Link} to="/codez">codez</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="navitem-style">
                        <Nav.Link as={Link} to="/blog">blog</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="navitem-style">
                        <Nav.Link as={Link} to="/signin">signin</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CustomNavbar;
//module.exports = CustomNavbar;
