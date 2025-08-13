import React from 'react';
import './App.css';

function App() {
  const handleLogin = (provider) => {
    window.location.href = `/.auth/login/${provider}`;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Azure Static Web Apps</h1>
        <h2>Custom Authentication Test</h2>
        <div className="auth-buttons">
          <button 
            className="auth-button microsoft"
            onClick={() => handleLogin('aad')}
          >
            <span className="icon">🏢</span>
            Log in with Microsoft
          </button>
          
          <button 
            className="auth-button google"
            onClick={() => handleLogin('google')}
          >
            <span className="icon">🔍</span>
            Log in with Google
          </button>
          
          <button 
            className="auth-button github"
            onClick={() => handleLogin('github')}
          >
            <span className="icon">🐙</span>
            Log in with GitHub
          </button>
        </div>
        
        <div className="info">
          <p>Click any button above to test Azure Static Web Apps custom authentication.</p>
        </div>
      </header>
    </div>
  );
}

export default App;
