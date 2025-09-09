import React from 'react';
import './Style.css';

const tennisArticles = [
  {
    id: 1,
    title: 'Grand Slam Tennis News',
    summary: 'Latest results and stories from Grand Slam tournaments.',
    author: 'Rohit Sharma',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Tennis+News+1',
  },
  {
    id: 2,
    title: 'Rising Tennis Stars',
    summary: 'Profiles of young tennis players making an impact.',
    author: 'Priya Nair',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Tennis+News+2',
  },
];

const Tennis = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Tennis</h1>
      <p className="subheading">Tournament news, player profiles, and tennis highlights.</p>
    </header>
    <div className="article-list">
      {tennisArticles.map((article) => (
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

export default Tennis;