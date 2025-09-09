import React from 'react';
import './Style.css';

const athleticsArticles = [
  {
    id: 1,
    title: 'National Athletics Championships',
    summary: 'Highlights and results from the latest national athletics events.',
    author: 'Rohit Sharma',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Athletics+News+1',
  },
  {
    id: 2,
    title: 'Rising Stars in Track & Field',
    summary: 'Profiles of emerging athletes making headlines in track and field.',
    author: 'Priya Nair',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Athletics+News+2',
  },
];

const Athletics = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Athletics</h1>
      <p className="subheading">Latest news, results, and features from the world of athletics.</p>
    </header>
    <div className="article-list">
      {athleticsArticles.map((article) => (
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

export default Athletics;