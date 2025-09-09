import React from 'react';
import './Style.css';

const globalProfileArticles = [
  {
    id: 1,
    title: 'Global Leaders Profile',
    summary: 'In-depth profiles of influential leaders shaping world affairs.',
    author: 'Fatima Diallo',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Global+Profile+1',
  },
  {
    id: 2,
    title: 'International Organizations',
    summary: 'Spotlight on organizations making a global impact.',
    author: 'Maria Gonzalez',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Global+Profile+2',
  },
];

const GlobalProfile = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Global Profile</h1>
      <p className="subheading">Profiles of leaders and organizations shaping the world.</p>
    </header>
    <div className="article-list">
      {globalProfileArticles.map((article) => (
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

export default GlobalProfile;