import React from 'react';
import { Link } from 'react-router-dom';
import './WebStoryPage.css'; // Shared CSS

const stories = [
  { id: 1, title: 'Key Political Moments of the Year', imageUrl: 'https://via.placeholder.com/300x500/3498DB/FFFFFF?text=Politics' },
  { id: 2, title: 'Understanding the Electoral Process', imageUrl: 'https://via.placeholder.com/300x500/2980B9/FFFFFF?text=Elections' },
  { id: 3, title: 'A Look at Landmark Legislation', imageUrl: 'https://via.placeholder.com/300x500/1F618D/FFFFFF?text=Law' },
  { id: 4, title: 'Global Summits: Who, What, and Why', imageUrl: 'https://via.placeholder.com/300x500/154360/FFFFFF?text=Global' },
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

const PoliticsStories = () => {
  return (
    <div className="web-story-page-container">
      <header className="web-story-header">
        <h1>Politics Stories</h1>
        <p>Complex political topics, explained visually.</p>
      </header>
      <main className="web-story-grid">
        {stories.map(story => (
          <StoryCard key={story.id} story={story} category="politics" />
        ))}
      </main>
    </div>
  );
};

export default PoliticsStories;