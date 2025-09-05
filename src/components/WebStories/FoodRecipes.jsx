import React from 'react';
import { Link } from 'react-router-dom';
import './WebStoryPage.css'; // Shared CSS

const stories = [
  { id: 1, title: 'Quick and Easy 30-Minute Meals', imageUrl: 'https://via.placeholder.com/300x500/1ABC9C/FFFFFF?text=Recipes' },
  { id: 2, title: 'The Ultimate Guide to Baking Bread', imageUrl: 'https://via.placeholder.com/300x500/16A085/FFFFFF?text=Baking' },
  { id: 3, title: 'Healthy Smoothie Recipes to Start Your Day', imageUrl: 'https://via.placeholder.com/300x500/117864/FFFFFF?text=Healthy' },
  { id: 4, title: 'Classic Desserts with a Modern Twist', imageUrl: 'https://via.placeholder.com/300x500/0B5345/FFFFFF?text=Desserts' },
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

const FoodRecipes = () => {
  return (
    <div className="web-story-page-container">
      <header className="web-story-header">
        <h1>Food Recipes</h1>
        <p>Step-by-step visual guides to delicious meals.</p>
      </header>
      <main className="web-story-grid">
        {stories.map(story => (
          <StoryCard key={story.id} story={story} category="food" />
        ))}
      </main>
    </div>
  );
};

export default FoodRecipes;