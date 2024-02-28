        import React from 'react';
        import './UserProfile.css';

        function UserProfile({ user, onBack }) {
          // Beispiel-Benutzerprofil
          const userPosts = [
            { id: 1, content: 'Beitrag 1' },
            { id: 2, content: 'Beitrag 2' },
            // Weitere Beiträge hinzufügen
          ];

          if (!user) {
            return <div>Lade Benutzerdaten...</div>;
          }

          return (
            <div className="user-profile">
              <button onClick={onBack}>Zurück zum Forum</button>
              <h2>Profil von {user.username}</h2>
              <p>{user.bio}</p>
              <div className="user-posts">
                <h3>Beiträge:</h3>
                {userPosts.map(post => (
                  <div key={post.id} className="user-post">
                    <p>{post.content}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        }

        export default UserProfile;



