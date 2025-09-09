import React from 'react';
import './Style.css';

const liveScores = [
  {
    id: 1,
    match: 'India vs Australia',
    score: '245/7 (50 overs) - 230/9 (48 overs)',
    status: 'India won by 15 runs',
    date: 'Sep 5, 2025',
  },
  {
    id: 2,
    match: 'Manchester United vs Chelsea',
    score: '2 - 1',
    status: 'Full Time',
    date: 'Sep 4, 2025',
  },
];

const LiveScores = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Live Scores</h1>
      <p className="subheading">Latest scores from ongoing and recent matches.</p>
    </header>
    <div className="article-list">
      {liveScores.map((item) => (
        <div key={item.id} className="article-card">
          <div className="article-content">
            <h2 className="article-title">{item.match}</h2>
            <p className="article-summary">{item.score}</p>
            <div className="article-meta">
              <span className="article-date">{item.date}</span>
              <span className="article-author">{item.status}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default LiveScores;