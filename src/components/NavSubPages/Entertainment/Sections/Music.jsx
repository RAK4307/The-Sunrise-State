import React from 'react';
import './Style.css';

const musicArticles = [
  {
    id: 1,
    title: 'Top Chart Hits of the Week',
    summary: 'A look at the songs dominating the music charts.',
    author: 'Ajay Kumar',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Music+News+1',
  },
  {
    id: 2,
    title: 'Music Festivals Around the World',
    summary: 'Explore the biggest music festivals happening globally.',
    author: 'Priya Nair',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Music+News+2',
  },
];

const Music = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Music News</h1>
      <p className="subheading">Latest hits, artist interviews, and music festival coverage.</p>
    </header>
    <div className="article-list">
      {musicArticles.map((article) => (
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

export default Music;