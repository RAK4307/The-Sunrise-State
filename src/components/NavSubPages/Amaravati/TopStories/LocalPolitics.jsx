import React from 'react';
import '../TopStories/Style.css';

const localPoliticsStories = [
  {
    id: 1,
    title: 'Local Elections: Key Candidates Announced',
    summary: 'Political parties have announced their candidates for the upcoming Amaravati local elections.',
    date: 'Oct 30, 2023',
    author: 'Suma Rao',
    imageUrl: 'https://via.placeholder.com/400x250?text=Politics+Story+1',
  },
  {
    id: 2,
    title: 'Debate on City Governance Intensifies',
    summary: 'A heated debate on governance and development took place at the city council.',
    date: 'Oct 29, 2023',
    author: 'Anil Reddy',
    imageUrl: 'https://via.placeholder.com/400x250?text=Politics+Story+2',
  },
];

const LocalPolitics = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Local Politics</h1>
      <p className="subheading">Political news and updates from Amaravati.</p>
    </header>
    <div className="article-list">
      {localPoliticsStories.map((story) => (
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

export default LocalPolitics;