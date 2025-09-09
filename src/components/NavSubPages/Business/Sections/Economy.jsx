import React from 'react';
import '../Sections/Style.css';

const economyArticles = [
  {
    id: 1,
    title: 'India’s GDP Growth Forecast Revised',
    summary: 'Economists predict a higher GDP growth rate for the upcoming fiscal year.',
    author: 'Sunitha Rao',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Economy+News+1',
  },
  {
    id: 2,
    title: 'Inflation Trends and Market Impact',
    summary: 'A look at current inflation rates and their effect on the Indian economy.',
    author: 'Ajay Kumar',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Economy+News+2',
  },
];

const Economy = () => (
  <div className="category-page-container">
    <header className="author-profile-header">
      <h1 className="main-heading">Economy News</h1>
      <p className="subheading">Insights and analysis on the Indian and global economy.</p>
    </header>
    <div className="article-list">
      {economyArticles.map((article) => (
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

export default Economy;