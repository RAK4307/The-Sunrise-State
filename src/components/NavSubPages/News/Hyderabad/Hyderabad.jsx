import React from 'react';
import { Link } from 'react-router-dom';

// Placeholder data for Hyderabad articles
const hyderabadArticles = [
  {
    id: 1,
    title: 'Outer Ring Road Gets New Solar-Powered Lighting',
    summary: 'The entire stretch of the Outer Ring Road in Hyderabad is now equipped with energy-efficient solar-powered LED lights.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Hyderabad+News+1',
    author: 'Mohammed Ali',
    date: 'Oct 26, 2023',
  },
  {
    id: 2,
    title: 'Pharma City Attracts Major International Investment',
    summary: 'Hyderabad Pharma City has secured a multi-billion dollar investment from a global pharmaceutical giant.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Hyderabad+News+2',
    author: 'Deepika Singh',
    date: 'Oct 25, 2023',
  },
  {
    id: 3,
    title: 'Historic Charminar Precinct to be Pedestrian-Only Zone',
    summary: 'The Greater Hyderabad Municipal Corporation has announced plans to make the area around Charminar a vehicle-free zone.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Hyderabad+News+3',
    author: 'Arjun Reddy',
    date: 'Oct 24, 2023',
  },
  {
    id: 4,
    title: 'Hyderabad Metro Expands with New Line to Airport',
    summary: 'Construction has begun on a new metro line that will connect the city center to Rajiv Gandhi International Airport.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Hyderabad+News+4',
    author: 'Sneha Verma',
    date: 'Oct 23, 2023',
  },
];

const Hyderabad = () => {
  return (
    <div className="category-page-container">
      <nav className="breadcrumb">
        <a href="/">Home</a> / <a href="/news">News</a> / <span>Hyderabad</span>
      </nav>

      <header className="category-header">
        <h1 className="main-heading">Hyderabad News</h1>
        <p className="subheading">The latest on infrastructure, technology, and life in Hyderabad.</p>
      </header>

      <div className="article-list">
        {hyderabadArticles.map((article) => (
          <Link to={`/news/hyderabad/${article.id}`} key={article.id} className="article-card-link">
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

export default Hyderabad;

