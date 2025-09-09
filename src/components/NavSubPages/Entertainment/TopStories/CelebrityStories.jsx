import React from 'react';
import './Style.css';

const celebrityStories = [
  {
    id: 1,
    title: 'Celebrity Stories: Life Behind the Scenes',
    summary: 'Exclusive interviews and insights into the lives of top celebrities.',
    author: 'Priya Nair',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Celebrity+Stories+1',
  },
  {
    id: 2,
    title: 'Rising Stars to Watch',
    summary: 'Meet the new faces making headlines in entertainment.',
    author: 'Ajay Kumar',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Celebrity+Stories+2',
  },
];

const CelebrityStories = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Celebrity Stories</h1>
      <p className="subheading">Get the latest on celebrity lives, interviews, and features.</p>
    </header>
    <div className="article-list">
      {celebrityStories.map((story) => (
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

export default CelebrityStories;