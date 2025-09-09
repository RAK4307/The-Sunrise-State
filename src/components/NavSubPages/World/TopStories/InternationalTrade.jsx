import React from 'react';
import './Style.css';

const internationalTradeStories = [
  {
    id: 1,
    title: 'International Trade Agreements',
    summary: 'Recent trade deals and their impact on global markets.',
    author: 'Luca Rossi',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=International+Trade+1',
  },
  {
    id: 2,
    title: 'Global Supply Chain Updates',
    summary: 'News and analysis on supply chain disruptions and solutions.',
    author: 'Maria Gonzalez',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=International+Trade+2',
  },
];

const InternationalTrade = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">International Trade Top Stories</h1>
      <p className="subheading">Trade agreements, market trends, and supply chain news.</p>
    </header>
    <div className="article-list">
      {internationalTradeStories.map((story) => (
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

export default InternationalTrade;