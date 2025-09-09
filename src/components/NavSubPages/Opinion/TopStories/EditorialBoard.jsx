import React from 'react';
import './Style.css';

const editorialBoardStories = [
  {
    id: 1,
    title: 'Editorial Board: Policy Perspectives',
    summary: 'Editorial board members discuss policy challenges and solutions.',
    author: 'Meena Das',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Editorial+Board+1',
  },
  {
    id: 2,
    title: 'Editorial Board: Social Issues',
    summary: 'Views on pressing social issues from the editorial team.',
    author: 'Lakshmi Reddy',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Editorial+Board+2',
  },
];

const EditorialBoard = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Editorial Board Top Stories</h1>
      <p className="subheading">Editorial perspectives on policy and society.</p>
    </header>
    <div className="article-list">
      {editorialBoardStories.map((story) => (
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

export default EditorialBoard;