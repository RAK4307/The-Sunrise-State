import React from 'react';
import './Style.css';

const guestEssaysArticles = [
  {
    id: 1,
    title: 'Guest Essay: Education Reform',
    summary: 'Guest perspectives on the future of education in India.',
    author: 'Meena Das',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Guest+Essays+News+1',
  },
  {
    id: 2,
    title: 'Guest Essay: Climate Action',
    summary: 'Thoughts on climate change and sustainability from guest writers.',
    author: 'Ajay Kumar',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Guest+Essays+News+2',
  },
];

const GuestEssays = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Guest Essays</h1>
      <p className="subheading">Unique perspectives from guest contributors.</p>
    </header>
    <div className="article-list">
      {guestEssaysArticles.map((article) => (
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

export default GuestEssays;