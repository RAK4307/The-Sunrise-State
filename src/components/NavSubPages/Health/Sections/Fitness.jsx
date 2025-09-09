import React from 'react';
import './Style.css';

const fitnessArticles = [
  {
    id: 1,
    title: 'Fitness Trends for 2025',
    summary: 'Discover the latest workouts and fitness routines gaining popularity.',
    author: 'Ajay Kumar',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Fitness+News+1',
  },
  {
    id: 2,
    title: 'Home Workouts: Staying Active Indoors',
    summary: 'Tips and guides for effective home-based exercise routines.',
    author: 'Priya Nair',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Fitness+News+2',
  },
];

const Fitness = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Fitness News</h1>
      <p className="subheading">Latest trends, tips, and expert advice for a healthier lifestyle.</p>
    </header>
    <div className="article-list">
      {fitnessArticles.map((article) => (
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

export default Fitness;