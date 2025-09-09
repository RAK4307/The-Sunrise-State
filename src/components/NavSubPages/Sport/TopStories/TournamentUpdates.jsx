import React from 'react';
import './Style.css';

const tournamentUpdates = [
  {
    id: 1,
    title: 'Upcoming Tournaments',
    summary: 'Preview of major sporting tournaments happening soon.',
    author: 'Amit Verma',
    date: 'Sep 5, 2025',
  },
  {
    id: 2,
    title: 'Tournament Results & Highlights',
    summary: 'Key results and highlights from recent tournaments.',
    author: 'Priya Nair',
    date: 'Sep 4, 2025',
  },
];

const TournamentUpdates = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Tournament Updates</h1>
      <p className="subheading">Previews, results, and highlights from major tournaments.</p>
    </header>
    <div className="article-list">
      {tournamentUpdates.map((item) => (
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

export default TournamentUpdates;