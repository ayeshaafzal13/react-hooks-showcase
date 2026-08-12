import { Link } from "react-router-dom";

function Home() {
  const projects = [
    { id: 1, path: "/accordion", name: "Accordion", icon: "📋", desc: "FAQ accordion with smooth animations", tags: ["useState", "useRef", "useEffect"] },
    { id: 2, path: "/bg-color", name: "Background Color Generator", icon: "🎨", desc: "Change background with preset colors", tags: ["useState", "Events"] },
    { id: 3, path: "/star-rating", name: "Star Rating", icon: "⭐", desc: "Interactive star rating component", tags: ["useState", "Hover"] },
    { id: 4, path: "/image-slider", name: "Image Slider", icon: "🖼️", desc: "Carousel with auto-play and dots", tags: ["useState", "useEffect", "useRef"] },
    { id: 5, path: "/dark-light", name: "Dark/Light Theme", icon: "🌙", desc: "Theme toggle with Context API", tags: ["useState", "useEffect", "Context"] },
    { id: 6, path: "/scroll-indicator", name: "Scroll Indicator", icon: "📊", desc: "Progress bar on page scroll", tags: ["useState", "useEffect", "Events"] },
  ];

  return (
    <div className="home">
      <div className="hero">
        <h1>⚛️ React Hooks <span>Showcase</span></h1>
        <p>6 projects • 6 hooks • 1 journey</p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <Link to={project.path} key={project.id} className="project-card">
            <span className="project-icon">{project.icon}</span>
            <h3>{project.name}</h3>
            <p>{project.desc}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <span className="view-btn">View Project →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;