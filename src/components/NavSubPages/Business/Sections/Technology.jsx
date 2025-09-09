import React from 'react';
import '../Sections/Style.css';

const technologyArticles = [
  {
    id: 1,
    title: 'AI Transforming Business Operations',
    summary: 'Artificial Intelligence is reshaping how companies operate and compete.',
    author: 'Ajay Kumar',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Technology+News+1',
  },
  {
    id: 2,
    title: 'Blockchain Adoption in Finance',
    summary: 'Financial institutions are exploring blockchain for secure transactions.',
    author: 'Sunitha Rao',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Technology+News+2',
  },
];

const Technology = () => (
  <div className="category-page-container">
    <header className="author-profile-header">
      <h1 className="main-heading">Technology News</h1>
      <p className="subheading">Latest trends and innovations in business technology.</p>
    </header>
    <div className="article-list">
      {technologyArticles.map((article) => (
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

export default Technology;