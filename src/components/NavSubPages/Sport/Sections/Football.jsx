import React from 'react';
import './Style.css';

const footballArticles = [
  {
    id: 1,
    title: 'Football League Highlights',
    summary: 'Key moments and results from top football leagues.',
    author: 'Rohit Sharma',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Football+News+1',
  },
  {
    id: 2,
    title: 'International Football News',
    summary: 'Updates on international tournaments and players.',
    author: 'Priya Nair',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Football+News+2',
  },
];

const Football = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Football</h1>
      <p className="subheading">Scores, highlights, and features from the world of football.</p>
    </header>
    <div className="article-list">
      {footballArticles.map((article) => (
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

export default Football;