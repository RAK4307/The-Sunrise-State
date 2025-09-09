import React from 'react';
import './Style.css';

const columnistInsightsStories = [
  {
    id: 1,
    title: 'Columnist Insights: Social Change',
    summary: 'Leading columnists share their views on evolving social issues.',
    author: 'Priya Nair',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Columnist+Insights+1',
  },
  {
    id: 2,
    title: 'Columnist Insights: Technology & Ethics',
    summary: 'Exploring the ethical implications of rapid technological change.',
    author: 'Ajay Kumar',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Columnist+Insights+2',
  },
];

const ColumnistInsights = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Columnist Insights Top Stories</h1>
      <p className="subheading">Perspectives and analysis from leading columnists.</p>
    </header>
    <div className="article-list">
      {columnistInsightsStories.map((story) => (
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

export default ColumnistInsights;