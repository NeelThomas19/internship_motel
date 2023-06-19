import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      <div className="card">
        <img className="carousel-image" src={images[currentIndex]} alt={`prev ${currentIndex}`} />
        <div className="carousel-buttons">
          <button className="carousel-button" onClick={handlePrevious}>
            &lt;
          </button>
          <button className="carousel-button" onClick={handleNext}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
