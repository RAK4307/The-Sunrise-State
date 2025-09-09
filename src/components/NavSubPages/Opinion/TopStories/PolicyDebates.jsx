import React from 'react';
import './Style.css';

const policyDebatesStories = [
  {
    id: 1,
    title: 'Policy Debates: Governance',
    summary: 'Debates on governance reforms and policy changes.',
    author: 'Priya Nair',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Policy+Debates+1',
  },
  {
    id: 2,
    title: 'Policy Debates: Social Welfare',
    summary: 'Discussions on social welfare policies and their impact.',
    author: 'Lakshmi Reddy',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Policy+Debates+2',
  },
];

const PolicyDebates = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Policy Debates Top Stories</h1>
      <p className="subheading">Debates and discussions on key policy issues.</p>
    </header>
    <div className="article-list">
      {policyDebatesStories.map((story) => (
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

export default PolicyDebates;