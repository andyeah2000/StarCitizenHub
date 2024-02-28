import React from 'react';
import './ForumHeader.css';

function ForumHeader() {
  // Funktionen für die Benutzerinteraktion
  const handleLogin = () => {
    // Implementieren Sie die Logik für die Benutzeranmeldung
  };

  const handleRegister = () => {
    // Implementieren Sie die Logik für die Benutzerregistrierung
  };

  const handleLogout = () => {
    // Implementieren Sie die Logik für das Abmelden
  };

  // Platzhalter für den Benutzerstatus (später durch echten Benutzerstatus ersetzen)
  const isLoggedIn = false; // Beispielvariable

  return (
    <div className="forum-header">
      <h1>Forum</h1>
      <nav className="forum-nav">
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/categories">Kategorien</a></li>
          <li><a href="/about">Über uns</a></li>
        </ul>
      </nav>
      <div className="user-interaction">
        {isLoggedIn ? (
          <button onClick={handleLogout}>Abmelden</button>
        ) : (
          <>
            <button onClick={handleLogin}>Anmelden</button>
            <button onClick={handleRegister}>Registrieren</button>
          </>
        )}
      </div>
    </div>
  );
}

export default ForumHeader;
