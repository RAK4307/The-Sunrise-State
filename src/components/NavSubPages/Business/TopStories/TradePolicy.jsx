import React from 'react';
import '../Sections/Style.css';

const tradePolicyStories = [
  {
    id: 1,
    title: 'India Revises Trade Policy for 2025',
    summary: 'The government announces new trade regulations to boost exports and support local industries.',
    author: 'Ravi Kumar',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Trade+Policy+Story+1',
  },
  {
    id: 2,
    title: 'Free Trade Agreements Expand Market Access',
    summary: 'Recent FTAs open new opportunities for Indian businesses in global markets.',
    author: 'Meena Das',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Trade+Policy+Story+2',
  },
];

const TradePolicy = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Trade Policy Top Stories</h1>
      <p className="subheading">Latest updates and analysis on India’s trade policies and agreements.</p>
    </header>
    <div className="article-list">
      {tradePolicyStories.map((story) => (
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

export default TradePolicy;