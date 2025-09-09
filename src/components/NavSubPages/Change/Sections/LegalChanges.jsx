import React from 'react';
import '../Sections/Style.css';

const legalChangesArticles = [
  {
    id: 1,
    title: 'Legal Reforms Strengthen Civic Rights',
    summary: 'Recent legal changes aim to protect and empower citizens.',
    author: 'Kavita Chowdary',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Legal+Changes+News+1',
  },
  {
    id: 2,
    title: 'New Laws for Digital Privacy',
    summary: 'The government passes new legislation to safeguard digital privacy.',
    author: 'Srinivas Rao',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Legal+Changes+News+2',
  },
];

const LegalChanges = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Legal Changes</h1>
      <p className="subheading">Key legal reforms and updates affecting society and business.</p>
    </header>
    <div className="article-list">
      {legalChangesArticles.map((article) => (
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

export default LegalChanges;