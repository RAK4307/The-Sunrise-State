import React from 'react';
import '../../Sections/Style.css';

const everythingChangesStories = [
  {
    id: 1,
    title: 'Major Shifts in Social Policy',
    summary: 'Sweeping changes in social policy are impacting communities nationwide.',
    author: 'Anil Reddy',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Everything+Changes+Story+1',
  },
  {
    id: 2,
    title: 'Innovation Drives Transformation',
    summary: 'New technologies and ideas are reshaping industries and society.',
    author: 'Priya Nair',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Everything+Changes+Story+2',
  },
];

const EverthingChanges = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Everything Changes Top Stories</h1>
      <p className="subheading">Explore the latest stories on transformation and progress.</p>
    </header>
    <div className="article-list">
      {everythingChangesStories.map((story) => (
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

export default EverthingChanges;