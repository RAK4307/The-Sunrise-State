import React from 'react';
import './Style.css';

const economicPolicyStories = [
  {
    id: 1,
    title: 'Economic Policy Reforms',
    summary: 'Recent policy changes impacting India’s economic growth and stability.',
    author: 'Priya Nair',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Economic+Policy+Story+1',
  },
  {
    id: 2,
    title: 'Budget Highlights and Analysis',
    summary: 'Key takeaways from the latest budget session.',
    author: 'Lakshmi Reddy',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Economic+Policy+Story+2',
  },
];

const EconomicPolicy = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Economic Policy Top Stories</h1>
      <p className="subheading">Insights and analysis on India’s economic policies and reforms.</p>
    </header>
    <div className="article-list">
      {economicPolicyStories.map((story) => (
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

export default EconomicPolicy;