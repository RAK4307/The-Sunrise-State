import React from 'react';
import { Link } from 'react-router-dom';
import './WebStoryPage.css'; // Shared CSS

const stories = [
  { id: 1, title: '5-Minute Workouts for a Busy Schedule', imageUrl: 'https://via.placeholder.com/300x500/2ECC71/FFFFFF?text=Fitness' },
  { id: 2, title: 'Mindful Eating: A Guide to Better Health', imageUrl: 'https://via.placeholder.com/300x500/27AE60/FFFFFF?text=Nutrition' },
  { id: 3, title: 'The Science of a Good Night\'s Sleep', imageUrl: 'https://via.placeholder.com/300x500/1E8449/FFFFFF?text=Wellness' },
  { id: 4, title: 'Debunking Common Health Myths', imageUrl: 'https://via.placeholder.com/300x500/145A32/FFFFFF?text=Myths' },
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

const HealthStories = () => {
  return (
    <div className="web-story-page-container">
      <header className="web-story-header">
        <h1>Health Stories</h1>
        <p>Visual guides to a healthier and more balanced life.</p>
      </header>
      <main className="web-story-grid">
        {stories.map(story => (
          <StoryCard key={story.id} story={story} category="health" />
        ))}
      </main>
    </div>
  );
};

export default HealthStories;