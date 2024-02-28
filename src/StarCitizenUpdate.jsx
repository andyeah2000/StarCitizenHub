import React, { useState } from 'react';
import './StarCitizenUpdate.css';

function StarCitizenUpdates() {
  const [selectedNote, setSelectedNote] = useState(null);

  const patchNotes = [
    { version: "3.10", notes: "Kurze Beschreibung...", fullText: "Langer Artikel über Version 3.10..." },
    { version: "3.11", notes: "Kurze Beschreibung...", fullText: "Langer Artikel über Version 3.11..." },
    // ...weitere Patch-Notizen
  ];

  return (
    <div className="sc-updates">
      <h2>Star Citizen Patch-Notizen</h2>
      <div className="sc-patch-notes">
        {patchNotes.map((note, index) => (
          <div className="sc-card" key={note.version} onClick={() => setSelectedNote(note)} tabIndex={0} aria-describedby={`note-details-${index}`}>
            <h3>Version {note.version}</h3>
            <p>{note.notes}</p>
            <button onClick={() => setSelectedNote(note)}>Mehr erfahren</button>
          </div>
        ))}
      </div>

      {selectedNote && (
        <div className="sc-modal" onClick={() => setSelectedNote(null)} tabIndex={-1} role="dialog" aria-labelledby="modal-title" aria-modal="true">
          <div className="sc-modal-content" onClick={e => e.stopPropagation()}>
            <button className="sc-close-button" onClick={() => setSelectedNote(null)}>Schließen</button>
            <h3 id="modal-title">Version {selectedNote.version}</h3>
            <p id={`note-details-${patchNotes.findIndex(n => n.version === selectedNote.version)}`}>{selectedNote.fullText}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default StarCitizenUpdates;