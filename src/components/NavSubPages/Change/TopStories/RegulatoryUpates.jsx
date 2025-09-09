import React from 'react';
import '../../Sections/Style.css';

const regularUpdatesStories = [
  {
    id: 1,
    title: 'Regular Updates: Policy and Reform',
    summary: 'Ongoing updates on policy changes and reform initiatives.',
    author: 'Meena Das',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Regular+Updates+Story+1',
  },
  {
    id: 2,
    title: 'Weekly Roundup: Social Change',
    summary: 'A summary of the week’s most impactful stories on change and progress.',
    author: 'Priya Nair',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Regular+Updates+Story+2',
  },
];

const RegularUpdates = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Regular Updates</h1>
      <p className="subheading">Stay up-to-date with ongoing reforms and social change.</p>
    </header>
    <div className="article-list">
      {regularUpdatesStories.map((story) => (
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

export default RegularUpdates;