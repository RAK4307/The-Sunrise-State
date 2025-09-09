import React from 'react';
import './Style.css';

const parliamentSessionStories = [
  {
    id: 1,
    title: 'Parliament Session Highlights',
    summary: 'Key debates, bills, and decisions from the latest session.',
    author: 'Meena Das',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Parliament+Session+Story+1',
  },
  {
    id: 2,
    title: 'Reforms and Legislation',
    summary: 'Major reforms and new laws passed in Parliament.',
    author: 'Ajay Kumar',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Parliament+Session+Story+2',
  },
];

const ParliamentSession = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Parliament Session Top Stories</h1>
      <p className="subheading">Debates, bills, and legislative updates from Parliament.</p>
    </header>
    <div className="article-list">
      {parliamentSessionStories.map((story) => (
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

export default ParliamentSession;