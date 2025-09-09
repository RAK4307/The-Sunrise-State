import React from 'react';
import './Style.css';

const medicineArticles = [
  {
    id: 1,
    title: 'Medical Breakthroughs in 2025',
    summary: 'Latest advancements in medicine and healthcare technology.',
    author: 'Ajay Kumar',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Medicine+News+1',
  },
  {
    id: 2,
    title: 'Understanding New Treatments',
    summary: 'A guide to new therapies and medical procedures.',
    author: 'Meena Das',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Medicine+News+2',
  },
];

const Medicine = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Medicine News</h1>
      <p className="subheading">Discover the latest in medical research and treatments.</p>
    </header>
    <div className="article-list">
      {medicineArticles.map((article) => (
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

export default Medicine;