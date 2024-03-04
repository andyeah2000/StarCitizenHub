import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css'; // Pfad anpassen

function HeroSection() {
  return (
    <div className="hero-section">
      <video autoPlay muted loop id="hero-video">
        <source src="/path/to/your/video.mp4" type="video/mp4" />
        Ihr Browser unterstützt kein HTML5-Video.
      </video>
      <div className="hero-content">
        <h1>Willkommen in der Welt von Star Citizen</h1>
        <p>Beginne deine Reise und entdecke die Tiefen des Universums.</p>
        <div className="hero-links">
          <Link to="/roadmap" className="hero-link">Roadmap - Entdecke die Zukunft von Star Citizen</Link>
          <Link to="/gilds" className="hero-link">Gilden - Schließe dich der Gemeinschaft an</Link>
          <Link to="/schiffe" className="hero-link">Schiffe - Erkunde die verschiedenen Schiffe</Link>
          <Link to="/handelsrouten" className="hero-link">Handelsrouten - Optimiere deine Handelswege</Link>
          <Link to="/planeten" className="hero-link">Planeten - Besuche zahlreiche Planeten</Link>
          <Link to="/forum" className="hero-link">Forum - Diskutiere mit der Community</Link>
          <Link to="/wiki" className="hero-link">Wiki - Lerne mehr über das Universum</Link>
          <Link to="/updates" className="hero-link">Updates - Bleibe auf dem Laufenden</Link>
          {/* Füge hier weitere Links hinzu, wenn nötig */}
        </div>
        <Link to="/entdecken" className="explore-button">Jetzt erkunden</Link>
      </div>
    </div>
  );
}

export default HeroSection;





