import React from 'react';
import './Style.css';

const fitnessTrendsStories = [
  {
    id: 1,
    title: 'Fitness Trends for 2025',
    summary: 'Discover the latest workouts and fitness routines gaining popularity.',
    author: 'Ajay Kumar',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Fitness+Trends+Story+1',
  },
  {
    id: 2,
    title: 'Tech in Fitness: Wearables & Apps',
    summary: 'How technology is transforming personal fitness and wellness.',
    author: 'Meena Das',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Fitness+Trends+Story+2',
  },
];

const FitnessTrends = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Fitness Trends Top Stories</h1>
      <p className="subheading">Explore the latest trends, tech, and tips in fitness.</p>
    </header>
    <div className="article-list">
      {fitnessTrendsStories.map((story) => (
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

export default FitnessTrends;