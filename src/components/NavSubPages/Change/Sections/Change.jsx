import React from 'react';
import '../Sections/Style.css';

const changeArticles = [
  {
    id: 1,
    title: 'Grassroots Movements Drive Social Change',
    summary: 'Local communities are leading impactful initiatives for social transformation.',
    author: 'Priya Nair',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Change+News+1',
  },
  {
    id: 2,
    title: 'Innovation in Education Reform',
    summary: 'New teaching methods and technologies are reshaping the education landscape.',
    author: 'Ajay Kumar',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Change+News+2',
  },
];

const Change = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Change News</h1>
      <p className="subheading">Stories of transformation, innovation, and progress.</p>
    </header>
    <div className="article-list">
      {changeArticles.map((article) => (
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

export default Change;