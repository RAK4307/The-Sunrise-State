import React from 'react';
import './Style.css';

const mentalHealthStories = [
  {
    id: 1,
    title: 'Mental Health Awareness',
    summary: 'Initiatives and resources to support mental well-being.',
    author: 'Priya Nair',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Mental+Health+Story+1',
  },
  {
    id: 2,
    title: 'Managing Stress Effectively',
    summary: 'Expert tips for coping with stress and anxiety.',
    author: 'Ajay Kumar',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Mental+Health+Story+2',
  },
];

const MentalHealth = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Mental Health Top Stories</h1>
      <p className="subheading">Resources, tips, and stories for mental wellness.</p>
    </header>
    <div className="article-list">
      {mentalHealthStories.map((story) => (
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

export default MentalHealth;