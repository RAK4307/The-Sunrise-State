import React from 'react';
import './Style.css';

const bangaloreArticles = [
  {
    id: 1,
    title: 'Bangalore: Tech Hub Developments',
    summary: 'Latest updates on Bangalore’s booming tech industry and infrastructure.',
    author: 'Ajay Kumar',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Bangalore+News+1',
  },
  {
    id: 2,
    title: 'Culture and Events in Bangalore',
    summary: 'Discover the vibrant cultural scene and upcoming events.',
    author: 'Meena Das',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Bangalore+News+2',
  },
];

const Bangalore = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Bangalore News</h1>
      <p className="subheading">Tech, culture, and city updates from Bangalore.</p>
    </header>
    <div className="article-list">
      {bangaloreArticles.map((article) => (
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

export default Bangalore;