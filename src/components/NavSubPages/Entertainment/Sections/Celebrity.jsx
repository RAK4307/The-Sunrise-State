import React from 'react';
import './Style.css';

const celebrityArticles = [
  {
    id: 1,
    title: 'Celebrity Spotlight: Rising Stars',
    summary: 'Meet the new faces making waves in film and television.',
    author: 'Ajay Kumar',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Celebrity+News+1',
  },
  {
    id: 2,
    title: 'Behind the Scenes: Celebrity Life',
    summary: 'Exclusive interviews and stories from the world of celebrities.',
    author: 'Priya Nair',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Celebrity+News+2',
  },
];

const Celebrity = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Celebrity News</h1>
      <p className="subheading">Latest updates, interviews, and features on celebrities.</p>
    </header>
    <div className="article-list">
      {celebrityArticles.map((article) => (
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

export default Celebrity;