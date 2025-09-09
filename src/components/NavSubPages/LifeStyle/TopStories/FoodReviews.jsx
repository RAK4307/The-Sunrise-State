import React from 'react';
import './Style.css';

const foodReviewsStories = [
  {
    id: 1,
    title: 'Food Reviews: Trending Restaurants',
    summary: 'Discover the best new restaurants and food experiences.',
    author: 'Meena Das',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Food+Reviews+Story+1',
  },
  {
    id: 2,
    title: 'Global Cuisine Tasting',
    summary: 'Reviews of international dishes and culinary adventures.',
    author: 'Ajay Kumar',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Food+Reviews+Story+2',
  },
];

const FoodReviews = () => (
  <div className="category-page-container">
    <header className="author-profile-header">
      <h1 className="main-heading">Food Reviews Top Stories</h1>
      <p className="subheading">Restaurant reviews, cuisine trends, and food guides.</p>
    </header>
    <div className="article-list">
      {foodReviewsStories.map((story) => (
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

export default FoodReviews;