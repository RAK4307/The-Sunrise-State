import React from 'react';
import './Style.css';

const healthTechArticles = [
  {
    id: 1,
    title: 'HealthTech Innovations',
    summary: 'Breakthroughs in medical technology and healthcare solutions.',
    author: 'Dr. Kavita Rao',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=HealthTech+News+1',
  },
  {
    id: 2,
    title: 'Digital Health Trends',
    summary: 'How digital tools are transforming patient care and wellness.',
    author: 'Prof. Arjun Mehta',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=HealthTech+News+2',
  },
];

const HealthTech = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">HealthTech</h1>
      <p className="subheading">Latest in medical technology and digital health.</p>
    </header>
    <div className="article-list">
      {healthTechArticles.map((article) => (
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

export default HealthTech;