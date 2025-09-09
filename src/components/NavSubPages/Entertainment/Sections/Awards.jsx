import React from 'react';
import './Style.css';

const awardsArticles = [
  {
    id: 1,
    title: 'Oscars 2025: Winners and Highlights',
    summary: 'A look at the biggest moments and winners from this year’s Academy Awards.',
    author: 'Meena Das',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Awards+News+1',
  },
  {
    id: 2,
    title: 'Music Awards Celebrate New Talent',
    summary: 'Emerging artists take center stage at the annual music awards.',
    author: 'Lakshmi Reddy',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Awards+News+2',
  },
];

const Awards = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Awards News</h1>
      <p className="subheading">Coverage of major entertainment awards and ceremonies.</p>
    </header>
    <div className="article-list">
      {awardsArticles.map((article) => (
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

export default Awards;