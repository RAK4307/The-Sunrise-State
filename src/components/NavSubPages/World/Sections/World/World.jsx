import React from 'react';
import './World.css';

// Placeholder data for world articles
const worldArticles = [
  {
    id: 1,
    title: 'Global Summit Addresses Climate Crisis',
    summary: 'Leaders from around the world convene to discuss urgent actions needed to combat climate change.',
    imageUrl: 'https://via.placeholder.com/400x250?text=World+News+1',
    author: 'Jane Doe',
    date: 'Oct 26, 2023',
  },
  {
    id: 2,
    title: 'New Trade Agreements Reshape International Markets',
    summary: 'A series of new trade deals are set to alter the landscape of global commerce.',
    imageUrl: 'https://via.placeholder.com/400x250?text=World+News+2',
    author: 'John Smith',
    date: 'Oct 25, 2023',
  },
  {
    id: 3,
    title: 'Cultural Exchange Programs Foster Global Understanding',
    summary: 'International cultural exchange programs are proving successful in bridging divides and promoting peace.',
    imageUrl: 'https://via.placeholder.com/400x250?text=World+News+3',
    author: 'Emily White',
    date: 'Oct 24, 2023',
  },
  {
    id: 4,
    title: 'Breakthrough in Malaria Vaccine Development',
    summary: 'A new vaccine shows promising results in late-stage trials, offering hope to millions.',
    imageUrl: 'https://via.placeholder.com/400x250?text=World+News+4',
    author: 'Dr. Alan Grant',
    date: 'Oct 23, 2023',
  },
];

const World = () => {
  return (
    <div className="category-page-container">
      <nav className="breadcrumb">
        <a href="/">Home</a> / <a href="/news">News</a> / <span>World</span>
      </nav>

      <header className="category-header">
        <h1 className="main-heading">World News</h1>
        <p className="subheading">The latest on global events, politics, and culture.</p>
      </header>

      <div className="article-list">
        {worldArticles.map((article) => (
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
};

export default World;
