import React from 'react';
import './Style.css';

const infrastructureArticles = [
  {
    id: 1,
    title: 'Infrastructure Projects in India',
    summary: 'Major projects shaping the future of transportation and urban development.',
    author: 'Ajay Kumar',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Infrastructure+News+1',
  },
  {
    id: 2,
    title: 'Smart Cities Initiative',
    summary: 'Progress and challenges in building smart cities across India.',
    author: 'Priya Nair',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Infrastructure+News+2',
  },
];

const Infrastructure = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Infrastructure News</h1>
      <p className="subheading">Updates on major projects and urban development.</p>
    </header>
    <div className="article-list">
      {infrastructureArticles.map((article) => (
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

export default Infrastructure;