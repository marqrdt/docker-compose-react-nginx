import React, {Fragment, useState} from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Container } from 'react-bootstrap';
//import { Container } from 'react-bootstrap/lib/Tab';
import {Link} from 'react-router-dom';

import './index.scss';

const CustomNavbar = (props) => {
    const [showBasic, setShowBasic] = useState(true);

    return (
        <Navbar activeKey="1" expand="lg">
            <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav variant="pills" className="me-auto">
                    <Navbar.Brand className="navitem-style text-center" as={Link} to="/">newscores</Navbar.Brand>
                    <Nav.Item className="navitem-style text-center">
                        <Nav.Link as={Link} to="/about" aria-controls="about-page">about</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="navitem-style text-center">
                        <Nav.Link as={Link} to="/events">events</Nav.Link>
                    </Nav.Item>
                    <NavDropdown className="navitem-style text-center" title="music" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/music">About my music</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item as={Link} to="/music_scores">Scores</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/music_recordings">Recordings</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/random_melody">Random Melody</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown className="navitem-style text-center" title="graphics" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/artwork">artwork</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/fractals">fractals</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item className="navitem-style text-center">
                        <Nav.Link as={Link} to="/codez">codez</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="navitem-style text-center">
                        <Nav.Link as={Link} to="/blog">blog</Nav.Link>
                    </Nav.Item>
                    {/*
                    <Nav.Item className="navitem-style text-center">
                        <Nav.Link as={Link} to="/signin">signin</Nav.Link>
                    </Nav.Item>
    */}
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;
//module.exports = CustomNavbar;
