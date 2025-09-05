import React from 'react';
import { Link } from 'react-router-dom';
import './WebStoryPage.css'; // Shared CSS

const stories = [
  { id: 1, title: 'A Visual Journey Through the Himalayas', imageUrl: 'https://via.placeholder.com/300x500/FFC300/000000?text=Travel' },
  { id: 2, title: 'The World\'s Most Colorful Festivals', imageUrl: 'https://via.placeholder.com/300x500/FF5733/FFFFFF?text=Culture' },
  { id: 3, title: 'Architectural Marvels You Have to See', imageUrl: 'https://via.placeholder.com/300x500/C70039/FFFFFF?text=Architecture' },
  { id: 4, title: 'A Culinary Tour of Southeast Asia', imageUrl: 'https://via.placeholder.com/300x500/900C3F/FFFFFF?text=Food' },
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

const FeaturedStories = () => {
  return (
    <div className="web-story-page-container">
      <header className="web-story-header">
        <h1>Featured Stories</h1>
        <p>A curated collection of our most compelling visual stories.</p>
      </header>
      <main className="web-story-grid">
        {stories.map(story => (
          <StoryCard key={story.id} story={story} category="featured" />
        ))}
      </main>
    </div>
  );
};

export default FeaturedStories;