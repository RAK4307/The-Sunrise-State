import React from 'react';
import './Style.css';

const politicsArticles = [
  {
    id: 1,
    title: 'Indian Politics: Key Developments',
    summary: 'Major political events and decisions shaping the nation.',
    author: 'Priya Nair',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Politics+News+1',
  },
  {
    id: 2,
    title: 'Election Updates and Analysis',
    summary: 'Insights and analysis on recent elections and political trends.',
    author: 'Lakshmi Reddy',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Politics+News+2',
  },
];

const Politics = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Politics News</h1>
      <p className="subheading">Latest political news, analysis, and election coverage.</p>
    </header>
    <div className="article-list">
      {politicsArticles.map((article) => (
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

export default Politics;

