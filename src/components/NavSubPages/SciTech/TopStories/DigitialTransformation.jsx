import React from 'react';
import './Style.css';

const digitalTransformationStories = [
  {
    id: 1,
    title: 'Digital Transformation: Industry Trends',
    summary: 'How digital technologies are reshaping industries and businesses.',
    author: 'Dr. Kavita Rao',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Digital+Transformation+1',
  },
  {
    id: 2,
    title: 'The Future of Work',
    summary: 'Remote work, automation, and the evolving workplace.',
    author: 'Prof. Arjun Mehta',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Digital+Transformation+2',
  },
];

const DigitialTransformation = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Digital Transformation Top Stories</h1>
      <p className="subheading">Insights on technology-driven change in business and society.</p>
    </header>
    <div className="article-list">
      {digitalTransformationStories.map((story) => (
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

export default DigitialTransformation;