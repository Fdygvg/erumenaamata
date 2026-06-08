import { useState, useEffect } from 'react';
import './css/BakingCarousel.css';

export default function BakingCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [nextIndex, setNextIndex] = useState(1);

  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setNextIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovering, images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setNextIndex((index + 1) % images.length);
  };

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    goToSlide(newIndex);
  };

  return (
    <div 
      className="baking-carousel"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Main Carousel Container */}
      <div className="carousel-viewport">
        <div className="carousel-track">
          {images.map((img, index) => (
            <div
              key={img.id}
              className={`carousel-slide ${
                index === currentIndex ? 'active' : ''
              } ${index === nextIndex ? 'next' : ''}`}
            >
              <img 
                src={img.image} 
                alt={img.alt}
                loading={index <= 1 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="carousel-nav carousel-nav-prev"
          onClick={goToPrevious}
          aria-label="Previous image"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button
          className="carousel-nav carousel-nav-next"
          onClick={goToNext}
          aria-label="Next image"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
