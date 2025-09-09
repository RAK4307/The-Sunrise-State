import React from 'react';
import './Style.css';

const beautyArticles = [
  {
    id: 1,
    title: 'Beauty Trends for 2025',
    summary: 'Discover the latest in skincare, makeup, and beauty routines.',
    author: 'Priya Nair',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Beauty+News+1',
  },
  {
    id: 2,
    title: 'Natural Beauty Products',
    summary: 'Benefits of using natural and organic beauty products.',
    author: 'Lakshmi Reddy',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Beauty+News+2',
  },
];

const Beauty = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Beauty News</h1>
      <p className="subheading">Tips, trends, and guides for beauty and skincare.</p>
    </header>
    <div className="article-list">
      {beautyArticles.map((article) => (
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

export default Beauty;