import React from 'react';
import '../TopAuthors/Style.css';

const author = {
  name: 'Ravi Kumar',
  avatar: 'https://via.placeholder.com/120x120?text=R+Kumar',
  bio: 'Senior business journalist specializing in banking and finance trends in India.',
  articles: [
    {
      id: 1,
      title: 'Digital Banking Revolution in India',
      summary: 'Banks are rapidly adopting digital platforms to enhance customer experience and security.',
      date: 'Sep 5, 2025',
    },
    {
      id: 2,
      title: 'New RBI Guidelines for Private Banks',
      summary: 'The Reserve Bank of India has issued new compliance guidelines for private sector banks.',
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