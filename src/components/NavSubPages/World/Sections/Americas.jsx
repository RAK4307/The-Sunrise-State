import React from 'react';
import './Style.css';

const americasArticles = [
  {
    id: 1,
    title: 'Americas: Political Developments',
    summary: 'Key updates on elections, policies, and leadership in the Americas.',
    author: 'Maria Gonzalez',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Americas+News+1',
  },
  {
    id: 2,
    title: 'Environmental Initiatives',
    summary: 'Major environmental projects and climate news from North and South America.',
    author: 'John Smith',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Americas+News+2',
  },
];

const Americas = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Americas</h1>
      <p className="subheading">Latest news and analysis from North, Central, and South America.</p>
    </header>
    <div className="article-list">
      {americasArticles.map((article) => (
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

export default Americas;