import React from 'react';
import './Style.css';

const musicChartsStories = [
  {
    id: 1,
    title: 'Music Charts: Top Hits of the Week',
    summary: 'Discover the songs leading the charts and trending worldwide.',
    author: 'Ajay Kumar',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Music+Charts+Story+1',
  },
  {
    id: 2,
    title: 'New Artists Break Into Top 10',
    summary: 'Emerging artists make their mark on the music charts.',
    author: 'Meena Das',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Music+Charts+Story+2',
  },
];

const MusicCharts = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Music Charts</h1>
      <p className="subheading">Weekly updates on top songs and trending artists.</p>
    </header>
    <div className="article-list">
      {musicChartsStories.map((story) => (
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

export default MusicCharts;