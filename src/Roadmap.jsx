import React, { useState, useEffect } from 'react';
import './Roadmap.css';

const Roadmap = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());

  const updates = [
      { id: 1, title: 'Initial Release', date: '2023-01-15', description: 'Einführung unserer neuen Website mit grundlegenden Funktionen.' },
      { id: 2, title: 'Feature Update', date: '2023-02-20', description: 'Hinzufügen von erweiterten Suchfunktionen und Benutzerprofilen.' },
      { id: 3, title: 'Performance Verbesserungen', date: '2023-03-05', description: 'Update zur Verbesserung der Ladegeschwindigkeit und Optimierung der Datenbank.' },
      { id: 4, title: 'Neue Partnerschaft', date: '2023-04-12', description: 'Start einer Zusammenarbeit mit XYZ-Unternehmen.' },
      { id: 5, title: 'Sicherheitsupdate', date: '2023-05-22', description: 'Implementierung zusätzlicher Sicherheitsmaßnahmen und Datenschutzverbesserungen.' },
      { id: 6, title: 'Feature Erweiterung', date: '2023-07-30', description: 'Einführung eines neuen Moduls für interaktive Inhalte.' },
      { id: 7, title: 'Jahresrückblick', date: '2023-12-31', description: 'Rückblick auf die Meilensteine und Erfolge des Jahres.' },// Your updates array...
  ];

  const handleItemClick = (id) => {
    setVisibleItems(prevVisibleItems => {
      const newVisibleItems = new Set(prevVisibleItems);
      if (newVisibleItems.has(id)) {
        newVisibleItems.delete(id);
      } else {
        newVisibleItems.add(id);
      }
      return newVisibleItems;
    });
  };

  useEffect(() => {
    // This timeout will simulate the loading of the timeline elements
    const timer = setTimeout(() => {
      updates.forEach((update, index) => {
        setVisibleItems(prev => new Set([...prev, update.id]));
      });
    }, 500); // We start after a small delay to simulate asynchronous data loading

    return () => clearTimeout(timer);
  }, [updates]);

  return (
    <div className="roadmap-container">
      <div className="timeline">
        <div className="timeline-line"></div>
        {updates.map((update, index) => (
          <div 
            key={update.id} 
            id={`item-${update.id}`} 
            className="timeline-item"
            onClick={() => handleItemClick(update.id)}
            tabIndex={0} // Make it focusable
          >
            <div className={`timeline-dot ${visibleItems.has(update.id) ? 'animated' : ''}`}></div>
            <div className={`timeline-content ${visibleItems.has(update.id) ? 'animated' : ''}`}>
              <h3>{update.title}</h3>
              <p>{update.date}</p>
              <p>{update.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;

  const updates = [
    { id: 1, title: 'Initial Release', date: '2023-01-15', description: 'Einführung unserer neuen Website mit grundlegenden Funktionen.' },
    { id: 2, title: 'Feature Update', date: '2023-02-20', description: 'Hinzufügen von erweiterten Suchfunktionen und Benutzerprofilen.' },
    { id: 3, title: 'Performance Verbesserungen', date: '2023-03-05', description: 'Update zur Verbesserung der Ladegeschwindigkeit und Optimierung der Datenbank.' },
    { id: 4, title: 'Neue Partnerschaft', date: '2023-04-12', description: 'Start einer Zusammenarbeit mit XYZ-Unternehmen.' },
    { id: 5, title: 'Sicherheitsupdate', date: '2023-05-22', description: 'Implementierung zusätzlicher Sicherheitsmaßnahmen und Datenschutzverbesserungen.' },
    { id: 6, title: 'Feature Erweiterung', date: '2023-07-30', description: 'Einführung eines neuen Moduls für interaktive Inhalte.' },
    { id: 7, title: 'Jahresrückblick', date: '2023-12-31', description: 'Rückblick auf die Meilensteine und Erfolge des Jahres.' },
    // Weitere Updates können hier hinzugefügt werden
  ];