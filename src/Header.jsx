import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import './Header.css'; // Pfad zum CSS-File anpassen

function Header() {
    return (
        <header className="header">
            <Navbar expand="lg" variant="dark" className="navbar-custom">
                <Container>
                    <Navbar.Brand href="#home" className="navbar-brand">
                        Star Citizen Central
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
                            <Nav.Link href="#about" className="nav-link">Über</Nav.Link>
                            <NavDropdown title="Entdecken" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#ships">Schiffe</NavDropdown.Item>
                                <NavDropdown.Item href="#planets">Planeten</NavDropdown.Item>
                                <NavDropdown.Item href="#trade">Handel</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#forum" className="nav-link">Forum</Nav.Link>
                            {/* Weitere Navigationslinks */}
                        </Nav>
                        <Nav className="ml-auto">
                            <Nav.Link href="#signin" className="nav-link">Anmelden</Nav.Link>
                            <Nav.Link href="#signup" className="nav-link">Registrieren</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;


