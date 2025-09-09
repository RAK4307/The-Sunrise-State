import React from 'react';
import './Style.css';

const chinaRelationsStories = [
  {
    id: 1,
    title: 'China-US Relations: Latest Developments',
    summary: 'Updates on diplomatic talks, trade agreements, and tensions between China and the US.',
    author: 'Li Wei',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=China+Relations+1',
  },
  {
    id: 2,
    title: 'China’s Global Influence',
    summary: 'Analysis of China’s growing role in international organizations and global affairs.',
    author: 'Fatima Diallo',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=China+Relations+2',
  },
];

const ChinaRelations = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">China Relations Top Stories</h1>
      <p className="subheading">Diplomacy, trade, and global impact of China’s international relations.</p>
    </header>
    <div className="article-list">
      {chinaRelationsStories.map((story) => (
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

export default ChinaRelations;