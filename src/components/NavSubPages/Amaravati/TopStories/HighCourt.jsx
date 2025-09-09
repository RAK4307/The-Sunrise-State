import React from 'react';
import '../TopStories/Style.css';

const highCourtStories = [
  {
    id: 1,
    title: 'High Court Orders Review of Amaravati Land Allocation',
    summary: 'The Andhra Pradesh High Court has ordered a comprehensive review of recent land allocations in Amaravati.',
    date: 'Oct 27, 2023',
    author: 'Srinivas Rao',
    imageUrl: 'https://via.placeholder.com/400x250?text=High+Court+Story+1',
  },
  {
    id: 2,
    title: 'Landmark Judgment on Civic Rights',
    summary: 'A landmark judgment was delivered today, strengthening civic rights for Amaravati residents.',
    date: 'Oct 25, 2023',
    author: 'Lakshmi Reddy',
    imageUrl: 'https://via.placeholder.com/400x250?text=High+Court+Story+2',
  },
];

const HighCourt = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">High Court Top Stories</h1>
      <p className="subheading">Latest legal news and judgments impacting Amaravati.</p>
    </header>
    <div className="article-list">
      {highCourtStories.map((story) => (
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

export default HighCourt;