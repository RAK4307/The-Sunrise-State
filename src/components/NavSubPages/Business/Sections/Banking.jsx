import React from 'react';
import '../Sections/Style.css';

const bankingArticles = [
  {
    id: 1,
    title: 'Digital Banking Revolution in India',
    summary: 'Banks are rapidly adopting digital platforms to enhance customer experience and security.',
    author: 'Ravi Kumar',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Banking+News+1',
  },
  {
    id: 2,
    title: 'New RBI Guidelines for Private Banks',
    summary: 'The Reserve Bank of India has issued new compliance guidelines for private sector banks.',
    author: 'Meena Das',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Banking+News+2',
  },
];

const Banking = () => (
  <div className="category-page-container">
    <header className="author-profile-header">
      <h1 className="main-heading">Banking News</h1>
      <p className="subheading">Latest updates and trends in the banking sector.</p>
    </header>
    <div className="article-list">
      {bankingArticles.map((article) => (
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

export default Banking;