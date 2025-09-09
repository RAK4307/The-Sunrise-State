import React from 'react';
import './Style.css';

const delhiArticles = [
  {
    id: 1,
    title: 'Delhi: Political and Social Updates',
    summary: 'Key developments in politics, society, and governance in Delhi.',
    author: 'Priya Nair',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Delhi+News+1',
  },
  {
    id: 2,
    title: 'Delhi’s Heritage and Modernization',
    summary: 'Balancing tradition and progress in the capital city.',
    author: 'Lakshmi Reddy',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Delhi+News+2',
  },
];

const Delhi = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Delhi News</h1>
      <p className="subheading">Latest updates from India’s capital city.</p>
    </header>
    <div className="article-list">
      {delhiArticles.map((article) => (
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

export default Delhi;