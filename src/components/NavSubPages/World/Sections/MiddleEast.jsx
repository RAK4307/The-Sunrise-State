import React from 'react';
import './Style.css';

const middleEastArticles = [
  {
    id: 1,
    title: 'Middle East: Peace Talks',
    summary: 'Updates on peace negotiations and diplomatic efforts in the region.',
    author: 'Leila Hassan',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Middle+East+News+1',
  },
  {
    id: 2,
    title: 'Energy and Innovation',
    summary: 'News on energy projects and technological innovation in the Middle East.',
    author: 'Omar Al-Farsi',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Middle+East+News+2',
  },
];

const MiddleEast = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Middle East</h1>
      <p className="subheading">Diplomacy, energy, and innovation news from the Middle East.</p>
    </header>
    <div className="article-list">
      {middleEastArticles.map((article) => (
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

export default MiddleEast;