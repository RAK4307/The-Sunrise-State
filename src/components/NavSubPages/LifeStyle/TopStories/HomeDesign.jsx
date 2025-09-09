import React from 'react';
import './Style.css';

const homeDesignStories = [
  {
    id: 1,
    title: 'Home Design Inspirations',
    summary: 'Latest trends and ideas for modern home interiors.',
    author: 'Ajay Kumar',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Home+Design+Story+1',
  },
  {
    id: 2,
    title: 'Eco-Friendly Home Solutions',
    summary: 'Sustainable and green design ideas for your living space.',
    author: 'Meena Das',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Home+Design+Story+2',
  },
];

const HomeDesign = () => (
  <div className="category-page-container">
    <header className="author-profile-header">
      <h1 className="main-heading">Home Design Top Stories</h1>
      <p className="subheading">Interior design, decor tips, and sustainable living ideas.</p>
    </header>
    <div className="article-list">
      {homeDesignStories.map((story) => (
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

export default HomeDesign;