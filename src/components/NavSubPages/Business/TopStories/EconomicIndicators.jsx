import React from 'react';
import '../Sections/Style.css';

const economicIndicatorStories = [
  {
    id: 1,
    title: 'Inflation Rate Hits 3-Year Low',
    summary: 'India’s inflation rate drops to its lowest point in three years, boosting consumer confidence.',
    author: 'Priya Nair',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Economic+Indicator+Story+1',
  },
  {
    id: 2,
    title: 'Unemployment Figures Improve',
    summary: 'Recent data shows a positive trend in employment across major sectors.',
    author: 'Anil Reddy',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Economic+Indicator+Story+2',
  },
];

const EconomicIndicators = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Economic Indicators Top Stories</h1>
      <p className="subheading">Key metrics and trends shaping the business landscape.</p>
    </header>
    <div className="article-list">
      {economicIndicatorStories.map((story) => (
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

export default EconomicIndicators;