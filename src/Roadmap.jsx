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
    { id: 7, title: 'Jahresrückblick', date: '2023-12-31', description: 'Rückblick auf die Meilensteine und Erfolge des Jahres.' },
    // Weitere Updates können hier hinzugefügt werden
  ];

  const isElementVisible = (id) => {
    const el = document.getElementById(`item-${id}`);
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  const checkVisibility = () => {
    const newVisibleItems = new Set();
    updates.forEach(update => {
      if (isElementVisible(update.id)) {
        newVisibleItems.add(update.id);
      }
    });
    setVisibleItems(newVisibleItems);
  };

  useEffect(() => {
    checkVisibility();
    const handleScrollOrResize = () => {
      checkVisibility();
    };
    window.addEventListener('scroll', handleScrollOrResize);
    window.addEventListener('resize', handleScrollOrResize);

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
    };
  }, []);

  return (
    <div className="roadmap-container">
      <div className="timeline">
        {updates.map(update => (
          <div key={update.id} id={`item-${update.id}`} className="timeline-item">
            <div className="timeline-dot"></div>
            {visibleItems.has(update.id) && (
              <div className="timeline-content">
                <h3>{update.title}</h3>
                <p>{update.date}</p>
                <p>{update.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;

