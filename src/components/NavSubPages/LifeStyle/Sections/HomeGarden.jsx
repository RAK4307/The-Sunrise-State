import React from 'react';
import './Style.css';

const homeGardenArticles = [
  {
    id: 1,
    title: 'Home Gardening Tips',
    summary: 'Grow your own vegetables and flowers with expert advice.',
    author: 'Priya Nair',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Home+Garden+News+1',
  },
  {
    id: 2,
    title: 'Indoor Plants for Wellness',
    summary: 'Best indoor plants to improve air quality and mood.',
    author: 'Lakshmi Reddy',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Home+Garden+News+2',
  },
];

const HomeGarden = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Home & Garden News</h1>
      <p className="subheading">Ideas and inspiration for your home and garden.</p>
    </header>
    <div className="article-list">
      {homeGardenArticles.map((article) => (
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

export default HomeGarden;