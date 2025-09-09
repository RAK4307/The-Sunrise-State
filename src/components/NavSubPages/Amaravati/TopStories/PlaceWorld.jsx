import React from 'react';
import '../TopStories/Style.css';

const placeWorldStories = [
  {
    id: 1,
    title: 'Amaravati Featured in Global Urban Report',
    summary: 'Amaravati’s development model is highlighted in a new global urbanization report.',
    date: 'Oct 31, 2023',
    author: 'Priya Nair',
    imageUrl: 'https://via.placeholder.com/400x250?text=PlaceWorld+Story+1',
  },
  {
    id: 2,
    title: 'International Delegates Visit Amaravati',
    summary: 'Delegates from several countries visited Amaravati to study its infrastructure projects.',
    date: 'Oct 30, 2023',
    author: 'Ajay Kumar',
    imageUrl: 'https://via.placeholder.com/400x250?text=PlaceWorld+Story+2',
  }, 
];

const PlaceWorld = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Place in the World</h1>
      <p className="subheading">How Amaravati connects to global cities and trends.</p>
    </header>
    <div className="article-list">
      {placeWorldStories.map((story) => (
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

export default PlaceWorld;