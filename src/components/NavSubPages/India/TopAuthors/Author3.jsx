import React from 'react';
import './Style.css';

const author = {
  name: 'Priya Nair',
  avatar: 'https://via.placeholder.com/120x120?text=P+Nair',
  bio: 'Politics and culture writer, sharing insights on Delhi, Mumbai, and national affairs.',
  articles: [
    {
      id: 1,
      title: 'Delhi: Political and Social Updates',
      summary: 'Key developments in politics, society, and governance in Delhi.',
      date: 'Sep 5, 2025',
    },
    {
      id: 2,
      title: 'Indian Politics: Key Developments',
      summary: 'Major political events and decisions shaping the nation.',
      date: 'Sep 4, 2025',
    },
  ],
};

const Author3 = () => (
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

export default Author3;