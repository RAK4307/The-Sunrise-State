import React from 'react';
import './Style.css';

const digitalIndiaStories = [
  {
    id: 1,
    title: 'Digital India: Transforming Governance',
    summary: 'How technology is driving transparency and efficiency in government services.',
    author: 'Ajay Kumar',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Digital+India+Story+1',
  },
  {
    id: 2,
    title: 'Internet Access Expands Nationwide',
    summary: 'Initiatives to bring high-speed internet to rural and urban areas.',
    author: 'Meena Das',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Digital+India+Story+2',
  },
];

const DigitalIndia = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Digital India Top Stories</h1>
      <p className="subheading">Latest updates on technology, innovation, and digital transformation.</p>
    </header>
    <div className="article-list">
      {digitalIndiaStories.map((story) => (
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

export default DigitalIndia;