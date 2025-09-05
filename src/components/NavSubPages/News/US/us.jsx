import React from 'react';
import { Link } from 'react-router-dom';

// Placeholder data for US articles
const usArticles = [
  {
    id: 1,
    title: 'Federal Reserve Announces Interest Rate Decision',
    summary: 'The Federal Reserve has decided to hold interest rates steady, citing a moderating but still strong economy.',
    imageUrl: 'https://via.placeholder.com/400x250?text=US+News+1',
    author: 'Michael Johnson',
    date: 'Oct 26, 2023',
  },
  {
    id: 2,
    title: 'Tech Giants Face New Antitrust Scrutiny from Congress',
    summary: 'A congressional committee has launched a new investigation into the market practices of major technology companies.',
    imageUrl: 'https://via.placeholder.com/400x250?text=US+News+2',
    author: 'Sarah Lee',
    date: 'Oct 25, 2023',
  },
  {
    id: 3,
    title: 'NASA\'s Artemis Mission Prepares for Next Lunar Launch',
    summary: 'NASA is in the final stages of preparation for the next launch of its Artemis program, aiming to return humans to the moon.',
    imageUrl: 'https://via.placeholder.com/400x250?text=US+News+3',
    author: 'David Chen',
    date: 'Oct 24, 2023',
  },
  {
    id: 4,
    title: 'Hollywood Writers Guild Reaches Tentative Agreement to End Strike',
    summary: 'After months of negotiations, the WGA has reached a tentative agreement with studios, potentially ending the long-running strike.',
    imageUrl: 'https://via.placeholder.com/400x250?text=US+News+4',
    author: 'Jessica Rodriguez',
    date: 'Oct 23, 2023',
  },
];

const Us = () => {
  return (
    <div className="category-page-container">
      <nav className="breadcrumb">
        <a href="/">Home</a> / <a href="/news">News</a> / <span>US</span>
      </nav>

      <header className="category-header">
        <h1 className="main-heading">US News</h1>
        <p className="subheading">The latest on politics, technology, and culture in the United States.</p>
      </header>

      <div className="article-list">
        {usArticles.map((article) => (
          <Link to={`/news/us/${article.id}`} key={article.id} className="article-card-link">
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

export default Us;

