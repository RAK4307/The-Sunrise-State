import React from 'react';
import '../Sections/Style.css';

const startupFundingStories = [
  {
    id: 1,
    title: 'Startup Funding Hits Record High',
    summary: 'Indian startups raise unprecedented amounts in the latest funding rounds.',
    author: 'Srinivas Rao',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Startup+Funding+Story+1',
  },
  {
    id: 2,
    title: 'Venture Capitalists Eye Tech Startups',
    summary: 'VCs are increasingly investing in technology-driven startups.',
    author: 'Kavita Chowdary',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Startup+Funding+Story+2',
  },
];

const StartupFunding = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Startup Funding Top Stories</h1>
      <p className="subheading">Latest investments and funding news from the startup ecosystem.</p>
    </header>
    <div className="article-list">
      {startupFundingStories.map((story) => (
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

export default StartupFunding;