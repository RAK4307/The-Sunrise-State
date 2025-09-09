import React from 'react';
import './Style.css';

const healthPolicyStories = [
  {
    id: 1,
    title: 'Health Policy Updates',
    summary: 'Recent policy changes impacting healthcare delivery and insurance.',
    author: 'Ajay Kumar',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Health+Policy+Story+1',
  },
  {
    id: 2,
    title: 'Public Health Policy Initiatives',
    summary: 'New government programs to improve public health outcomes.',
    author: 'Meena Das',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Health+Policy+Story+2',
  },
];

const HealthPolicy = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Health Policy Top Stories</h1>
      <p className="subheading">Policy changes, initiatives, and their impact on health.</p>
    </header>
    <div className="article-list">
      {healthPolicyStories.map((story) => (
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

export default HealthPolicy;