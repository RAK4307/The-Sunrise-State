import React, { useRef } from 'react';
import './Middle.css';

const Middle = () => {
  return (
    <div className="middle-bg">
      <div className="middle-container">
        <WebStories />
      </div>
    </div>
  );
};

const WebStories = () => { 
  const scrollContainerRef = useRef(null);

  const stories = [
    { 
      title: "Heavy rains in Hyderabad", 
      image: "./image/image1.avif" 
    },
    { 
      title: "Covid Precautions", 
      image: "./image/image2.avif"
    },
    { 
      title: "Shocking Statistics of India's Youth", 
      image: "./image/image3.avif"
    },
    { 
      title: "Civil Defence Mock drill for May 7-When, where and who will hold 'Operation Ahipasya'", 
      image: "./image/image4.avif"
    },
    { 
      title: "Importance of Indus Water Treaty", 
      image: "./image/image5.avif"
    },
    { 
      title: "Importance of Indus Water Treaty", 
      image: "./image/image5.avif"
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="webstories-relative">
      <h2 className="webstories-title">Web Stories</h2>
      <div 
        ref={scrollContainerRef}
        className="webstories-scroll"
      >
        {stories.map((story, index) => (
          <div key={index} className="webstories-card">
            <img 
              src={story.image} 
              alt={story.title} 
              className="webstories-img" 
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x600/E5E7EB/9CA3AF?text=Image+Missing"; }}
            />
            <div className="webstories-gradient">
              <span className="webstories-card-title">
                {story.title}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="webstories-nav">
        <button 
          onClick={scrollLeft}
          className="webstories-arrow"
        >
          <svg className="webstories-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button 
          onClick={scrollRight}
          className="webstories-arrow"
        >
          <svg className="webstories-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
        <a href="#" className="webstories-more">
          <span>More</span>
        </a>
      </div>
    </div>
  );
};

export default Middle;