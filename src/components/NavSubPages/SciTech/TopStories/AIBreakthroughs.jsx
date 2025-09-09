import React from 'react';
import './Style.css';

const aiStories = [
  {
    id: 1,
    title: 'AI Breakthroughs: 2025 Highlights',
    summary: 'Discover the most significant advancements in artificial intelligence this year.',
    author: 'Dr. Kavita Rao',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=AI+Breakthroughs+1',
  },
  {
    id: 2,
    title: 'AI in Healthcare',
    summary: 'How AI is revolutionizing diagnostics and patient care.',
    author: 'Prof. Arjun Mehta',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=AI+Breakthroughs+2',
  },
];

const AIBreakthroughs = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">AI Breakthroughs Top Stories</h1>
      <p className="subheading">Latest news and analysis on artificial intelligence innovations.</p>
    </header>
    <div className="article-list">
      {aiStories.map((story) => (
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

export default AIBreakthroughs;