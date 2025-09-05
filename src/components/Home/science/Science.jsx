import React, { useState } from 'react';
import './Science.css';

const App = () => {
  const slides = [
    {
      image: "./image/image1.avif",
      title: "AI Revolution: How Machine Learning is Transforming Healthcare",
      readTime: "1 MIN READ",
    },
    {
      image: "./image/image2.avif",
      title: "Space Exploration: James Webb Telescope Captures Breathtaking New Images",
      readTime: "2 MIN READ", 
    },
    {
      image: "./image/image3.avif",
      title: "Sustainable Energy: Breakthrough in Fusion Technology Promises Clean Power",
      readTime: "3 MIN READ",
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleNext = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="science-bg">
      <div className="science-container">

        {/* Sci-Tech Section */}
        <div className="science-section">
          <h2 className="science-title">Sci-Tech</h2>
          <div className="science-slider">
            <img 
              src={slides[currentSlideIndex].image}
              alt={slides[currentSlideIndex].title}
              className="science-slider-img"
            />
            
            <div className="science-slider-overlay">
              <h3 className="science-slider-heading">
                {slides[currentSlideIndex].title}
              </h3>
              <div className="science-slider-dots">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`science-slider-dot${index === currentSlideIndex ? ' active' : ''}`}
                    onClick={() => setCurrentSlideIndex(index)}
                  ></div>
                ))}
              </div>
            </div>

            <div className="science-slider-arrows">
              <button
                className="science-arrow-btn"
                onClick={handlePrev}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="science-arrow-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="science-arrow-btn"
                onClick={handleNext}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="science-arrow-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Life & Style Section */}
        <div>
          <h2 className="science-title">Life & Style</h2>
          <div className="science-grid">
            {/* Left Column: Large Featured Article */}
            <div>
              <div className="science-featured-img-wrap">
                <img
                  src="https://placehold.co/460x280/E5E7EB/4B5563?text=Placeholder+Image"
                  alt="The Art of Mindful Living"
                  className="science-featured-img"
                />
              </div>
              <div className="science-featured-content">
                <h3 className="science-featured-heading">
                  The Art of Mindful Living: How Slow Fashion is Reshaping Modern Wardrobes
                </h3>
                <p className="science-featured-meta">4 HOURS AGO | 1 MIN READ</p>
                <p className="science-featured-desc">
                  Sustainable fashion pioneers are transforming the industry with timeless designs, ethical manufacturing processes, and conscious consumption practices that prioritize quality over quantity in personal style choices.
                </p>
              </div>
            </div>

            {/* Right Column: Three smaller articles */}
            <div className="science-articles">
              <div>
                <h3 className="science-article-heading">
                  Celebrity Chef's Revolutionary Plant-Based Menu Takes Fine Dining by Storm
                </h3>
                <p className="science-article-meta">24 HOURS AGO | 1 MIN READ</p>
              </div>
              <div className="science-article-divider">
                <h3 className="science-article-heading">
                  Interior Design Trends 2025: Minimalist Patterns Make a Bold Comeback
                </h3>
                <p className="science-article-meta">22 HOURS AGO | 1 MIN READ</p>
              </div>
              <div className="science-article-divider">
                <h3 className="science-article-heading">
                  Wellness Tourism Boom: Luxury Retreats Focus on Digital Detox Experiences
                </h3>
                <p className="science-article-meta">12 HOURS AGO | 1 MIN READ</p>
              </div>
              {/* New "More" link added here */}
              <div className="science-articles-more-link">
                <a href="#" className="science-more-anchor">More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;