import React from 'react';
import './Style.css';

const healthCareStories = [
  {
    id: 1,
    title: 'Healthcare Innovations',
    summary: 'New technologies and approaches are improving patient care.',
    author: 'Meena Das',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=HealthCare+Story+1',
  },
  {
    id: 2,
    title: 'Access to Healthcare Expands',
    summary: 'Government and private initiatives increase healthcare accessibility.',
    author: 'Lakshmi Reddy',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=HealthCare+Story+2',
  },
];

const HealthCare = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Healthcare Top Stories</h1>
      <p className="subheading">Latest news and updates from the healthcare sector.</p>
    </header>
    <div className="article-list">
      {healthCareStories.map((story) => (
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

export default HealthCare;