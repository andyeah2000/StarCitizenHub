import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import HeroSection from './HeroSection';
import MainContent from './MainContent';
import WikiSection from './WikiSection';
import GildSection from './GildsSection';
import StarCitizenUpdate from './StarCitizenUpdate';
import Roadmap from './Roadmap';
import Forum from './Forum';
import Footer from './Footer';
import VideoSection from './VideoSection';
import './Global.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<HeroSection />} />
                    <Route path="/main-content" element={<MainContent />} />
                    <Route path="/video-section" element={<VideoSection />} />
                    <Route path="/wiki" element={<WikiSection />} />
                    <Route path="/gilds" element={<GildSection />} />
                    <Route path="/updates" element={<StarCitizenUpdate />} />
                    <Route path="/roadmap" element={<Roadmap />} />
                    <Route path="/forum" element={<Forum />} />
                    {/* Weitere Routen hier hinzufügen, falls nötig */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;







