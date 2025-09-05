import React from 'react';
import { Link } from 'react-router-dom';

// In a real-world application, this data would likely come from a CMS or an API.
const entertainmentArticles = [
  {
    id: 1,
    title: 'Blockbuster Sci-Fi Epic "Galaxy\'s Edge" Premieres to Rave Reviews',
    summary: 'The highly anticipated film has been praised for its stunning visuals and compelling storyline, setting new box office records.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Entertainment+1',
    author: 'Leo Vance',
    date: 'Oct 26, 2023',
  },
  {
    id: 2,
    title: 'Pop Star\'s Surprise Album Drops, Dominates Global Charts',
    summary: 'The unannounced album release has taken the music world by storm, with fans praising its experimental sound.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Entertainment+2',
    author: 'Chloe Rivera',
    date: 'Oct 25, 2023',
  },
  {
    id: 3,
    title: 'New Streaming Series Explores a Dystopian Future',
    summary: 'Critics are calling the new series a "must-watch," thanks to its thought-provoking plot and powerful performances.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Entertainment+3',
    author: 'Sam Jones',
    date: 'Oct 24, 2023',
  },
  {
    id: 4,
    title: 'Celebrity-Hosted Charity Gala Raises Millions for Children\'s Hospitals',
    summary: 'The star-studded event was a massive success, with proceeds going to support healthcare for children in need.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Entertainment+4',
    author: 'Maria Garcia',
    date: 'Oct 23, 2023',
  },
];

const Entertainment = () => {
  return (
    <div className="category-page-container">
      <nav aria-label="breadcrumb" className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/news">News</Link> / <span>Entertainment</span>
      </nav>

      <header className="category-header">
        <h1 className="main-heading">Entertainment News</h1>
        <p className="subheading">The latest on movies, music, TV shows, and celebrity events.</p>
      </header>

      <main className="article-list">
        {entertainmentArticles.map((article) => (
          <Link to={`/news/entertainment/${article.id}`} key={article.id} className="article-card-link">
            <article className="article-card">
              <img src={article.imageUrl} alt={article.title} className="article-image" />
              <div className="article-content">
                <h2 className="article-title">{article.title}</h2>
                <p className="article-summary">{article.summary}</p>
                <div className="article-meta">
                  <span className="article-author">{article.author}</span> - <span className="article-date">{article.date}</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </main>
    </div>
  );
};

export default Entertainment;
