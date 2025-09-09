import React from 'react';
import './Style.css';

const middleEastCrisisStories = [
  {
    id: 1,
    title: 'Middle East Crisis: Peace Talks',
    summary: 'Updates on peace negotiations and diplomatic efforts in the region.',
    author: 'Leila Hassan',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Middle+East+Crisis+1',
  },
  {
    id: 2,
    title: 'Energy and Innovation',
    summary: 'News on energy projects and technological innovation in the Middle East.',
    author: 'Omar Al-Farsi',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Middle+East+Crisis+2',
  },
];

const MiddleEastCrisis = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Middle East Crisis Top Stories</h1>
      <p className="subheading">Diplomacy, energy, and innovation news from the Middle East.</p>
    </header>
    <div className="article-list">
      {middleEastCrisisStories.map((story) => (
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

export default MiddleEastCrisis;