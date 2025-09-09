import React from 'react';
import './Style.css';

const researchArticles = [
  {
    id: 1,
    title: 'Research Highlights',
    summary: 'Key findings from recent scientific research across disciplines.',
    author: 'Dr. Kavita Rao',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Research+News+1',
  },
  {
    id: 2,
    title: 'Collaborative Science Projects',
    summary: 'How global collaboration is advancing scientific discovery.',
    author: 'Prof. Arjun Mehta',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Research+News+2',
  },
];

const Research = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Research</h1>
      <p className="subheading">Latest research findings and collaborative projects.</p>
    </header>
    <div className="article-list">
      {researchArticles.map((article) => (
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

export default Research;