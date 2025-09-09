import React from 'react';
import '../TopStories/Style.css';

const crdaStories = [
  {
    id: 1,
    title: 'CRDA Announces New Infrastructure Projects',
    summary: 'The Capital Region Development Authority has unveiled plans for new roads and bridges in Amaravati.',
    date: 'Oct 26, 2023',
    author: 'Prakash Naidu',
    imageUrl: 'https://via.placeholder.com/400x250?text=CRDA+Story+1',
  },
  {
    id: 2,
    title: 'CRDA Holds Public Consultation',
    summary: 'Residents participated in a public consultation on upcoming development projects.',
    date: 'Oct 24, 2023',
    author: 'Kavita Chowdary',
    imageUrl: 'https://via.placeholder.com/400x250?text=CRDA+Story+2',
  },
];

const CRDA = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">CRDA Top Stories</h1>
      <p className="subheading">Updates from the Capital Region Development Authority.</p>
    </header>
    <div className="article-list">
      {crdaStories.map((story) => (
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

export default CRDA;