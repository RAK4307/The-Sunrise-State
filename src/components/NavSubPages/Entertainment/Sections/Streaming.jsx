import React from 'react';
import './Style.css';

const streamingArticles = [
  {
    id: 1,
    title: 'Streaming Platforms Compete for Viewers',
    summary: 'Major streaming services launch new originals and exclusive content.',
    author: 'Meena Das',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Streaming+News+1',
  },
  {
    id: 2,
    title: 'Binge-Worthy Series to Watch',
    summary: 'A guide to the best series available for streaming this month.',
    author: 'Lakshmi Reddy',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Streaming+News+2',
  },
];

const Streaming = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Streaming News</h1>
      <p className="subheading">Updates on streaming platforms, series, and exclusive releases.</p>
    </header>
    <div className="article-list">
      {streamingArticles.map((article) => (
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

export default Streaming;