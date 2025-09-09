import React from 'react';
import './Style.css';

const infrastructureStories = [
  {
    id: 1,
    title: 'Infrastructure Projects Drive Growth',
    summary: 'Major projects shaping transportation, energy, and urban development.',
    author: 'Ajay Kumar',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Infrastructure+Story+1',
  },
  {
    id: 2,
    title: 'Smart Cities Initiative',
    summary: 'Progress and challenges in building smart cities across India.',
    author: 'Priya Nair',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Infrastructure+Story+2',
  },
];

const Infrastructure = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Infrastructure Top Stories</h1>
      <p className="subheading">Updates on major infrastructure projects and urban development.</p>
    </header>
    <div className="article-list">
      {infrastructureStories.map((story) => (
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

export default Infrastructure;