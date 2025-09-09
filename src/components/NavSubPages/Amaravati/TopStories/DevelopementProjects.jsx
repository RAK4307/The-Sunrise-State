import React from 'react';
import '../TopStories/Style.css';

const developmentProjects = [
  {
    id: 1,
    title: 'Metro Rail Project Breaks Ground',
    summary: 'Construction of the Amaravati Metro Rail has officially begun.',
    date: 'Oct 28, 2023',
    author: 'Ajay Kumar',
    imageUrl: 'https://via.placeholder.com/400x250?text=Development+Story+1',
  },
  {
    id: 2,
    title: 'Smart City Initiatives Launched',
    summary: 'Amaravati launches smart city initiatives for better urban management.',
    date: 'Oct 27, 2023',
    author: 'Sunitha Rao',
    imageUrl: 'https://via.placeholder.com/400x250?text=Development+Story+2',
  },
];

const DevelopmentProjects = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Development Projects</h1>
      <p className="subheading">Major infrastructure and urban development updates.</p>
    </header>
    <div className="article-list">
      {developmentProjects.map((story) => (
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

export default DevelopmentProjects;