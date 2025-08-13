import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authMeData, setAuthMeData] = useState(null);
  const [apiTestData, setApiTestData] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch("/.auth/me");
      const data = await response.json();

      if (data.clientPrincipal) {
        setUser(data.clientPrincipal);
        setAuthMeData(data);
        fetchApiTestData();
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchApiTestData = async () => {
    try {
      const response = await fetch("/api/test");
      const data = await response.json();
      setApiTestData(data);
    } catch (error) {
      console.error("Error fetching API test data:", error);
      // If API endpoint doesn't exist, create a mock response
      setApiTestData({
        message: "API endpoint not available",
        timestamp: new Date().toISOString(),
        status: "mock_response",
      });
    }
  };

  const handleLogin = (provider) => {
    window.location.href = `/.auth/login/${provider}`;
  };

  const handleLogout = () => {
    window.location.href = "/.auth/logout";
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  if (loading) {
    return (
      <div className="App">
        <header className="App-header">
          <div className="loading">Loading...</div>
        </header>
      </div>
    );
  }

  if (user) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Azure Static Web Apps</h1>
          <h2>Authentication Successful!</h2>

          <div className="user-info">
            <h3>Welcome, {user.userDetails}!</h3>
            <p>Provider: {user.identityProvider}</p>
            <p>User ID: {user.userId}</p>

            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>

          <div className="api-data">
            <div className="expandable-section">
              <button
                className={`expand-button ${
                  expandedSection === "authme" ? "expanded" : ""
                }`}
                onClick={() => toggleSection("authme")}
              >
                <span className="icon">
                  {expandedSection === "authme" ? "▼" : "▶"}
                </span>
                /.auth/me Response
              </button>
              {expandedSection === "authme" && (
                <div className="json-content">
                  <pre>{JSON.stringify(authMeData, null, 2)}</pre>
                </div>
              )}
            </div>

            <div className="expandable-section">
              <button
                className={`expand-button ${
                  expandedSection === "apitest" ? "expanded" : ""
                }`}
                onClick={() => toggleSection("apitest")}
              >
                <span className="icon">
                  {expandedSection === "apitest" ? "▼" : "▶"}
                </span>
                /api/test Response
              </button>
              {expandedSection === "apitest" && (
                <div className="json-content">
                  <pre>{JSON.stringify(apiTestData, null, 2)}</pre>
                </div>
              )}
            </div>
          </div>
        </header>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Azure Static Web Apps</h1>
        <h2>Custom Authentication Test</h2>
        <div className="auth-buttons">
          <button
            className="auth-button microsoft"
            onClick={() => handleLogin("aad")}
          >
            <span className="icon">🏢</span>
            Log in with Microsoft
          </button>

          <button
            className="auth-button google"
            onClick={() => handleLogin("google")}
          >
            <span className="icon">🔍</span>
            Log in with Google
          </button>

          <button
            className="auth-button github"
            onClick={() => handleLogin("github")}
          >
            <span className="icon">🐙</span>
            Log in with GitHub
          </button>
        </div>

        <div className="info">
          <p>
            Click any button above to test Azure Static Web Apps custom
            authentication.
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
