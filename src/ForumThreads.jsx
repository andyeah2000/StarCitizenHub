import React from 'react';
import './ForumThreads.css';

function ForumThreads({ category, onSelectThread }) {
  // Beispiel-Thread-Liste
  const threads = [
    { id: 1, title: 'Erster Thread', content: 'Inhalt des ersten Threads' },
    { id: 2, title: 'Zweiter Thread', content: 'Inhalt des zweiten Threads' },
    // Weitere Threads hinzufügen
  ];

  // Filtert Threads basierend auf der ausgewählten Kategorie
  const filteredThreads = threads.filter(thread => thread.categoryId === category.id);

  return (
    <div className="forum-threads">
      {filteredThreads.map(thread => (
        <div key={thread.id} className="thread-card" onClick={() => onSelectThread(thread)}>
          <h3>{thread.title}</h3>
          <p>{thread.content}</p>
        </div>
      ))}
    </div>
  );
}

export default ForumThreads;


