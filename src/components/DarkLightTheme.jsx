import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function DarkLightTheme() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`project-container theme-container ${theme}`}>
      <Link to="/" className="back-btn" style={{ color: theme === "dark" ? "white" : "#333" }}>← Back to Home</Link>
      <h2 style={{ color: theme === "dark" ? "white" : "#333" }}>🌙 Dark/Light Theme</h2>
      <p className="project-desc" style={{ color: theme === "dark" ? "#aaa" : "#666" }}>Toggle between dark and light modes</p>

      <div className="theme-content">
        <p style={{ color: theme === "dark" ? "#ccc" : "#555" }}>
          This component uses <strong>Context API</strong> and <strong>localStorage</strong> to persist theme preferences.
          The theme is applied to the entire page using <code>document.body.className</code>.
        </p>
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Switch to Dark" : "☀️ Switch to Light"}
        </button>
      </div>
    </div>
  );
}

export default DarkLightTheme;