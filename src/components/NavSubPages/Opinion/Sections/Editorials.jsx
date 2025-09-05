import React from 'react';
import { Link } from 'react-router-dom';

// Placeholder data for Editorials articles
const editorialsArticles = [
  {
    id: 1,
    title: 'On the Need for Digital Literacy in the Modern Age',
    summary: 'Our editorial board discusses why comprehensive digital literacy education is no longer a luxury but a necessity for all age groups.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Editorial+1',
    author: 'The Sunrise State Editorial Board',
    date: 'Oct 26, 2023',
  },
  {
    id: 2,
    title: 'Rethinking Public Transportation for a Greener Future',
    summary: 'Investing in robust, accessible, and efficient public transport is a critical step towards reducing our carbon footprint and creating more livable cities.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Editorial+2',
    author: 'The Sunrise State Editorial Board',
    date: 'Oct 25, 2023',
  },
];

const Editorials = () => {
  return (
    <div className="category-page-container">
      <nav className="breadcrumb">
        <a href="/">Home</a> / <span>Opinion</span> / <span>Editorials</span>
      </nav>

      <header className="category-header">
        <h1 className="main-heading">Editorials</h1>
        <p className="subheading">The official stance of The Sunrise State on pressing issues.</p>
      </header>

      <div className="article-list">
        {editorialsArticles.map((article) => (
          <Link to={`/opinion/editorials/${article.id}`} key={article.id} className="article-card-link">
            <div className="article-card">
              <img src={article.imageUrl} alt={article.title} className="article-image" />
              <div className="article-content">
                <h2 className="article-title">{article.title}</h2>
                <p className="article-summary">{article.summary}</p>
                <div className="article-meta">
                  <span className="article-author">{article.author}</span> - <span className="article-date">{article.date}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Editorials;
