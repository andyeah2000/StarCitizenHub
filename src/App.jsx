import React from 'react';
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
        <div className="App">
            <Header />
            <HeroSection />
            <MainContent />
            <VideoSection />
            <WikiSection />
            <GildSection />
            <StarCitizenUpdate />
            <Roadmap />
            <Forum /> 
            <Footer />
        </div>
    );
}

export default App;






