import React from 'react';
import './Style.css';

const asiaPacificArticles = [
  {
    id: 1,
    title: 'Asia-Pacific: Tech Innovations',
    summary: 'Breakthroughs and trends in technology across Asia-Pacific.',
    author: 'Li Wei',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Asia-Pacific+News+1',
  },
  {
    id: 2,
    title: 'Regional Security Updates',
    summary: 'Latest news on security and diplomacy in the Asia-Pacific region.',
    author: 'Akira Tanaka',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Asia-Pacific+News+2',
  },
];

const AsiaPacific = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Asia-Pacific</h1>
      <p className="subheading">Technology, security, and regional news from Asia-Pacific.</p>
    </header>
    <div className="article-list">
      {asiaPacificArticles.map((article) => (
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

export default AsiaPacific;