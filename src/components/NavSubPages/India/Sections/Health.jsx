import React from 'react';
import './Style.css';

const healthArticles = [
  {
    id: 1,
    title: 'Healthcare in India: Progress & Challenges',
    summary: 'A look at the evolving healthcare landscape across the country.',
    author: 'Lakshmi Reddy',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Health+News+1',
  },
  {
    id: 2,
    title: 'Public Health Initiatives',
    summary: 'Government programs and campaigns for better health outcomes.',
    author: 'Meena Das',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Health+News+2',
  },
];

const Health = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Health News</h1>
      <p className="subheading">Healthcare updates and wellness stories from India.</p>
    </header>
    <div className="article-list">
      {healthArticles.map((article) => (
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

export default Health;