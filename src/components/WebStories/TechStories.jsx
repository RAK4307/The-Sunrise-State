import React from 'react';
import { Link } from 'react-router-dom';
import './WebStoryPage.css'; // Shared CSS

const stories = [
  { id: 1, title: 'The Evolution of the Smartphone', imageUrl: 'https://via.placeholder.com/300x500/9B59B6/FFFFFF?text=Tech' },
  { id: 2, title: 'Artificial Intelligence: What\'s Next?', imageUrl: 'https://via.placeholder.com/300x500/8E44AD/FFFFFF?text=AI' },
  { id: 3, title: 'A Visual History of Video Games', imageUrl: 'https://via.placeholder.com/300x500/6C3483/FFFFFF?text=Gaming' },
  { id: 4, title: 'The Future of Space Exploration', imageUrl: 'https://via.placeholder.com/300x500/4A235A/FFFFFF?text=Space' },
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

const TechStories = () => {
  return (
    <div className="web-story-page-container">
      <header className="web-story-header">
        <h1>Tech Stories</h1>
        <p>Exploring the innovations that shape our future.</p>
      </header>
      <main className="web-story-grid">
        {stories.map(story => (
          <StoryCard key={story.id} story={story} category="tech" />
        ))}
      </main>
    </div>
  );
};

export default TechStories;