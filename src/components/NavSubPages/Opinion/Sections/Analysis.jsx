import React from 'react';
import './Style.css';

const analysisArticles = [
  {
    id: 1,
    title: 'Economic Analysis: Current Trends',
    summary: 'Expert breakdown of the latest economic developments and their impact.',
    author: 'Ajay Kumar',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Analysis+News+1',
  },
  {
    id: 2,
    title: 'Political Analysis: Election Insights',
    summary: 'In-depth look at recent elections and political shifts.',
    author: 'Meena Das',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Analysis+News+2',
  },
];

const Analysis = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Analysis</h1>
      <p className="subheading">Expert analysis and commentary on current events.</p>
    </header>
    <div className="article-list">
      {analysisArticles.map((article) => (
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

export default Analysis;