import React from 'react';
import './Style.css';

const teamRankings = [
  {
    id: 1,
    title: 'Cricket Team Rankings',
    summary: 'Latest ICC rankings for international cricket teams.',
    author: 'Rohit Sharma',
    date: 'Sep 5, 2025',
  },
  {
    id: 2,
    title: 'Football Club Rankings',
    summary: 'Current standings and rankings for top football clubs.',
    author: 'Priya Nair',
    date: 'Sep 4, 2025',
  },
];

const TeamRankings = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Team Rankings</h1>
      <p className="subheading">Latest rankings and standings for teams across sports.</p>
    </header>
    <div className="article-list">
      {teamRankings.map((item) => (
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

export default TeamRankings;