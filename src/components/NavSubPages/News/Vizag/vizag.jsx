import React from 'react';
import { Link } from 'react-router-dom';

// Placeholder data for Vizag articles
const vizagArticles = [
  {
    id: 1,
    title: 'Vizag Port Sees Record Cargo Handling in Q3',
    summary: 'The Visakhapatnam Port Trust has reported its highest-ever cargo throughput for the third quarter.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Vizag+News+1',
    author: 'Anand Kumar',
    date: 'Oct 26, 2023',
  },
  {
    id: 2,
    title: 'New IT Park Inaugurated on Beach Road',
    summary: 'A state-of-the-art IT park was inaugurated today, expected to create thousands of jobs in the tech sector.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Vizag+News+2',
    author: 'Sunita Patel',
    date: 'Oct 25, 2023',
  },
  {
    id: 3,
    title: 'RK Beach Beautification Project Nears Completion',
    summary: 'The final phase of the Ramakrishna Beach beautification project is underway, with new promenades and lighting.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Vizag+News+3',
    author: 'Vijay Varma',
    date: 'Oct 24, 2023',
  },
  {
    id: 4,
    title: 'Vizag Metro Rail Project Gets Green Signal',
    summary: 'The central government has approved the much-awaited metro rail project for Visakhapatnam.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Vizag+News+4',
    author: 'Divya Murthy',
    date: 'Oct 23, 2023',
  },
];

const Vizag = () => {
  return (
    <div className="category-page-container">
      <nav className="breadcrumb">
        <a href="/">Home</a> / <a href="/news">News</a> / <span>Vizag</span>
      </nav>

      <header className="category-header">
        <h1 className="main-heading">Vizag News</h1>
        <p className="subheading">The latest on events, industry, and life in Visakhapatnam.</p>
      </header>

      <div className="article-list">
        {vizagArticles.map((article) => (
          <Link to={`/news/vizag/${article.id}`} key={article.id} className="article-card-link">
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

export default Vizag;
