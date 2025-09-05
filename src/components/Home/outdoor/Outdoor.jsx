import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Outdoor.css';

const newsItems = [
  {
    title: "National Park Adventures: Discover Hidden Trails and Wildlife Sanctuaries Across America",
    image: "./image/image1.avif"
  },
  {
    title: "The Ultimate Guide to Camping: Tips for Your Next Outdoors Trip",
    image: "./image/image2.avif"
  },
  {
    title: "Exploring the World's Most Beautiful Mountain Ranges",
    image: "./image/image3.avif"
  },
  {
    title: "Bird Watching: A Beginner's Journey into Nature's Symphony",
    image: "./image/image4.avif"
  },
];

const Outdoor = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newsItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  return (
    <div className="container">
      <h2 className="section-title">Outdoors</h2>
      <div className="carousel-container">
        <div
          id="carousel-image"
          className="carousel-image"
          style={{
            backgroundImage: `url(${newsItems[currentSlide].image})`,
          }}
        >
          <div className="overlay">
            <p id="carousel-title" className="overlay-text">
              {newsItems[currentSlide].title}
            </p>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="nav-btn nav-btn-prev"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="nav-btn nav-btn-next"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="pagination-container">
          {newsItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`pagination-dot ${index === currentSlide ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Outdoor;