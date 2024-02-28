import React, { useState } from 'react';
import ForumHeader from './ForumHeader';
import ForumCategorys from './ForumCategorys';
import ForumThreads from './ForumThreads';
import ThreadView from './ThreadView'; // ThreadView-Komponente erstellen
import ForumSearch from './ForumSearch';
import CreatePost from './CreatePost'; // CreatePost-Komponente erstellen
import UserProfile from './UserProfile'; // UserProfile-Komponente erstellen

      function Forum() {
        const [activeCategory, setActiveCategory] = useState(null);
        const [activeThread, setActiveThread] = useState(null);
        const [searchQuery, setSearchQuery] = useState('');
        const [showCreatePost, setShowCreatePost] = useState(false);
        const [activeUserProfile, setActiveUserProfile] = useState(null);

        const handleCategorySelect = (category) => {
          setActiveCategory(category);
          setActiveThread(null); // Setzen Sie den aktiven Thread zurück, wenn eine Kategorie ausgewählt wird
        };

        const handleThreadSelect = (thread) => {
          setActiveThread(thread);
        };

        const handleBackToThreads = () => {
          setActiveThread(null);
        };

        const handleSearch = (query) => {
          setSearchQuery(query);
        };

        const handleCreatePostToggle = () => {
          setShowCreatePost(!showCreatePost);
        };

        const handleUserProfileSelect = (user) => {
          setActiveUserProfile(user);
        };

      return (
        <div className="forum-container">
          {/* ... */}
          {activeCategory && !activeThread && (
            <ForumThreads
              category={activeCategory}
              onSelectThread={handleThreadSelect}
            />
          )}
          {/* ... */}
          {activeThread && (
            <ThreadView
              thread={activeThread}
              onBack={handleBackToThreads}
            />
          )}
          {showCreatePost && (
            <CreatePost />
          )}
          {activeUserProfile && (
            <UserProfile user={activeUserProfile} onBack={() => setActiveUserProfile(null)} />
          )}
        </div>
      );
      }

      export default Forum;
