import React from 'react';
import '../Sections/Style.css';

const financeArticles = [
  {
    id: 1,
    title: 'Personal Finance Tips for 2025',
    summary: 'Experts share advice on saving, investing, and managing personal finances.',
    author: 'Priya Nair',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Finance+News+1',
  },
  {
    id: 2,
    title: 'Tax Planning Strategies',
    summary: 'How to optimize your taxes for the new financial year.',
    author: 'Anil Reddy',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Finance+News+2',
  },
];

const Finance = () => (
  <div className="category-page-container">
    <header className="author-profile-header">
      <h1 className="main-heading">Finance News</h1>
      <p className="subheading">Guidance and updates on personal and corporate finance.</p>
    </header>
    <div className="article-list">
      {financeArticles.map((article) => (
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

export default Finance;