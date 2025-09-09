import React from 'react';
import './Style.css';

const sportsNews = [
  {
    id: 1,
    title: 'Olympics: Medal Tally & Highlights',
    summary: 'Latest updates on medal winners and memorable moments from the Olympics.',
    author: 'Amit Verma',
    date: 'Sep 5, 2025',
  },
  {
    id: 2,
    title: 'National Athletics Championships',
    summary: 'Highlights and results from the latest national athletics events.',
    author: 'Priya Nair',
    date: 'Sep 4, 2025',
  },
];

const SportsNews = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Sports News</h1>
      <p className="subheading">Top stories and updates from the world of sports.</p>
    </header>
    <div className="article-list">
      {sportsNews.map((item) => (
        <div key={item.id} className="article-card">
          <div className="article-content">
            <h2 className="article-title">{item.title}</h2>
            <p className="article-summary">{item.summary}</p>
            <div className="article-meta">
              <span className="article-author">{item.author}</span>
              <span className="article-date">{item.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SportsNews;