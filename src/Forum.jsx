import React, { useState } from 'react';
import ForumHeader from './ForumHeader';
import ForumCategorys from './ForumCategorys';
import ForumThreads from './ForumThreads'; // Die Komponente für die Thread-Liste erstellen
import ForumSearch from './ForumSearch';

function Forum() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="forum-container">
      <ForumHeader />
      <ForumSearch onSearch={handleSearch} />

      {/* Anzeigen der Kategorien */}
      <ForumCategorys onSelectCategory={handleCategorySelect} />

      {/* Anzeigen der Threads einer ausgewählten Kategorie */}
      {activeCategory && (
        <ForumThreads category={activeCategory} />
      )}

      {/* Weitere UI-Elemente können hier hinzugefügt werden */}
    </div>
  );
}

export default Forum;


