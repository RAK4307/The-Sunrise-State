import React from 'react';
import './Style.css';

const wellnessArticles = [
  {
    id: 1,
    title: 'Holistic Wellness Practices',
    summary: 'Explore holistic approaches to physical and mental well-being.',
    author: 'Lakshmi Reddy',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Wellness+News+1',
  },
  {
    id: 2,
    title: 'Wellness Retreats and Workshops',
    summary: 'Find out about upcoming retreats and workshops for personal growth.',
    author: 'Priya Nair',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Wellness+News+2',
  },
];

const Wellness = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Wellness News</h1>
      <p className="subheading">Tips, guides, and stories for holistic health and wellness.</p>
    </header>
    <div className="article-list">
      {wellnessArticles.map((article) => (
        <div key={article.id} className="article-card">
          <img src={article.imageUrl} alt={article.title} className="article-image" />
          <div className="article-content">
            <h2 className="article-title">{article.title}</h2>
            <p className="article-summary">{article.summary}</p>
            <div className="article-meta">
              <span className="article-author">{article.author}</span> - <span className="article-date">{article.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Wellness;