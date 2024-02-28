import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Stellen Sie sicher, dass der Pfad korrekt ist

function Footer() {
  return (
    <div className="footer-container">
      <Container>
        <Row>
          <Col md={4}>
            <h5 className="footer-title">Über Star Citizen Wiki</h5>
            <p className="footer-text">
              Informationen über das Projekt und dessen Entwicklung.
            </p>
          </Col>
          <Col md={4}>
            <h5 className="footer-title">Schnellnavigation</h5>
            <ul className="footer-list">
              <li><a href="/schiffe" className="footer-link">Schiffe</a></li>
              <li><a href="/planeten" className="footer-link">Planeten</a></li>
              <li><a href="/handel" className="footer-link">Handel</a></li>
              {/* Weitere Links */}
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="footer-title">Kontakt</h5>
            <p className="footer-text">
              Kontaktieren Sie uns für Feedback und Supportanfragen.
            </p>
            <a href="mailto:support@starcitizenwiki.com" className="footer-link">
              support@starcitizenwiki.com
            </a>
            {/* Weitere Kontaktinformationen */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;




