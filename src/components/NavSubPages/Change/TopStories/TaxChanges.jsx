import React from 'react';
import '../../Sections/Style.css';

const taxChangesStories = [
  {
    id: 1,
    title: 'Tax Changes for 2025 Announced',
    summary: 'New tax regulations aim to simplify compliance and benefit small businesses.',
    author: 'Ravi Kumar',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Tax+Changes+Story+1',
  },
  {
    id: 2,
    title: 'GST Updates and Implications',
    summary: 'Recent GST changes and their impact on businesses and consumers.',
    author: 'Meena Das',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Tax+Changes+Story+2',
  },
];

const TaxChanges = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Tax Changes</h1>
      <p className="subheading">Latest tax reforms and updates for businesses and individuals.</p>
    </header>
    <div className="article-list">
      {taxChangesStories.map((story) => (
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

export default TaxChanges;