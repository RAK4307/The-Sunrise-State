import React, { useState } from 'react';
import './Real.css';

const App = () => {
  // Data for the Real Estate slider
  const slides = [
    {
      image: "./image/image-1.avif",
      headline: "First-Time Homebuyer Programs Expand Access to Affordable Housing Markets",
    },
    {
      image: "./image/image-2.avif",
      headline: "Luxury Waterfront Properties See 20% Price Surge in Prime Coastal Markets",
    },
    {
      image: "./image/image-3.avif",
      headline: "Urban Development Focuses on Sustainable, Green Building Practices",
    },
  ];

  // State and handlers for the slider
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Updated news data to match the image
  const sportNews = [
    {
      headline: "Olympic Preparations Intensify: Athletes Gear Up for International Competition Season",
      meta: "12 MINS AGO • 1 MIN READ",
    },
    {
      headline: "Cricket World Cup Fever: Teams Announce Final Squads for Championship Tournament",
      meta: "30 MINS AGO • 1 MIN READ",
    },
    {
      headline: "Tennis Grand Slam Updates: Emerging Players Challenge Established Champions",
      meta: "3 HOURS AGO • 1 MIN READ",
    },
    {
      headline: "Football Transfer Window: Major Leagues See Record-Breaking Player Movements",
      meta: "6 HOURS AGO • 1 MIN READ",
    },
  ];

  const agricultureNews = [
    {
      headline: "Smart Farming Technologies Revolutionize Crop Yields and Sustainability Practices",
      meta: "35 MINS AGO • 1 MIN READ",
    },
    {
      headline: "Climate-Resilient Seeds: Breakthrough Research Helps Farmers Adapt to Changing Weather",
      meta: "2 HOURS AGO • 1 MIN READ",
    },
    {
      headline: "Organic Farming Movement Gains Momentum as Consumer Demand for Natural Products Rises",
      meta: "5 HOURS AGO • 1 MIN READ",
    },
    {
      headline: "Agricultural Export Boom: Local Farmers Expand International Market Reach",
      meta: "10 HOURS AGO • 1 MIN READ",
    },
  ];

  // Reusable component for news sections (with "More" link removed)
  const NewsSection = ({ title, items }) => {
    return (
      <div className="real-news-section">
        <h2 className="real-section-title">{title}</h2>
        <ul className="real-news-list">
          {items.map((item, index) => (
            <li key={index} className="real-news-item">
              <span className="real-news-bullet">•</span>
              <div className="real-news-content">
                <p className="real-news-headline">{item.headline}</p>
                <p className="real-news-meta">{item.meta}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="real-bg">
      <div className="real-container">
        {/* Real Estate slider section */}
        <div className="real-estate-section">
          <h1 className="real-title">Real Estate</h1>
          <div className="real-slider-wrap">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].headline}
              className="real-slider-image"
            />
            <div className="real-slider-overlay">
              <h3 className="real-slider-heading">
                {slides[currentSlide].headline}
              </h3>
              <div className="real-slider-dots">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`real-slider-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                  ></div>
                ))}
              </div>
            </div>
            {/* Slider Arrows */}
            <div className="real-slider-arrows">
              <button onClick={handlePrev} className="real-arrow-btn">
                <svg viewBox="0 0 24 24" fill="currentColor" className="real-arrow-icon">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </button>
              <button onClick={handleNext} className="real-arrow-btn">
                <svg viewBox="0 0 24 24" fill="currentColor" className="real-arrow-icon">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Sport and Agriculture sections in a responsive grid */}
        <div className="real-grid">
          <NewsSection title="Sport" items={sportNews} />
          <NewsSection title="Agriculture" items={agricultureNews} />
        </div>
      </div>
    </div>
  );
};

export default App;