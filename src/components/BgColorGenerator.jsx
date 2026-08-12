import { useState } from "react";
import { Link } from "react-router-dom";

function BgColorGenerator() {
  const [color, setColor] = useState("#667eea");

  const colors = [
    { name: "Purple", value: "#667eea" },
    { name: "Pink", value: "#f093fb" },
    { name: "Blue", value: "#4facfe" },
    { name: "Green", value: "#43e97b" },
    { name: "Orange", value: "#fa709a" },
    { name: "Red", value: "#f43f5e" },
    { name: "Yellow", value: "#facc15" },
    { name: "Dark", value: "#1a1a2e" },
    { name: "White", value: "#ffffff" },
    { name: "Violet", value: "#8b5cf6" },
  ];

  const randomColor = () => {
    const letters = "0123456789ABCDEF";
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      hex += letters[Math.floor(Math.random() * 16)];
    }
    setColor(hex);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
    alert(`✅ Copied: ${color}`);
  };

  return (
    <div className="project-container bg-color-container" style={{ backgroundColor: color }}>
      <Link to="/" className="back-btn" style={{ color: "white" }}>← Back to Home</Link>
      <h2 style={{ color: "white" }}>🎨 Background Color Generator</h2>
      <p className="project-desc" style={{ color: "rgba(255,255,255,0.8)" }}>Current Color: <strong>{color}</strong></p>

      <div className="color-grid">
        {colors.map((c) => (
          <button
            key={c.value}
            className="color-btn"
            style={{ backgroundColor: c.value }}
            onClick={() => setColor(c.value)}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div className="action-buttons">
        <button className="btn-random" onClick={randomColor}>🎲 Random</button>
        <button className="btn-copy" onClick={copyToClipboard}>📋 Copy</button>
      </div>
    </div>
  );
}

export default BgColorGenerator;