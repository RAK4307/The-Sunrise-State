import React from 'react';
import './Style.css';

const basketballArticles = [
  {
    id: 1,
    title: 'Basketball League Updates',
    summary: 'Scores, highlights, and news from major basketball leagues.',
    author: 'Rohit Sharma',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Basketball+News+1',
  },
  {
    id: 2,
    title: 'Top Players to Watch',
    summary: 'Spotlight on standout basketball players this season.',
    author: 'Priya Nair',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Basketball+News+2',
  },
];

const Basketball = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Basketball</h1>
      <p className="subheading">Latest scores, highlights, and player features in basketball.</p>
    </header>
    <div className="article-list">
      {basketballArticles.map((article) => (
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

export default Basketball;