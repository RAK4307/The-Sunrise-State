import React from 'react';
import '../Sections/Style.css';

const policyUpdatesArticles = [
  {
    id: 1,
    title: 'Policy Updates for 2025 Announced',
    summary: 'New policies are set to impact various sectors including education and healthcare.',
    author: 'Anil Reddy',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Policy+Updates+News+1',
  },
  {
    id: 2,
    title: 'Environmental Policy Changes',
    summary: 'Government introduces new measures to promote sustainability.',
    author: 'Lakshmi Reddy',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Policy+Updates+News+2',
  },
];

const PolicyUpdates = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Policy Updates</h1>
      <p className="subheading">Recent policy changes and their impact on society and business.</p>
    </header>
    <div className="article-list">
      {policyUpdatesArticles.map((article) => (
        <div key={article.id} className="article-card">
          <img src={article.imageUrl} alt={article.title} className="article-image" />
          <div className="article-content">
            <h2 className="article-title">{article.title}</h2>
            <p className="article-summary">{article.summary}</p>
            <div className="article-meta">
              <span className="article-author">{article.author}</span> - <span className="article-date">{article.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default PolicyUpdates;