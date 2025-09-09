import React from 'react';
import './Style.css';

const streamingNewsStories = [
  {
    id: 1,
    title: 'Streaming News: New Originals Released',
    summary: 'Streaming platforms unveil new original series and movies.',
    author: 'Lakshmi Reddy',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Streaming+News+Story+1',
  },
  {
    id: 2,
    title: 'Viewer Trends and Platform Growth',
    summary: 'Analysis of viewer habits and the growth of streaming services.',
    author: 'Meena Das',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Streaming+News+Story+2',
  },
];

const StreamingNews = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Streaming News</h1>
      <p className="subheading">Latest updates and trends from the world of streaming.</p>
    </header>
    <div className="article-list">
      {streamingNewsStories.map((story) => (
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

export default StreamingNews;