import React from 'react';
import './Style.css';

const author = {
  name: 'Meena Das',
  avatar: 'https://via.placeholder.com/120x120?text=M+Das',
  bio: 'Editorial and guest essay writer, focusing on education and social change.',
  articles: [
    {
      id: 1,
      title: 'Guest Essay: Education Reform',
      summary: 'Guest perspectives on the future of education in India.',
      date: 'Sep 5, 2025',
    },
    {
      id: 2,
      title: 'Political Analysis: Election Insights',
      summary: 'In-depth look at recent elections and political shifts.',
      date: 'Sep 4, 2025',
    },
  ],
};

const Author2 = () => (
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

export default Author2;