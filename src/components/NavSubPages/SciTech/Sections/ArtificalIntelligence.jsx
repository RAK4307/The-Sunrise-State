import React from 'react';
import './Style.css';

const aiArticles = [
  {
    id: 1,
    title: 'AI Breakthroughs in 2025',
    summary: 'Latest advancements in artificial intelligence and machine learning.',
    author: 'Dr. Kavita Rao',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=AI+News+1',
  },
  {
    id: 2,
    title: 'Ethics of Artificial Intelligence',
    summary: 'Exploring the ethical challenges and solutions in AI development.',
    author: 'Prof. Arjun Mehta',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=AI+News+2',
  },
];

const ArtificalIntelligence = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Artificial Intelligence</h1>
      <p className="subheading">News, breakthroughs, and ethical debates in AI.</p>
    </header>
    <div className="article-list">
      {aiArticles.map((article) => (
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

export default ArtificalIntelligence;