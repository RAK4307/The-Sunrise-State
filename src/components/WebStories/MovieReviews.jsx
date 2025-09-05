import React from 'react';
import { Link } from 'react-router-dom';
import './WebStoryPage.css'; // Shared CSS

const stories = [
  { id: 1, title: 'This Year\'s Must-Watch Blockbusters', imageUrl: 'https://via.placeholder.com/300x500/34495E/FFFFFF?text=Movies' },
  { id: 2, title: 'Hidden Gems on Your Favorite Streaming Service', imageUrl: 'https://via.placeholder.com/300x500/2C3E50/FFFFFF?text=Streaming' },
  { id: 3, title: 'A Look Back at Classic Cinema', imageUrl: 'https://via.placeholder.com/300x500/1B2631/FFFFFF?text=Classics' },
  { id: 4, title: 'The Best Animated Films for All Ages', imageUrl: 'https://via.placeholder.com/300x500/707B7C/FFFFFF?text=Animation' },
];

const StoryCard = ({ story, category }) => (
  <Link to={`/web-stories/${category}/${story.id}`} className="story-card-link">
    <div className="story-card" style={{ backgroundImage: `url(${story.imageUrl})` }}>
      <div className="story-card-overlay">
        <h2 className="story-card-title">{story.title}</h2>
      </div>
    </div>
  </Link>
);

const MovieReviews = () => {
  return (
    <div className="web-story-page-container">
      <header className="web-story-header">
        <h1>Movie Reviews</h1>
        <p>Visual reviews and deep dives into the world of cinema.</p>
      </header>
      <main className="web-story-grid">
        {stories.map(story => (
          <StoryCard key={story.id} story={story} category="movies" />
        ))}
      </main>
    </div>
  );
};

export default MovieReviews;