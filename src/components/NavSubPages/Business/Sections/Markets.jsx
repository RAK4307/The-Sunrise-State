import React from 'react';
import '../Sections/Style.css';

const marketsArticles = [
  {
    id: 1,
    title: 'Stock Market Hits New Highs',
    summary: 'Indian stock indices reach record levels amid positive investor sentiment.',
    author: 'Lakshmi Reddy',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Markets+News+1',
  },
  {
    id: 2,
    title: 'Commodity Prices Fluctuate',
    summary: 'A review of recent trends in commodity markets.',
    author: 'Prakash Naidu',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Markets+News+2',
  },
];

const Markets = () => (
  <div className="category-page-container">
    <header className="author-profile-header">
      <h1 className="main-heading">Markets News</h1>
      <p className="subheading">Latest updates on stocks, commodities, and financial markets.</p>
    </header>
    <div className="article-list">
      {marketsArticles.map((article) => (
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

export default Markets;