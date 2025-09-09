import React from 'react';
import './Style.css';

const expertCommentaryStories = [
  {
    id: 1,
    title: 'Expert Commentary: Election Insights',
    summary: 'Experts analyze recent elections and political developments.',
    author: 'Ajay Kumar',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Expert+Commentary+1',
  },
  {
    id: 2,
    title: 'Expert Commentary: Climate Action',
    summary: 'Commentary on climate change and sustainability.',
    author: 'Meena Das',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Expert+Commentary+2',
  },
];

const ExpertCommentary = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Expert Commentary Top Stories</h1>
      <p className="subheading">Insights and analysis from subject matter experts.</p>
    </header>
    <div className="article-list">
      {expertCommentaryStories.map((story) => (
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

export default ExpertCommentary;