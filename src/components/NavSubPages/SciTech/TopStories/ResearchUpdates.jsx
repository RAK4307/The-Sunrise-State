import React from 'react';
import './Style.css';

const researchUpdatesStories = [
  {
    id: 1,
    title: 'Research Updates: New Discoveries',
    summary: 'Highlights from recent scientific research and discoveries.',
    author: 'Dr. Kavita Rao',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Research+Updates+1',
  },
  {
    id: 2,
    title: 'Collaborative Science Projects',
    summary: 'Global collaboration advancing scientific knowledge.',
    author: 'Prof. Arjun Mehta',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Research+Updates+2',
  },
];

const ResearchUpdates = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Research Updates Top Stories</h1>
      <p className="subheading">Latest findings and collaborative projects in science.</p>
    </header>
    <div className="article-list">
      {researchUpdatesStories.map((story) => (
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

export default ResearchUpdates;