import React from 'react';
import './Style.css';

const africaArticles = [
  {
    id: 1,
    title: 'Africa: Economic Growth Trends',
    summary: 'Latest updates on economic development and investment across Africa.',
    author: 'Fatima Diallo',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Africa+News+1',
  },
  {
    id: 2,
    title: 'Wildlife Conservation Efforts',
    summary: 'Major conservation projects and wildlife news from the continent.',
    author: 'Samuel Okoye',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Africa+News+2',
  },
];

const Africa = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Africa</h1>
      <p className="subheading">News, features, and analysis from across Africa.</p>
    </header>
    <div className="article-list">
      {africaArticles.map((article) => (
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

export default Africa;