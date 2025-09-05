import React from 'react';
import { Link } from 'react-router-dom';
import './WebStoryPage.css'; // Shared CSS

const stories = [
  { id: 1, title: 'The Greatest Comebacks in Sports History', imageUrl: 'https://via.placeholder.com/300x500/E74C3C/FFFFFF?text=Sports' },
  { id: 2, title: 'Iconic Moments from the Olympics', imageUrl: 'https://via.placeholder.com/300x500/C0392B/FFFFFF?text=Olympics' },
  { id: 3, title: 'A Visual Guide to World Cup History', imageUrl: 'https://via.placeholder.com/300x500/A93226/FFFFFF?text=Football' },
  { id: 4, title: 'Unforgettable Dunks from the NBA', imageUrl: 'https://via.placeholder.com/300x500/88241B/FFFFFF?text=Basketball' },
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

const SportStories = () => {
  return (
    <div className="web-story-page-container">
      <header className="web-story-header">
        <h1>Sport Stories</h1>
        <p>Relive the most thrilling moments in sports history.</p>
      </header>
      <main className="web-story-grid">
        {stories.map(story => (
          <StoryCard key={story.id} story={story} category="sport" />
        ))}
      </main>
    </div>
  );
};

export default SportStories;