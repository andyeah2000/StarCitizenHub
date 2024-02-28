import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button, Tab, Tabs, ListGroup } from 'react-bootstrap';
import './Gilds.css';

const ProfileOverview = ({ profiles, onProfileSelect }) => {
  const [focusedProfile, setFocusedProfile] = useState(null);

  const handleProfileClick = (profile) => {
    setFocusedProfile(profile);
    onProfileSelect(profile);
  };

  return (
    <Container fluid className="profile-overview">
      <Row>
        {profiles.map((profile, index) => (
          <Col md={4} key={index}>
            <Card 
              className={`profile-card ${focusedProfile === profile ? 'focused' : ''}`} 
              onClick={() => handleProfileClick(profile)}
            >
              <Card.Img variant="top" src={profile.image} />
              <Card.Body>
                <Card.Title>{profile.name}</Card.Title>
                <Card.Text>{profile.description}</Card.Text>
                {/* Versteckter zusätzlicher Inhalt, der bei Fokussierung angezeigt wird */}
                <div className="extra-content">
                  {/* Hier können Sie zusätzlichen Inhalt einfügen, der bei Fokussierung sichtbar wird */}
                  <p>Zusätzliche Informationen über {profile.name}</p>
                  {/* Weitere Elemente wie Listen, Bilder etc. können hier eingefügt werden */}
                </div>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Role: {profile.role}</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};


const EquipmentList = ({ equipment }) => {
  return (
    <ListGroup>
      {equipment.map((item, index) => (
        <ListGroup.Item key={index}>{item}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

const AchievementsList = ({ achievements }) => {
  return (
    <ListGroup>
      {achievements.map((achievement, index) => (
        <ListGroup.Item key={index}>{achievement}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

const ProfileGallery = ({ images }) => {
  return (
    <div className="profile-gallery">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Gallery image ${index}`} className="VerbalPics-SC-BGs-148.jpg" />
      ))}
    </div>
  );
};

const ProfileDetail = ({ profile, show, handleClose }) => {
  const [key, setKey] = useState('bio');

return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{profile.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs
          id="profile-tabs"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="bio" title="Biography">
            <p>{profile.biography}</p>
          </Tab>
          <Tab eventKey="equipment" title="Equipment">
            <EquipmentList equipment={profile.equipment} />
          </Tab>
          <Tab eventKey="achievements" title="Achievements">
            <AchievementsList achievements={profile.achievements} />
          </Tab>
          <Tab eventKey="gallery" title="Gallery">
            <ProfileGallery images={profile.galleryImages} />
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

  const ProfilesPage = () => {
    const [selectedProfile, setSelectedProfile] = useState(null);

  // Sample profiles data
  const sampleProfiles = [
    {
      name: "Eclipse Raider",
        description: "Ein erfahrener Weltraumpirat, bekannt für gewagte Raubzüge in gefährlichen Sektoren.",
        role: "Pirat",
        image: "/images/eclipse-raider.jpg",
        biography: "Eclipse Raider ist seit über einem Jahrzehnt in den entlegensten Ecken des Universums unterwegs...",
        equipment: ["Laser Blaster V3", "Quantum Drive Booster", "Stealth Armor"],
        achievements: ["Gewinner des Asteroiden-Rallye 2949", "Meistgesuchter Pirat in der Vega-Sektor"],
        galleryImages: ["/images/eclipse-raider-1.jpg", "VerbalPics-SC-BGs-134.jpg"]
    },
    {
      name: "Orion Explorer",
        description: "Ein mutiger Entdecker, der stets die Grenzen des bekannten Raums erweitert.",
        role: "Entdecker",
        image: "/images/orion-explorer.jpg",
        biography: "Orion Explorer hat zahlreiche unerforschte Planeten kartografiert und ist ein Pionier der Weltraumforschung...",
        equipment: ["Advanced Navigation System", "Long-Range Scanner", "Eco-Friendly Fuel Converter"],
        achievements: ["Erster Mensch auf Proxima Centauri", "Entdecker des Dyson-Rings"],
        galleryImages: ["/images/orion-explorer-1.jpg", "VerbalPics-SC-BGs-117.jpg"]
    },
    {
      name: "Galactic Trader",
        description: "Ein gerissener Händler, bekannt für das Aushandeln profitabler Deals im ganzen Universum.",
        role: "Händler",
        image: "/images/galactic-trader.jpg",
        biography: "Galactic Trader hat ein Handelsimperium aufgebaut, das von luxuriösen Artefakten bis zu seltenen Mineralien reicht...",
        equipment: ["Automated Trade AI", "High-Speed Cargo Drones", "Enhanced Security System"],
        achievements: ["Größter Deal im Andromeda-Sektor", "Erfinder des interstellaren Börsenindex"],
        galleryImages: ["/images/galactic-trader-1.jpg", "Source (3).png"]
    },
  ];

return (
  <div>
    <ProfileOverview profiles={sampleProfiles} onProfileSelect={setSelectedProfile} />
    {selectedProfile && (
      <ProfileDetail
        profile={selectedProfile}
        show={!!selectedProfile}
        handleClose={() => setSelectedProfile(null)}
      />
    )}
  </div>
);
};

export default ProfilesPage;
