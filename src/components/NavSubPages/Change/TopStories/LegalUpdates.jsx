import React from 'react';
import '../../Sections/Style.css';

const legalUpdatesStories = [
  {
    id: 1,
    title: 'Legal Updates: New Laws Passed',
    summary: 'Recent legislation brings significant changes to digital privacy and civic rights.',
    author: 'Kavita Chowdary',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Legal+Updates+Story+1',
  },
  {
    id: 2,
    title: 'Court Rulings Impact Policy',
    summary: 'High court decisions are influencing government policy and reforms.',
    author: 'Srinivas Rao',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Legal+Updates+Story+2',
  },
];

const LegalUpdates = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Legal Updates</h1>
      <p className="subheading">Stay informed on the latest legal changes and court rulings.</p>
    </header>
    <div className="article-list">
      {legalUpdatesStories.map((story) => (
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

export default LegalUpdates;