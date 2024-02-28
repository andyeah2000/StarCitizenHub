import React, { useState, useEffect } from 'react';
import './VideoSection.css';

function VideoItem({ src, isActive, onVideoSelect }) {
  useEffect(() => {
    const videoElement = document.getElementById(`video_${src}`);
    if (isActive) {
      videoElement.muted = true;
      const playPromise = videoElement.play();
    } else {
      videoElement.pause();
    }
  }, [isActive, src]);

        return (
          <div className={isActive ? "video-item active" : "video-item"} onClick={() => onVideoSelect(src)}>
            <video
              id={`video_${src}`}
              controls={isActive} // Kontrollelemente nur für aktives Video anzeigen
              muted={isActive} // Stummgeschaltet nur für aktives Video
              style={{ width: '100%', height: '100%' }} // Stil-Anpassungen direkt am Element
            >
              <source src={src} type="video/mp4" />
              Ihr Browser unterstützt kein HTML5-Video.
            </video>
      </div>
    );
  }
  
function VideoCarousel({ videos }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleVideoSelect = (src) => {
    const newIndex = videos.findIndex(video => video.src === src);
    if (newIndex >= 0) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <div className="video-carousel">
      {videos.map((video, index) => (
        <VideoItem
          key={index}
          src={video.src}
          isActive={index === activeIndex}
          onVideoSelect={handleVideoSelect}
        />
      ))}
    </div>
  );
}

const videoData = [
  {
    src: "Pyro III Cinematic - Star Citizen.mp4",
    title: "Video Titel 1",
    description: "Beschreibung für Video 1"
  },
  {
    src: "Pyro III Cinematic - Star Citizen.mp4",
    title: "Video Titel 2",
    description: "Beschreibung für Video 2"
  },
  {
    src: "Pyro III Cinematic - Star Citizen.mp4",
    title: "Video Titel 3",
    description: "Beschreibung für Video 3"
  },
  {
    src: "Pyro III Cinematic - Star Citizen.mp4",
    title: "Video Titel 4",
    description: "Beschreibung für Video 4"
  },
  {
    src: "Pyro III Cinematic - Star Citizen.mp4",
    title: "Video Titel 5",
    description: "Beschreibung für Video 5"
  },
];

function App() {
  return <VideoCarousel videos={videoData} />;
}

export default App;



