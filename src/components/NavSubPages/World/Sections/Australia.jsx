import React from 'react';
import './Style.css';

const australiaArticles = [
  {
    id: 1,
    title: 'Australia: Economic Updates',
    summary: 'Latest news on Australia’s economy, trade, and investment.',
    author: 'Emily Brown',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Australia+News+1',
  },
  {
    id: 2,
    title: 'Environmental Conservation',
    summary: 'Major conservation efforts and wildlife news from Australia.',
    author: 'Jack Wilson',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Australia+News+2',
  },
];

const Australia = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Australia</h1>
      <p className="subheading">Economic, environmental, and social news from Australia.</p>
    </header>
    <div className="article-list">
      {australiaArticles.map((article) => (
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

export default Australia;