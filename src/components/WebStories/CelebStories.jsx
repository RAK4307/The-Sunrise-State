import React from 'react';
import { Link } from 'react-router-dom';
import './WebStoryPage.css'; // Shared CSS

const stories = [
  { id: 1, title: 'Red Carpet Looks from the Met Gala', imageUrl: 'https://via.placeholder.com/300x500/F1C40F/000000?text=Fashion' },
  { id: 2, title: 'A Look Inside Celebrity Homes', imageUrl: 'https://via.placeholder.com/300x500/F39C12/FFFFFF?text=Lifestyle' },
  { id: 3, title: 'The Biggest Moments from Awards Season', imageUrl: 'https://via.placeholder.com/300x500/D35400/FFFFFF?text=Awards' },
  { id: 4, title: 'Then and Now: Your Favorite TV Stars', imageUrl: 'https://via.placeholder.com/300x500/E67E22/FFFFFF?text=Nostalgia' },
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

const CelebStories = () => {
  return (
    <div className="web-story-page-container">
      <header className="web-story-header">
        <h1>Celebrity Stories</h1>
        <p>The latest updates from the world of entertainment and pop culture.</p>
      </header>
      <main className="web-story-grid">
        {stories.map(story => (
          <StoryCard key={story.id} story={story} category="celebs" />
        ))}
      </main>
    </div>
  );
};

export default CelebStories;