import React from 'react';
import './Style.css';

const innovationArticles = [
  {
    id: 1,
    title: 'Innovation in Science',
    summary: 'Discover the latest scientific innovations and discoveries.',
    author: 'Dr. Kavita Rao',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Innovation+News+1',
  },
  {
    id: 2,
    title: 'Tech Startups to Watch',
    summary: 'Promising startups driving innovation in technology.',
    author: 'Prof. Arjun Mehta',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Innovation+News+2',
  },
];

const Innovation = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Innovation</h1>
      <p className="subheading">Breakthroughs and new ideas in science and tech.</p>
    </header>
    <div className="article-list">
      {innovationArticles.map((article) => (
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

export default Innovation;