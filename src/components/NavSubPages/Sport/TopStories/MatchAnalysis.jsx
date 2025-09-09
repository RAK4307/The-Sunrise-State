import React from 'react';
import './Style.css';

const matchAnalysis = [
  {
    id: 1,
    title: 'Cricket: India vs Australia Analysis',
    summary: 'A deep dive into the strategies and turning points of the match.',
    author: 'Rohit Sharma',
    date: 'Sep 5, 2025',
  },
  {
    id: 2,
    title: 'Football: Man United vs Chelsea Review',
    summary: 'Key moments and tactical breakdown of the Premier League clash.',
    author: 'Priya Nair',
    date: 'Sep 4, 2025',
  },
];

const MatchAnalysis = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Match Analysis</h1>
      <p className="subheading">Expert breakdowns and tactical reviews of recent matches.</p>
    </header>
    <div className="article-list">
      {matchAnalysis.map((item) => (
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

export default MatchAnalysis;