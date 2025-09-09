import React from 'react';
import './Style.css';

const climateStories = [
  {
    id: 1,
    title: 'Climate Solutions: Innovations',
    summary: 'Explore new technologies and strategies for climate resilience.',
    author: 'Dr. Kavita Rao',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Climate+Solutions+1',
  },
  {
    id: 2,
    title: 'Global Climate Initiatives',
    summary: 'International efforts and collaborations for a sustainable future.',
    author: 'Prof. Arjun Mehta',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Climate+Solutions+2',
  },
];

const ClimateSolutions = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Climate Solutions Top Stories</h1>
      <p className="subheading">Updates and breakthroughs in climate science and sustainability.</p>
    </header>
    <div className="article-list">
      {climateStories.map((story) => (
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

export default ClimateSolutions;