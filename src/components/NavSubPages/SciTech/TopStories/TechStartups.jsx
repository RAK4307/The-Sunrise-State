import React from 'react';
import './Style.css';

const techStartupsStories = [
  {
    id: 1,
    title: 'Tech Startups: Innovations to Watch',
    summary: 'Promising startups driving innovation in technology.',
    author: 'Dr. Kavita Rao',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Tech+Startups+1',
  },
  {
    id: 2,
    title: 'Startup Success Stories',
    summary: 'How new companies are changing the tech landscape.',
    author: 'Prof. Arjun Mehta',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Tech+Startups+2',
  },
];

const TechStartups = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Tech Startups Top Stories</h1>
      <p className="subheading">Breakthroughs and success stories from the startup world.</p>
    </header>
    <div className="article-list">
      {techStartupsStories.map((story) => (
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