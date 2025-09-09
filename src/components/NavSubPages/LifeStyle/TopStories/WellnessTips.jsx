import React from 'react';
import './Style.css';

const wellnessTipsStories = [
  {
    id: 1,
    title: 'Wellness Tips for Everyday Life',
    summary: 'Simple practices to boost your physical and mental well-being.',
    author: 'Lakshmi Reddy',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Wellness+Tips+Story+1',
  },
  {
    id: 2,
    title: 'Holistic Health Guides',
    summary: 'Comprehensive guides for holistic health and wellness.',
    author: 'Priya Nair',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Wellness+Tips+Story+2',
  },
];

const WellnessTips = () => (
  <div className="category-page-container">
    <header className="author-profile-header">
      <h1 className="main-heading">Wellness Tips Top Stories</h1>
      <p className="subheading">Advice, guides, and stories for holistic wellness.</p>
    </header>
    <div className="article-list">
      {wellnessTipsStories.map((story) => (
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

export default WellnessTips;