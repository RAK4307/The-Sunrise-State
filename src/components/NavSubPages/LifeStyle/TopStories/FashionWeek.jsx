import React from 'react';
import './Style.css';

const fashionWeekStories = [
  {
    id: 1,
    title: 'Fashion Week Highlights',
    summary: 'Latest runway trends and designer showcases from global fashion weeks.',
    author: 'Priya Nair',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Fashion+Week+Story+1',
  },
  {
    id: 2,
    title: 'Sustainable Fashion on the Ramp',
    summary: 'Eco-friendly designs and sustainability in fashion events.',
    author: 'Lakshmi Reddy',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Fashion+Week+Story+2',
  },
];

const FashionWeek = () => (
  <div className="category-page-container">
    <header className="author-profile-header">
      <h1 className="main-heading">Fashion Week Top Stories</h1>
      <p className="subheading">Runway trends, designer news, and fashion inspiration.</p>
    </header>
    <div className="article-list">
      {fashionWeekStories.map((story) => (
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

export default FashionWeek;