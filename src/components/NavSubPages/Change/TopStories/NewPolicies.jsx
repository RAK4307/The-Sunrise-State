import React from 'react';
import '../../Sections/Style.css';

const newPoliciesStories = [
  {
    id: 1,
    title: 'Government Announces New Policies',
    summary: 'Fresh policies target education, healthcare, and environmental sustainability.',
    author: 'Lakshmi Reddy',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=New+Policies+Story+1',
  },
  {
    id: 2,
    title: 'Policy Changes for Startups',
    summary: 'New regulations aim to support innovation and entrepreneurship.',
    author: 'Ajay Kumar',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=New+Policies+Story+2',
  },
];

const NewPolicies = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">New Policies</h1>
      <p className="subheading">Discover the latest government policies and their impact.</p>
    </header>
    <div className="article-list">
      {newPoliciesStories.map((story) => (
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

export default NewPolicies;