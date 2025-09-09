import React from 'react';
import './Style.css';

const russiaUkraineWarStories = [
  {
    id: 1,
    title: 'Russia-Ukraine War: Latest Updates',
    summary: 'Breaking news and analysis on the ongoing conflict.',
    author: 'Sophie Dubois',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Russia-Ukraine+War+1',
  },
  {
    id: 2,
    title: 'International Response',
    summary: 'Global reactions and humanitarian efforts related to the war.',
    author: 'Fatima Diallo',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Russia-Ukraine+War+2',
  },
];

const RussiaUkraineWar = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Russia-Ukraine War Top Stories</h1>
      <p className="subheading">News, analysis, and global response to the conflict.</p>
    </header>
    <div className="article-list">
      {russiaUkraineWarStories.map((story) => (
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

export default RussiaUkraineWar;