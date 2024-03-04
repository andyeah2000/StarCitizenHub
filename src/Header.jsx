import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'; // Pfad zum CSS-File anpassen

function Header() {
    return (
        <header className="header">
            <Navbar expand="lg" variant="dark" className="navbar-custom">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="navbar-brand">
                        Star Citizen Central
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
                            <Nav.Link as={Link} to="/main-content" className="nav-link">Hauptinhalt</Nav.Link>
                            <Nav.Link as={Link} to="/video-section" className="nav-link">Videos</Nav.Link>
                            <NavDropdown title="Entdecken" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/wiki">Wiki</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/gilds">Gilden</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/updates">Updates</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/roadmap">Roadmap</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/forum" className="nav-link">Forum</Nav.Link>
                            {/* Weitere Navigationslinks entsprechend hinzufügen */}
                        </Nav>
                        <Nav className="ml-auto">
                            <Nav.Link as={Link} to="/signin" className="nav-link">Anmelden</Nav.Link>
                            <Nav.Link as={Link} to="/signup" className="nav-link">Registrieren</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;




