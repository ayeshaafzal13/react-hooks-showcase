import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const images = [
  { id: 1, url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=400&fit=crop", title: "Beautiful Mountains" },
  { id: 2, url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=400&fit=crop", title: "Tropical Paradise" },
  { id: 3, url: "https://images.unsplash.com/photo-1470071459604-7b5ec3a7fe05?w=800&h=400&fit=crop", title: "Forest Adventure" },
  { id: 4, url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop", title: "City Lights" },
  { id: 5, url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=400&fit=crop", title: "Starry Night" },
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef(null);

  const totalSlides = images.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      timerRef.current = setInterval(nextSlide, 3000);
    }
    return () => clearInterval(timerRef.current);
  }, [isAutoPlaying, currentIndex]);

  return (
    <div className="project-container">
      <Link to="/" className="back-btn">← Back to Home</Link>
      <h2>🖼️ Image Slider</h2>
      <p className="project-desc">Carousel with auto-play</p>

      <div className="slider">
        <div className="slider-wrapper">
          {images.map((img, index) => (
            <div key={img.id} className={`slide ${index === currentIndex ? "active" : ""}`}>
              <img src={img.url} alt={img.title} />
              <div className="slide-overlay">
                <h3>{img.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <button className="slider-btn prev" onClick={prevSlide}>❮</button>
        <button className="slider-btn next" onClick={nextSlide}>❯</button>

        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        <button className="autoplay-btn" onClick={toggleAutoPlay}>
          {isAutoPlaying ? "⏸️" : "▶️"}
        </button>
      </div>
    </div>
  );
}

export default ImageSlider;