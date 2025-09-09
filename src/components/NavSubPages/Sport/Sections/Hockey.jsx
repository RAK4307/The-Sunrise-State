import React from 'react';
import './Style.css';

const hockeyArticles = [
  {
    id: 1,
    title: 'Hockey Championship Results',
    summary: 'Latest results and highlights from national and international hockey.',
    author: 'Rohit Sharma',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Hockey+News+1',
  },
  {
    id: 2,
    title: 'Women in Hockey',
    summary: 'Spotlight on women athletes making an impact in hockey.',
    author: 'Priya Nair',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Hockey+News+2',
  },
];

const Hockey = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Hockey</h1>
      <p className="subheading">News, results, and features from the hockey world.</p>
    </header>
    <div className="article-list">
      {hockeyArticles.map((article) => (
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

export default Hockey;