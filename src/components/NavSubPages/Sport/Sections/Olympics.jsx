import React from 'react';
import './Style.css';

const olympicsArticles = [
  {
    id: 1,
    title: 'Olympics: Medal Tally & Highlights',
    summary: 'Latest updates on medal winners and memorable moments from the Olympics.',
    author: 'Rohit Sharma',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Olympics+News+1',
  },
  {
    id: 2,
    title: 'Olympic Athletes to Watch',
    summary: 'Profiles of athletes making headlines at the Olympics.',
    author: 'Priya Nair',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Olympics+News+2',
  },
];

const Olympics = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Olympics</h1>
      <p className="subheading">Medal tallies, athlete profiles, and Olympic highlights.</p>
    </header>
    <div className="article-list">
      {olympicsArticles.map((article) => (
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

export default Olympics;