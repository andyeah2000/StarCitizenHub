import React from 'react';
import './ForumCategorys.css';

function ForumCategorys({ onSelectCategory }) {
  const categories = [
    { id: 1, name: 'Allgemeines' },
    { id: 2, name: 'Updates' },
    { id: 3, name: 'Diskussion' },
    // ... Weitere Kategorien
  ];

  return (
    <div className="forum-categorys">
      {categories.map((category) => (
        <div key={category.id} className="category-card" onClick={() => onSelectCategory(category)}>
          {category.name}
        </div>
      ))}
    </div>
  );
}

export default ForumCategorys;




