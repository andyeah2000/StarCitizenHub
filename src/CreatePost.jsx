import React, { useState } from 'react';
import './createPost.css';

function CreatePost() {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier können Sie die Logik zum Erstellen eines Beitrags implementieren
    // Verwenden Sie den "content"-State, um den Beitragstext zu erhalten
    // Nach dem Erstellen des Beitrags können Sie das Formular zurücksetzen
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="create-post">
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Schreiben Sie hier Ihren Beitrag..."
      />
      <button type="submit">Beitrag posten</button>
    </form>
  );
}

export default CreatePost;
