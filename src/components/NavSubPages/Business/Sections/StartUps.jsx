import React from 'react';
import '../Sections/Style.css';

const startupsArticles = [
  {
    id: 1,
    title: 'Startups Drive Innovation in Amaravati',
    summary: 'Local startups are making waves in technology and sustainability.',
    author: 'Srinivas Rao',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=StartUps+News+1',
  },
  {
    id: 2,
    title: 'Funding Opportunities for New Ventures',
    summary: 'Investors are looking for promising startups in the region.',
    author: 'Kavita Chowdary',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=StartUps+News+2',
  },
];

const StartUps = () => (
  <div className="category-page-container">
    <header className="author-profile-header">
      <h1 className="main-heading">StartUps News</h1>
      <p className="subheading">Stories and updates from the startup ecosystem.</p>
    </header>
    <div className="article-list">
      {startupsArticles.map((article) => (
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

export default StartUps;