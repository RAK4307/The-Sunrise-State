import React from 'react';
import './Style.css';

const movieReviewsStories = [
  {
    id: 1,
    title: 'Movie Reviews: Critics’ Picks',
    summary: 'Our critics review the latest releases and share their top picks.',
    author: 'Meena Das',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Movie+Reviews+Story+1',
  },
  {
    id: 2,
    title: 'Audience Favorites',
    summary: 'See which movies are winning over audiences this week.',
    author: 'Lakshmi Reddy',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Movie+Reviews+Story+2',
  },
];

const MovieReviews = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Movie Reviews</h1>
      <p className="subheading">Critics’ opinions and audience favorites from the latest releases.</p>
    </header>
    <div className="article-list">
      {movieReviewsStories.map((story) => (
        <div key={story.id} className="article-card">
          <img src={story.imageUrl} alt={story.title} className="article-image" />
          <div className="article-content">
            <h2 className="article-title">{story.title}</h2>
            <p className="article-summary">{story.summary}</p>
            <div className="article-meta">
              <span className="article-author">{story.author}</span> - <span className="article-date">{story.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default MovieReviews;