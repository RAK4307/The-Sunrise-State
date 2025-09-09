import React from 'react';
import './Style.css';

const publicHealthArticles = [
  {
    id: 1,
    title: 'Public Health Initiatives',
    summary: 'Government and community programs improving public health.',
    author: 'Meena Das',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Public+Health+News+1',
  },
  {
    id: 2,
    title: 'Vaccination Drives Expand',
    summary: 'Efforts to increase vaccination coverage across regions.',
    author: 'Lakshmi Reddy',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Public+Health+News+2',
  },
];

const PublicHealth = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Public Health News</h1>
      <p className="subheading">Updates on public health programs and community wellness.</p>
    </header>
    <div className="article-list">
      {publicHealthArticles.map((article) => (
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

export default PublicHealth;