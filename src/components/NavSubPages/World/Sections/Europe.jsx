import React from 'react';
import './Style.css';

const europeArticles = [
  {
    id: 1,
    title: 'Europe: Political Landscape',
    summary: 'Key updates on elections, policies, and leadership in Europe.',
    author: 'Sophie Dubois',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Europe+News+1',
  },
  {
    id: 2,
    title: 'European Union Developments',
    summary: 'Latest news on EU policies, trade, and international relations.',
    author: 'Luca Rossi',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Europe+News+2',
  },
];

const Europe = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Europe</h1>
      <p className="subheading">Political, economic, and social news from Europe.</p>
    </header>
    <div className="article-list">
      {europeArticles.map((article) => (
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

export default Europe;