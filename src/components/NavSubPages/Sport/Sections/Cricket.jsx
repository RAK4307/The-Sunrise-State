import React from 'react';
import './Style.css';

const cricketArticles = [
  {
    id: 1,
    title: 'Cricket World Cup News',
    summary: 'Updates and analysis from the ongoing Cricket World Cup.',
    author: 'Rohit Sharma',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Cricket+News+1',
  },
  {
    id: 2,
    title: 'Young Talents in Cricket',
    summary: 'Profiles of rising stars in international and domestic cricket.',
    author: 'Priya Nair',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Cricket+News+2',
  },
];

const Cricket = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Cricket</h1>
      <p className="subheading">Latest match reports, analysis, and player features in cricket.</p>
    </header>
    <div className="article-list">
      {cricketArticles.map((article) => (
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

export default Cricket;