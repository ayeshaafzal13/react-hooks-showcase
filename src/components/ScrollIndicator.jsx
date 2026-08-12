import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ScrollIndicator() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="project-container">
      <Link to="/" className="back-btn">← Back to Home</Link>
      <h2>📊 Scroll Indicator</h2>
      <p className="project-desc">Progress bar shows scroll progress</p>

      <div className="scroll-indicator-wrapper">
        <div className="scroll-progress" style={{ width: `${progress}%` }} />
        <p style={{ marginTop: "20px", fontSize: "1.5rem", fontWeight: "bold" }}>
          {Math.round(progress)}%
        </p>
        <p style={{ color: "#888" }}>Scroll down to see the progress bar fill up</p>

        <div style={{ marginTop: "40px" }}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} style={{ background: "#f0f0f5", padding: "20px", marginBottom: "16px", borderRadius: "8px" }}>
              <h3>Section {i}</h3>
              <p>This is some placeholder content to demonstrate the scroll indicator.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ScrollIndicator;