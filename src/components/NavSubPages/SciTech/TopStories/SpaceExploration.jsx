import React from 'react';
import './Style.css';

const spaceExplorationStories = [
  {
    id: 1,
    title: 'Space Exploration: New Missions',
    summary: 'Updates on the latest missions and discoveries in space.',
    author: 'Dr. Kavita Rao',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Space+Exploration+1',
  },
  {
    id: 2,
    title: 'The Future of Space Travel',
    summary: 'Innovations and predictions for human space exploration.',
    author: 'Prof. Arjun Mehta',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Space+Exploration+2',
  },
];

const SpaceExploration = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Space Exploration Top Stories</h1>
      <p className="subheading">Discoveries, missions, and the future of space travel.</p>
    </header>
    <div className="article-list">
      {spaceExplorationStories.map((story) => (
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

export default SpaceExploration;