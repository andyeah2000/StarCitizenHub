import React from 'react';
import './ThreadView.css';

function ThreadView({ thread, onBack }) {
  // Beispiel-Thread-Ansicht
  return (
    <div className="thread-view">
      <button onClick={onBack}>Zurück</button>
      <h2>{thread.title}</h2>
      <p>{thread.content}</p>
    </div>
  );
}

export default ThreadView;


