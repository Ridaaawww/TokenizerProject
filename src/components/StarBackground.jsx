import React from 'react';
import './StarBackground.css'; // Ensure you have the appropriate CSS for styling
const StarBackground = () => {
  const stars = Array.from({ length: 150 }, (_, i) => ({
    id: i,
    top: Math.random() * 100 + '%',
    left: Math.random() * 100 + '%',
    animationDuration: `${Math.random() * 3 + 1}s`,
    animationDelay: `${Math.random() * 5}s`,
  }));

  return (
    <div className="starfield">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            animationDuration: star.animationDuration,
            animationDelay: star.animationDelay,
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
