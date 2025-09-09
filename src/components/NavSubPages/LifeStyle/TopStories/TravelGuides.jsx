import React from 'react';
import './Style.css';

const travelGuidesStories = [
  {
    id: 1,
    title: 'Travel Guides: Top Destinations',
    summary: 'Explore must-visit places and travel tips for 2025.',
    author: 'Meena Das',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Travel+Guides+Story+1',
  },
  {
    id: 2,
    title: 'Sustainable Travel Experiences',
    summary: 'How to travel responsibly and enjoy eco-friendly adventures.',
    author: 'Ajay Kumar',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Travel+Guides+Story+2',
  },
];

const TravelGuides = () => (
  <div className="category-page-container">
    <header className="author-profile-header">
      <h1 className="main-heading">Travel Guides Top Stories</h1>
      <p className="subheading">Destinations, tips, and guides for every traveler.</p>
    </header>
    <div className="article-list">
      {travelGuidesStories.map((story) => (
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

export default TravelGuides;