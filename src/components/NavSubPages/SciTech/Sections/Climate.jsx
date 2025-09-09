import React from 'react';
import './Style.css';

const climateArticles = [
  {
    id: 1,
    title: 'Climate Change Updates',
    summary: 'Latest research and news on climate change and global warming.',
    author: 'Dr. Kavita Rao',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Climate+News+1',
  },
  {
    id: 2,
    title: 'Innovations in Climate Solutions',
    summary: 'Technological advances for climate resilience and sustainability.',
    author: 'Prof. Arjun Mehta',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Climate+News+2',
  },
];

const Climate = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Climate</h1>
      <p className="subheading">Research, solutions, and news on climate change.</p>
    </header>
    <div className="article-list">
      {climateArticles.map((article) => (
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

export default Climate;