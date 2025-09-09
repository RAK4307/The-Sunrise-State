import React from 'react';
import '../Sections/Style.css';

const governmentSchemesArticles = [
  {
    id: 1,
    title: 'New Welfare Schemes Launched',
    summary: 'The government introduces new welfare programs for rural and urban populations.',
    author: 'Sunitha Rao',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Government+Schemes+News+1',
  },
  {
    id: 2,
    title: 'Healthcare Scheme Expands Coverage',
    summary: 'Expanded healthcare benefits reach more citizens under the new scheme.',
    author: 'Ajay Kumar',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Government+Schemes+News+2',
  },
];

const GovernmentSchemes = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Government Schemes</h1>
      <p className="subheading">Updates on welfare, healthcare, and development schemes.</p>
    </header>
    <div className="article-list">
      {governmentSchemesArticles.map((article) => (
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

export default GovernmentSchemes;