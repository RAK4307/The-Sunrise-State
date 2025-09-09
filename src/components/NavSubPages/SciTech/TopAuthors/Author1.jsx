import React from 'react';
import './Style.css';

const author = {
  name: 'Dr. Kavita Rao',
  avatar: 'https://via.placeholder.com/120x120?text=K+Rao',
  bio: 'Science and technology columnist, specializing in AI and climate research.',
  articles: [
    {
      id: 1,
      title: 'AI Breakthroughs in 2025',
      summary: 'Latest advancements in artificial intelligence and machine learning.',
      date: 'Sep 5, 2025',
    },
    {
      id: 2,
      title: 'Climate Change Updates',
      summary: 'Latest research and news on climate change and global warming.',
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