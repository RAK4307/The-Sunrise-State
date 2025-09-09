import React from 'react';
import './Style.css';

const playerTransfers = [
  {
    id: 1,
    title: 'Football: Summer Transfer Window',
    summary: 'Major player moves and signings in European football.',
    author: 'Amit Verma',
    date: 'Sep 5, 2025',
  },
  {
    id: 2,
    title: 'Cricket: IPL Auction Highlights',
    summary: 'Top buys and team strategies from the latest IPL auction.',
    author: 'Priya Nair',
    date: 'Sep 4, 2025',
  },
];

const PlayerTransfers = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Player Transfers</h1>
      <p className="subheading">Latest updates on player transfers and signings.</p>
    </header>
    <div className="article-list">
      {playerTransfers.map((item) => (
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

export default PlayerTransfers;