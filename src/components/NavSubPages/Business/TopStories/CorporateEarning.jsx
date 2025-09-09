import React from 'react';
import '../Sections/Style.css';

const corporateEarningStories = [
  {
    id: 1,
    title: 'Q2 Earnings Beat Market Expectations',
    summary: 'Major corporations report strong quarterly earnings, surpassing analyst forecasts.',
    author: 'Ajay Kumar',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Corporate+Earning+Story+1',
  },
  {
    id: 2,
    title: 'Tech Giants Lead Profit Growth',
    summary: 'Technology companies drive overall profit growth in the sector.',
    author: 'Sunitha Rao',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Corporate+Earning+Story+2',
  },
];

const CorporateEarning = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Corporate Earnings Top Stories</h1>
      <p className="subheading">Latest financial results and analysis from leading companies.</p>
    </header>
    <div className="article-list">
      {corporateEarningStories.map((story) => (
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

export default CorporateEarning;