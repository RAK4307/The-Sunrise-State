import React from 'react';
import '../TopStories/Style.css';

const indiaStories = [
  {
    id: 1,
    title: 'National Leaders Visit Amaravati',
    summary: 'Top leaders from across India visited Amaravati to discuss regional development.',
    date: 'Oct 29, 2023',
    author: 'Ramesh Babu',
    imageUrl: 'https://via.placeholder.com/400x250?text=India+Story+1',
  },
  {
    id: 2,
    title: 'Amaravati Represented at National Summit',
    summary: 'Amaravati officials presented city plans at a national urban summit.',
    date: 'Oct 28, 2023',
    author: 'Meena Das',
    imageUrl: 'https://via.placeholder.com/400x250?text=India+Story+2',
  },
];

const India2 = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">India Top Stories</h1>
      <p className="subheading">Stories connecting Amaravati to national events and leaders.</p>
    </header>
    <div className="article-list">
      {indiaStories.map((story) => (
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

export default India2;