import React from 'react';
import './Style.css';

const fashionArticles = [
  {
    id: 1,
    title: 'Fashion Trends for 2025',
    summary: 'Stay ahead with the latest styles and fashion inspirations.',
    author: 'Lakshmi Reddy',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Fashion+News+1',
  },
  {
    id: 2,
    title: 'Sustainable Fashion',
    summary: 'How sustainability is shaping the future of fashion.',
    author: 'Priya Nair',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Fashion+News+2',
  },
];

const Fashion = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Fashion News</h1>
      <p className="subheading">Trends, tips, and guides for fashion lovers.</p>
    </header>
    <div className="article-list">
      {fashionArticles.map((article) => (
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

export default Fashion;