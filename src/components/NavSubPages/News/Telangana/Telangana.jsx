import React from 'react';
import { Link } from 'react-router-dom';

// Placeholder data for Telangana articles
const telanganaArticles = [
  {
    id: 1,
    title: 'Hyderabad\'s IT Sector Continues to Grow Rapidly',
    summary: 'The IT and ITeS sectors in Hyderabad have recorded significant growth, attracting major global investments.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Telangana+News+1',
    author: 'Rakesh Gupta',
    date: 'Oct 26, 2023',
  },
  {
    id: 2,
    title: 'Kaleshwaram Lift Irrigation Project Expands Reach',
    summary: 'The state government has announced the expansion of the Kaleshwaram project to provide water to more arid regions.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Telangana+News+2',
    author: 'Priya Deshmukh',
    date: 'Oct 25, 2023',
  },
  {
    id: 3,
    title: 'T-Hub 2.0 Fosters a New Wave of Startups',
    summary: 'The new T-Hub facility is accelerating the growth of startups in deep tech, AI, and life sciences.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Telangana+News+3',
    author: 'Sandeep Reddy',
    date: 'Oct 24, 2023',
  },
  {
    id: 4,
    title: 'Bathukamma Festival Celebrated with Fervor Across the State',
    summary: 'The floral festival of Bathukamma was celebrated with traditional songs and dances throughout Telangana.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Telangana+News+4',
    author: 'Anitha Rao',
    date: 'Oct 23, 2023',
  },
];

const Telangana = () => {
  return (
    <div className="category-page-container">
      <nav className="breadcrumb">
        <a href="/">Home</a> / <a href="/news">News</a> / <span>Telangana</span>
      </nav>

      <header className="category-header">
        <h1 className="main-heading">Telangana News</h1>
        <p className="subheading">The latest on technology, development, and culture in Telangana.</p>
      </header>

      <div className="article-list">
        {telanganaArticles.map((article) => (
          <Link to={`/news/telangana/${article.id}`} key={article.id} className="article-card-link">
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

export default Telangana;

