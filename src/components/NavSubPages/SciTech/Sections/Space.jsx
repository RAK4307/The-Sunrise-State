import React from 'react';
import './Style.css';

const spaceArticles = [
  {
    id: 1,
    title: 'Space Exploration Updates',
    summary: 'Latest missions, discoveries, and news from space agencies.',
    author: 'Dr. Kavita Rao',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Space+News+1',
  },
  {
    id: 2,
    title: 'The Future of Space Travel',
    summary: 'Innovations and predictions for human space exploration.',
    author: 'Prof. Arjun Mehta',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Space+News+2',
  },
];

const Space = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Space</h1>
      <p className="subheading">Discoveries, missions, and the future of space travel.</p>
    </header>
    <div className="article-list">
      {spaceArticles.map((article) => (
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

export default Space;