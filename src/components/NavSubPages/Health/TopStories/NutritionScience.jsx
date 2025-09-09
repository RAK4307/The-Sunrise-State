import React from 'react';
import './Style.css';

const nutritionScienceStories = [
  {
    id: 1,
    title: 'Nutrition Science: Latest Research',
    summary: 'Explore new findings in nutrition and dietary science.',
    author: 'Meena Das',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Nutrition+Science+Story+1',
  },
  {
    id: 2,
    title: 'Superfoods and Their Benefits',
    summary: 'A closer look at superfoods and their impact on health.',
    author: 'Lakshmi Reddy',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Nutrition+Science+Story+2',
  },
];

const NutritionScience = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Nutrition Science Top Stories</h1>
      <p className="subheading">Research, tips, and guides for healthy nutrition.</p>
    </header>
    <div className="article-list">
      {nutritionScienceStories.map((story) => (
        <div key={story.id} className="article-card">
          <img src={story.imageUrl} alt={story.title} className="article-image" />
          <div className="article-content">
            <h2 className="article-title">{story.title}</h2>
            <p className="article-summary">{story.summary}</p>
            <div className="article-meta">
              <span className="article-author">{story.author}</span> - <span className="article-date">{story.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default NutritionScience;