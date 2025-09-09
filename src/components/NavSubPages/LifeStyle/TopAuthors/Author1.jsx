import React from 'react';
import './Style.css';

const author = {
  name: 'Ajay Kumar',
  avatar: 'https://via.placeholder.com/120x120?text=A+Kumar',
  bio: 'Lifestyle and agriculture writer, sharing insights on modern living and farming.',
  articles: [
    {
      id: 1,
      title: 'Modern Living: Trends & Tips',
      summary: 'Explore the latest trends in lifestyle, wellness, and home design.',
      date: 'Sep 5, 2025',
    },
    {
      id: 2,
      title: 'Modern Farming Techniques',
      summary: 'Explore innovations and sustainable practices in agriculture.',
      date: 'Sep 4, 2025',
    },
  ],
};

const Author1 = () => (
  <div className="category-page-container">
    <div className="author-profile-header">
      <img
        src={author.avatar}
        alt={author.name}
        className="author-avatar"
      />
      <h1 className="main-heading">{author.name}</h1>
      <p className="subheading">{author.bio}</p>
    </div>
    <div>
      <h2 className="article-title" style={{ marginBottom: '1rem' }}>Articles by {author.name}</h2>
      <div className="article-list">
        {author.articles.map((article) => (
          <div key={article.id} className="article-card">
            <div className="article-content">
              <h3 className="article-title">{article.title}</h3>
              <p className="article-summary">{article.summary}</p>
              <div className="article-meta">
                <span className="article-date">{article.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Author1;