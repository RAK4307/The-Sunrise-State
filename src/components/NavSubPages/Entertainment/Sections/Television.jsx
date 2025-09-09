import React from 'react';
import './Style.css';

const televisionArticles = [
  {
    id: 1,
    title: 'Television Ratings Soar for New Drama',
    summary: 'A new drama series is breaking viewership records on prime time.',
    author: 'Ajay Kumar',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Television+News+1',
  },
  {
    id: 2,
    title: 'Reality Shows Dominate Airwaves',
    summary: 'Reality TV continues to attract large audiences and social media buzz.',
    author: 'Priya Nair',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Television+News+2',
  },
];

const Television = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Television News</h1>
      <p className="subheading">Latest updates, ratings, and features from the TV industry.</p>
    </header>
    <div className="article-list">
      {televisionArticles.map((article) => (
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

export default Television;