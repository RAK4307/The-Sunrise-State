import React from 'react';
import './Style.css';

const opinionArticles = [
  {
    id: 1,
    title: 'Opinion: The Future of Democracy',
    summary: 'Reflections on democratic values and challenges in the modern era.',
    author: 'Ajay Kumar',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Opinion+News+1',
  },
  {
    id: 2,
    title: 'Opinion: Technology & Ethics',
    summary: 'Exploring the ethical implications of rapid technological change.',
    author: 'Meena Das',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Opinion+News+2',
  },
];

const Opinion = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Opinion</h1>
      <p className="subheading">Expert opinions and thoughtful commentary.</p>
    </header>
    <div className="article-list">
      {opinionArticles.map((article) => (
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

export default Opinion;