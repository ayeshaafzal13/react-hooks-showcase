import { useState } from "react";
import { Link } from "react-router-dom";

function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const resetRating = () => {
    setRating(0);
    setHover(0);
  };

  return (
    <div className="project-container">
      <Link to="/" className="back-btn">← Back to Home</Link>
      <h2>⭐ Star Rating</h2>
      <p className="project-desc">Click a star to rate</p>

      <div className="stars">
        {[1, 2, 3, 4, 5].map((index) => {
          const isFilled = index <= (hover || rating);
          return (
            <span
              key={index}
              className={`star ${isFilled ? "filled" : ""}`}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(0)}
            >
              {isFilled ? "★" : "☆"}
            </span>
          );
        })}
      </div>

      <div className="rating-info">
        <p>{rating > 0 ? `You rated ${rating} out of 5 stars` : "Click a star to rate"}</p>
        <button className="reset-btn" onClick={resetRating}>🔄 Reset</button>
      </div>

      <div className="rating-message">
        {rating === 5 && "🌟 Amazing!"}
        {rating === 4 && "😊 Great!"}
        {rating === 3 && "👍 Good!"}
        {rating === 2 && "😐 Okay"}
        {rating === 1 && "😕 Needs improvement"}
      </div>
    </div>
  );
}

export default StarRating;