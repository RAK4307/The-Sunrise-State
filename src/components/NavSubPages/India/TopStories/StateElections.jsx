import React from 'react';
import './Style.css';

const stateElectionsStories = [
  {
    id: 1,
    title: 'State Elections: Key Contests',
    summary: 'Highlights and analysis of major state elections across India.',
    author: 'Priya Nair',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=State+Elections+Story+1',
  },
  {
    id: 2,
    title: 'Election Results and Trends',
    summary: 'Latest results and emerging trends from state polls.',
    author: 'Lakshmi Reddy',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=State+Elections+Story+2',
  },
];

const StateElections = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">State Elections Top Stories</h1>
      <p className="subheading">Election coverage, results, and analysis from Indian states.</p>
    </header>
    <div className="article-list">
      {stateElectionsStories.map((story) => (
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

export default StateElections;