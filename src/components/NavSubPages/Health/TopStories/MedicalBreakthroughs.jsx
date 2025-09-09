import React from 'react';
import './Style.css';

const medicalBreakthroughsStories = [
  {
    id: 1,
    title: 'Medical Breakthroughs in 2025',
    summary: 'Latest advancements in medicine and healthcare technology.',
    author: 'Meena Das',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Medical+Breakthroughs+Story+1',
  },
  {
    id: 2,
    title: 'New Treatments and Therapies',
    summary: 'Innovative therapies are changing patient outcomes.',
    author: 'Ajay Kumar',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Medical+Breakthroughs+Story+2',
  },
];

const MedicalBreakthroughs = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Medical Breakthroughs Top Stories</h1>
      <p className="subheading">Discover the latest innovations and research in medicine.</p>
    </header>
    <div className="article-list">
      {medicalBreakthroughsStories.map((story) => (
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

export default MedicalBreakthroughs;