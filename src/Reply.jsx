import React, { useState } from 'react';
import './Reply.css';

function Reply({ onAddReply }) {
  const [replyContent, setReplyContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddReply(replyContent);
    setReplyContent(''); // Setzt das Eingabefeld nach dem Absenden zurück
  };

  return (
    <form className="reply-form" onSubmit={handleSubmit}>
      <textarea
        value={replyContent}
        onChange={(e) => setReplyContent(e.target.value)}
        placeholder="Schreiben Sie eine Antwort..."
      />
      <button type="submit">Antworten</button>
    </form>
  );
}

export default Reply;


