import React from 'react';
import './Style.css';

const mumbaiArticles = [
  {
    id: 1,
    title: 'Mumbai: Financial Capital Updates',
    summary: 'News and stories from India’s bustling financial hub.',
    author: 'Meena Das',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Mumbai+News+1',
  },
  {
    id: 2,
    title: 'Mumbai’s Culture and Lifestyle',
    summary: 'Explore the unique culture and lifestyle of Mumbai.',
    author: 'Ajay Kumar',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Mumbai+News+2',
  },
];

const Mumbai = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Mumbai News</h1>
      <p className="subheading">Financial, cultural, and lifestyle updates from Mumbai.</p>
    </header>
    <div className="article-list">
      {mumbaiArticles.map((article) => (
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

export default Mumbai;