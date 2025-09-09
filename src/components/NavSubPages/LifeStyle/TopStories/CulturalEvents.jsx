import React from 'react';
import './Style.css';

const culturalEventsStories = [
  {
    id: 1,
    title: 'Global Cultural Events',
    summary: 'Explore vibrant festivals and cultural happenings around the world.',
    author: 'Meena Das',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Cultural+Events+Story+1',
  },
  {
    id: 2,
    title: 'Art Exhibitions & Performances',
    summary: 'Highlights from recent art exhibitions and live performances.',
    author: 'Ajay Kumar',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Cultural+Events+Story+2',
  },
];

const CulturalEvents = () => (
  <div className="category-page-container">
    <header className="author-profile-header">
      <h1 className="main-heading">Cultural Events Top Stories</h1>
      <p className="subheading">Festivals, exhibitions, and cultural highlights.</p>
    </header>
    <div className="article-list">
      {culturalEventsStories.map((story) => (
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

export default CulturalEvents;