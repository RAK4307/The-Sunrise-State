import React from 'react';
import './Style.css';

const politicalAnalysisStories = [
  {
    id: 1,
    title: 'Political Analysis: Election Results',
    summary: 'Detailed analysis of recent election outcomes and trends.',
    author: 'Ajay Kumar',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Political+Analysis+1',
  },
  {
    id: 2,
    title: 'Political Analysis: Policy Impact',
    summary: 'How new policies are shaping the political landscape.',
    author: 'Meena Das',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Political+Analysis+2',
  },
];

const PoliticalAnalysis = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Political Analysis Top Stories</h1>
      <p className="subheading">Analysis and commentary on political developments.</p>
    </header>
    <div className="article-list">
      {politicalAnalysisStories.map((story) => (
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

export default PoliticalAnalysis;