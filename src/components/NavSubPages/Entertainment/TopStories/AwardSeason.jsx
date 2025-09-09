import React from 'react';
import './Style.css';

const awardSeasonStories = [
  {
    id: 1,
    title: 'Award Season Kicks Off with Glamour',
    summary: 'Red carpet events and star-studded ceremonies mark the start of award season.',
    author: 'Meena Das',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Award+Season+Story+1',
  },
  {
    id: 2,
    title: 'Surprise Wins at Major Ceremonies',
    summary: 'Unexpected winners take home top honors at this year’s awards.',
    author: 'Priya Nair',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Award+Season+Story+2',
  },
];

const AwardSeason = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Award Season Top Stories</h1>
      <p className="subheading">Highlights, winners, and memorable moments from entertainment awards.</p>
    </header>
    <div className="article-list">
      {awardSeasonStories.map((story) => (
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

export default AwardSeason;