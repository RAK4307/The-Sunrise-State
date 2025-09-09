import React from 'react';
import './Style.css';

const moviesArticles = [
  {
    id: 1,
    title: 'Blockbuster Releases This Month',
    summary: 'A roundup of the most anticipated movies hitting theaters.',
    author: 'Meena Das',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Movies+News+1',
  },
  {
    id: 2,
    title: 'Indie Films Gain Popularity',
    summary: 'Independent films are attracting audiences and critical acclaim.',
    author: 'Lakshmi Reddy',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Movies+News+2',
  },
];

const Movies = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Movies News</h1>
      <p className="subheading">Latest releases, reviews, and features from the world of cinema.</p>
    </header>
    <div className="article-list">
      {moviesArticles.map((article) => (
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

export default Movies;