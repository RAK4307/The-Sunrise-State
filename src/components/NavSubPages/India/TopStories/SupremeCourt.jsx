import React from 'react';
import './Style.css';

const supremeCourtStories = [
  {
    id: 1,
    title: 'Supreme Court: Landmark Judgments',
    summary: 'Recent landmark decisions and their impact on Indian society.',
    author: 'Meena Das',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Supreme+Court+Story+1',
  },
  {
    id: 2,
    title: 'Judicial Reforms and Updates',
    summary: 'Ongoing reforms and updates from the Supreme Court.',
    author: 'Ajay Kumar',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Supreme+Court+Story+2',
  },
];

const SupremeCourt = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Supreme Court Top Stories</h1>
      <p className="subheading">Judgments, reforms, and updates from India’s highest court.</p>
    </header>
    <div className="article-list">
      {supremeCourtStories.map((story) => (
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

export default SupremeCourt;