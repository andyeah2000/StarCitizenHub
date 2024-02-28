import React, { useState } from 'react';
import './ForumSearch.css';

function ForumSearch({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery); // Suchlogik aufrufen
  };

  return (
    <div className="forum-search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Suche im Forum..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button type="submit">Suchen</button>
      </form>
    </div>
  );
}

export default ForumSearch;


