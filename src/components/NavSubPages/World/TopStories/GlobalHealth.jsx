import React from 'react';
import './Style.css';

const globalHealthStories = [
  {
    id: 1,
    title: 'Global Health: Pandemic Updates',
    summary: 'Latest news on global health crises and pandemic responses.',
    author: 'Emily Brown',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Global+Health+1',
  },
  {
    id: 2,
    title: 'Healthcare Innovations Worldwide',
    summary: 'Breakthroughs and trends in healthcare across the globe.',
    author: 'Jack Wilson',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Global+Health+2',
  },
];

const GlobalHealth = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Global Health Top Stories</h1>
      <p className="subheading">Updates and analysis on health issues around the world.</p>
    </header>
    <div className="article-list">
      {globalHealthStories.map((story) => (
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

export default GlobalHealth;