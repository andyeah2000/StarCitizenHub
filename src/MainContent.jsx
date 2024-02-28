import React from 'react';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import './MainContent.css'; // Stellen Sie sicher, dass der Pfad zu Ihrer CSS-Datei korrekt ist

function MainContent() {
  return (
    <main className="main-content">
      {/* Hero Section mit Video-Hintergrund */}
      <div className="hero-section">
        <video autoPlay muted loop id="hero-video">
          <source src="Pyro III Cinematic - Star Citizen.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay">
          <h1>Star Citizen Central</h1>
        </div>
      </div>

      <Container fluid>
        {/* Willkommenstext */}
        <Row className="justify-content-center mt-4">
          <Col md={8} className="text-center">
            <div className="welcome-text">
              <h2>Willkommen in der Welt von Star Citizen</h2>
              <p>
                Tauchen Sie ein in das Universum, handeln Sie mit Ressourcen und interagieren Sie mit einer lebendigen Community von Spielern. Entdecken Sie die unendlichen Weiten und Geschichten, die in Star Citizen auf Sie warten.
              </p>
            </div>
          </Col>
        </Row>
        {/* Community Highlights */}
        <Row className="my-4">
          <Col lg={6} md={12}>
            <Card className="highlight-card">
              <Card.Img variant="top" src="Source (11).jpg" />
              <Card.Body>
                <Card.Title>Community Spotlight</Card.Title>
                <Card.Text>
                  Tauchen Sie ein in die inspirierenden Geschichten und Erfolge unserer Spieler.
                </Card.Text>
                <Button variant="primary">Mehr erfahren</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12}>
            <Card className="highlight-card">
              <Card.Img variant="top" src="Source.png" />
              <Card.Body>
                <Card.Title>Neueste Ereignisse</Card.Title>
                <Card.Text>
                  Bleiben Sie auf dem Laufenden mit den neuesten Ereignissen und Updates im Star Citizen Universum.
                </Card.Text>
                <Button variant="primary">Aktuelles</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Spiel- und Website-Erklärung */}
        <Row className="my-4 game-explanation">
          <Col>
            <h2>Was ist Star Citizen?</h2>
            <p>
              Star Citizen ist ein grenzenloses Weltraumabenteuer, das Ihnen die Freiheit gibt, Ihr eigenes Schicksal in einem massiven Sternensystem zu gestalten, mit Hunderten von Planeten zu erkunden und einer Vielzahl von Wegen, Ihr Leben im Spiel zu leben.
            </p>
          </Col>
        </Row>
        {/* Medien-Showcase mit Carousel */}
        <Row className="media-showcase my-4">
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="DRAK_Kraken_Promo_Action01_GR12_PJ02-black-_CC (1).jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Entdecken Sie neue Welten</h3>
                  <p>Erleben Sie die atemberaubende Schönheit der Galaxie.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="Source (3).png"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Begegnungen im All</h3>
                  <p>Begegnen Sie anderen Spielern und bilden Sie Allianzen oder Rivalitäten.</p>
                </Carousel.Caption>
              </Carousel.Item>
              {/* Weitere Carousel-Items können hier eingefügt werden */}
            </Carousel>
          </Col>
        </Row>

        {/* Feature-Bereich */}
        <Row className="features-section my-4">
          <Col md={4}>
            <Card className="feature-card">
              <Card.Body>
                <Card.Title>Umfangreicher Handel</Card.Title>
                <Card.Text>
                  Entdecken Sie dynamische Wirtschaftssysteme und werden Sie ein interstellarer Händler.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="feature-card">
              <Card.Body>
                <Card.Title>Epische Raumschlachten</Card.Title>
                <Card.Text>
                  Nehmen Sie an epischen Raumschlachten teil und schreiben Sie Ihre eigene Geschichte.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="feature-card">
              <Card.Body>
                <Card.Title>Erkundung</Card.Title>
                <Card.Text>
                  Erkunden Sie unbekannte Welten und entdecken Sie neue Lebensformen.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* Aufruf zum Handeln (CTA) */}
        <Row className="justify-content-center my-4">
          <Col md={6} className="text-center">
            <h2>Werden Sie Teil der Community</h2>
            <p>Schließen Sie sich Tausenden von Spielern weltweit an und nehmen Sie Teil am Aufbau des Universums von Star Citizen.</p>
            <Button variant="primary" size="lg">Jetzt beitreten</Button>
          </Col>
        </Row>

        {/* Testimonials oder Nutzerbewertungen */}
        <Row className="testimonials my-4">
          <Col md={4}>
            <Card className="testimonial-card">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    "Die Detailtiefe in Star Citizen ist unglaublich. Jedes Schiff fühlt sich einzigartig an und die Welten sind lebendig."
                  </p>
                  <footer className="blockquote-footer">
                    Commander Shepard, <cite title="Source Title">Explorer</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="testimonial-card">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    "Star Citizen ist mehr als nur ein Spiel, es ist eine Gemeinschaft, eine Familie, die zusammen das Weltall erkundet."
                  </p>
                  <footer className="blockquote-footer">
                    Jane Doe, <cite title="Source Title">Trader</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          {/* Neues Testimonial */}
            <Col md={4}>
              <Card className="testimonial-card">
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                      "Die Möglichkeiten in Star Citizen sind grenzenlos. Jeder Flug ist ein neues Abenteuer und die Community ist unglaublich unterstützend."
                    </p>
                    <footer className="blockquote-footer">
                      Alex Ryder, <cite title="Source Title">Bounty Hunter</cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
          </Row>
      </Container>
    </main>
  );
}

export default MainContent;



