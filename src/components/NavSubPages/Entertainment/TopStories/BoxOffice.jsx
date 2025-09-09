import React from 'react';
import './Style.css';

const boxOfficeStories = [
  {
    id: 1,
    title: 'Blockbusters Dominate Box Office',
    summary: 'Major releases break records and draw crowds to theaters.',
    author: 'Ajay Kumar',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Box+Office+Story+1',
  },
  {
    id: 2,
    title: 'Indie Films Find Success',
    summary: 'Independent movies gain traction and critical acclaim at the box office.',
    author: 'Lakshmi Reddy',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Box+Office+Story+2',
  },
];

const BoxOffice = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Box Office Top Stories</h1>
      <p className="subheading">Latest box office numbers, trends, and movie performance.</p>
    </header>
    <div className="article-list">
      {boxOfficeStories.map((story) => (
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

export default BoxOffice;