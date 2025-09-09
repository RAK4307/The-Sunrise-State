import React from 'react';
import './Style.css';

const educationArticles = [
  {
    id: 1,
    title: 'Education Reforms in India',
    summary: 'Recent changes and innovations in the Indian education system.',
    author: 'Meena Das',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Education+News+1',
  },
  {
    id: 2,
    title: 'Technology in Classrooms',
    summary: 'How digital tools are transforming learning experiences.',
    author: 'Ajay Kumar',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Education+News+2',
  },
];

const Eduation = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Education News</h1>
      <p className="subheading">Updates and insights on education in India.</p>
    </header>
    <div className="article-list">
      {educationArticles.map((article) => (
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

export default Eduation;