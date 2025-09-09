import React from 'react';
import './Style.css';

const travelArticles = [
  {
    id: 1,
    title: 'Travel Destinations for 2025',
    summary: 'Top places to visit and travel tips for the new year.',
    author: 'Meena Das',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Travel+News+1',
  },
  {
    id: 2,
    title: 'Sustainable Travel',
    summary: 'How to travel responsibly and reduce your carbon footprint.',
    author: 'Ajay Kumar',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Travel+News+2',
  },
];

const Travel = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Travel News</h1>
      <p className="subheading">Destinations, tips, and guides for every traveler.</p>
    </header>
    <div className="article-list">
      {travelArticles.map((article) => (
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

export default Travel;