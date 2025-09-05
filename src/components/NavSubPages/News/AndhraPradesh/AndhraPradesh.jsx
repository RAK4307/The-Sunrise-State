import React from 'react';
import { Link } from 'react-router-dom';

// Placeholder data for Andhra Pradesh articles
const andhraPradeshArticles = [
  {
    id: 1,
    title: 'State Budget Focuses on Agriculture and Welfare Schemes',
    summary: 'The Andhra Pradesh state government has presented its annual budget with a strong emphasis on farmer welfare and social security.',
    imageUrl: 'https://via.placeholder.com/400x250?text=AP+News+1',
    author: 'Krishna Prasad',
    date: 'Oct 26, 2023',
  },
  {
    id: 2,
    title: 'New Industrial Corridor to Connect Major Cities',
    summary: 'A new industrial corridor has been announced, aiming to boost manufacturing and logistics between key urban centers.',
    imageUrl: 'https://via.placeholder.com/400x250?text=AP+News+2',
    author: 'Padma Rao',
    date: 'Oct 25, 2023',
  },
  {
    id: 3,
    title: 'Tirupati Temple Sees Influx of Devotees for Brahmotsavam',
    summary: 'The annual Brahmotsavam festival at Tirumala has attracted millions of devotees from across the country.',
    imageUrl: 'https://via.placeholder.com/400x250?text=AP+News+3',
    author: 'Ramesh Babu',
    date: 'Oct 24, 2023',
  },
  {
    id: 4,
    title: 'Polavaram Project Reaches Critical Construction Phase',
    summary: 'Engineers report significant progress on the Polavaram irrigation project, a lifeline for the state\'s agriculture.',
    imageUrl: 'https://via.placeholder.com/400x250?text=AP+News+4',
    author: 'Swathi Reddy',
    date: 'Oct 23, 2023',
  },
];

const AndhraPradesh = () => {
  return (
    <div className="category-page-container">
      <nav className="breadcrumb">
        <a href="/">Home</a> / <a href="/news">News</a> / <span>Andhra Pradesh</span>
      </nav>

      <header className="category-header">
        <h1 className="main-heading">Andhra Pradesh News</h1>
        <p className="subheading">The latest on politics, development, and culture in Andhra Pradesh.</p>
      </header>

      <div className="article-list">
        {andhraPradeshArticles.map((article) => (
          <Link to={`/news/andhra-pradesh/${article.id}`} key={article.id} className="article-card-link">
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

export default AndhraPradesh;

