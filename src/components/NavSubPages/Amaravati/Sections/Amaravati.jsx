import React from 'react';
import { Link } from 'react-router-dom';

// Placeholder data for Amaravati articles
const amaravatiArticles = [
  {
    id: 1,
    title: 'New Government Complex Construction Begins in Amaravati',
    summary: 'The foundation stone for the new administrative complex was laid today, marking a major milestone for the city.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Amaravati+News+1',
    author: 'Srinivas Rao',
    date: 'Oct 26, 2023',
  },
  {
    id: 2,
    title: 'Amaravati to Host International Tech Summit',
    summary: 'The city is set to welcome tech leaders from across the globe for a summit focused on AI and blockchain technology.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Amaravati+News+2',
    author: 'Lakshmi Reddy',
    date: 'Oct 25, 2023',
  },
  {
    id: 3,
    title: 'Green City Initiative: Over a Million Saplings Planted',
    summary: 'As part of the green city initiative, volunteers and officials have planted over a million trees across Amaravati.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Amaravati+News+3',
    author: 'Prakash Naidu',
    date: 'Oct 24, 2023',
  },
  {
    id: 4,
    title: 'Cultural Festival Celebrates Local Heritage',
    summary: 'The annual Amaravati cultural festival saw record attendance, with performances showcasing the rich history of the region.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Amaravati+News+4',
    author: 'Kavita Chowdary',
    date: 'Oct 23, 2023',
  },
];

const Amaravati = () => {
  return (
    <div className="category-page-container">
      <nav className="breadcrumb">
        <a href="/">Home</a> / <a href="/news">News</a> / <span>Amaravati</span>
      </nav>

      <header className="category-header">
        <h1 className="main-heading">Amaravati News</h1>
        <p className="subheading">The latest on events, development, and culture from Amaravati.</p>
      </header>

      <div className="article-list">
        {amaravatiArticles.map((article) => (
          <Link to={`/news/amaravati/${article.id}`} key={article.id} className="article-card-link">
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

export default Amaravati;
