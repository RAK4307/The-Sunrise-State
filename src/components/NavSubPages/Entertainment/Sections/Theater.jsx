import React from 'react';
import './Style.css';

const theaterArticles = [
  {
    id: 1,
    title: 'Broadway Revival: Classic Plays Return',
    summary: 'Broadway welcomes back classic plays with modern twists and star casts.',
    author: 'Priya Nair',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Theater+News+1',
  },
  {
    id: 2,
    title: 'Local Theater Groups Shine',
    summary: 'Community theater groups are gaining recognition for innovative performances.',
    author: 'Ajay Kumar',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Theater+News+2',
  },
];

const Theater = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Theater News</h1>
      <p className="subheading">Latest updates and features from the world of theater.</p>
    </header>
    <div className="article-list">
      {theaterArticles.map((article) => (
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

export default Theater;