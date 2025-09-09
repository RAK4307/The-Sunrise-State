import React from 'react';
import '../Sections/Style.css';

const stockMarketStories = [
  {
    id: 1,
    title: 'Sensex and Nifty Reach All-Time Highs',
    summary: 'Indian stock markets hit record levels amid strong corporate earnings.',
    author: 'Lakshmi Reddy',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Stock+Market+Story+1',
  },
  {
    id: 2,
    title: 'Market Volatility Expected to Continue',
    summary: 'Analysts predict ongoing volatility in the stock market due to global factors.',
    author: 'Prakash Naidu',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Stock+Market+Story+2',
  },
];

const StockMarketUpdates = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Stock Market Updates</h1>
      <p className="subheading">Daily news and analysis from the Indian stock markets.</p>
    </header>
    <div className="article-list">
      {stockMarketStories.map((story) => (
        <div key={story.id} className="article-card">
          <img src={story.imageUrl} alt={story.title} className="article-image" />
          <div className="article-content">
            <h2 className="article-title">{story.title}</h2>
            <p className="article-summary">{story.summary}</p>
            <div className="article-meta">
              <span className="article-author">{story.author}</span> - <span className="article-date">{story.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default StockMarketUpdates;