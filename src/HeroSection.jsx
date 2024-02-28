import React from 'react';
import './HeroSection.css'; // Stellen Sie sicher, dass der Pfad zum CSS-File korrekt ist

function HeroSection() {
    return (
        <div className="hero-section">
            <video autoPlay muted loop id="hero-video">
                <source src="x2mate.com-What is Star Citizen_-(1080p).mp4" type="video/mp4" />
                Ihr Browser unterstützt kein HTML5-Video.
            </video>
        </div>
    );
}

export default HeroSection;



