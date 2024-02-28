import React, { useState } from 'react';
import './StarCitizenUpdate.css';

function StarCitizenUpdates() {
  const [selectedNote, setSelectedNote] = useState(null);

  const patchNotes = [
    { version: "3.10", notes: "Kurze Beschreibung...", fullText: "Langer Artikel über Version 3.10..." },
    { version: "3.11", notes: "Kurze Beschreibung...", fullText: "Langer Artikel über Version 3.11..." },
    // ...weitere Patch-Notizen
  ];

  const openModal = note => {
    setSelectedNote(note);
  };

  const closeModal = () => {
    setSelectedNote(null);
  };

  return (
    <div className="sc-updates">
      <h2>Star Citizen Patch-Notizen</h2>
      <div className="sc-patch-notes">
        {patchNotes.map(note => (
          <div className="sc-card" key={note.version} onClick={() => openModal(note)}>
            <h3>Version {note.version}</h3>
            <p>{note.notes}</p>
          </div>
        ))}
      </div>

      {selectedNote && (
        <div className="sc-modal">
          <div className="sc-modal-content">
            <span className="sc-close-button" onClick={closeModal}>&times;</span>
            <h3>Version {selectedNote.version}</h3>
            <p>{selectedNote.fullText}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default StarCitizenUpdates;

