import React from 'react';
import './Style.css';

const readerResponsesStories = [
  {
    id: 1,
    title: 'Reader Responses: Letters',
    summary: 'Thoughtful feedback and responses from our readers.',
    author: 'Meena Das',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Reader+Responses+1',
  },
  {
    id: 2,
    title: 'Reader Responses: Community Voices',
    summary: 'Community members share their views on current topics.',
    author: 'Ajay Kumar',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Reader+Responses+2',
  },
];

const ReaderResponses = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Reader Responses Top Stories</h1>
      <p className="subheading">Feedback and opinions from our readers and community.</p>
    </header>
    <div className="article-list">
      {readerResponsesStories.map((story) => (
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