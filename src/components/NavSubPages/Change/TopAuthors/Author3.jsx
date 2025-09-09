import React from 'react';
import '../TopAuthors/Style.css';

const author = {
  name: 'Priya Nair',
  avatar: 'https://via.placeholder.com/120x120?text=P+Nair',
  bio: 'Social change reporter, covering grassroots movements and innovation in India.',
  articles: [
    {
      id: 1,
      title: 'Grassroots Movements Drive Social Change',
      summary: 'Local communities are leading impactful initiatives for social transformation.',
      date: 'Sep 5, 2025',
    },
    {
      id: 2,
      title: 'Legal Reforms Strengthen Civic Rights',
      summary: 'Recent legal changes aim to protect and empower citizens.',
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