import React from 'react';
import '../Sections/Style.css';

const economicReformsArticles = [
  {
    id: 1,
    title: 'Major Economic Reforms Announced',
    summary: 'The government unveils new policies to stimulate growth and investment.',
    author: 'Ravi Kumar',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Economic+Reforms+News+1',
  },
  {
    id: 2,
    title: 'Tax Reforms Benefit Small Businesses',
    summary: 'Recent tax changes provide relief and incentives for small enterprises.',
    author: 'Meena Das',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Economic+Reforms+News+2',
  },
];

const EconomicReforms = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Economic Reforms</h1>
      <p className="subheading">Latest updates on economic policy and reform initiatives.</p>
    </header>
    <div className="article-list">
      {economicReformsArticles.map((article) => (
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

export default EconomicReforms;