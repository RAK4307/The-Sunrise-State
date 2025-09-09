import React from 'react';
import './Style.css';

const author = {
  name: 'Meena Das',
  avatar: 'https://via.placeholder.com/120x120?text=M+Das',
  bio: 'Streaming and awards correspondent, bringing you the latest on binge-worthy series and entertainment honors.',
  articles: [
    {
      id: 1,
      title: 'Streaming Platforms Compete for Viewers',
      summary: 'Major streaming services launch new originals and exclusive content.',
      date: 'Sep 5, 2025',
    },
    {
      id: 2,
      title: 'Oscars 2025: Winners and Highlights',
      summary: 'A look at the biggest moments and winners from this year’s Academy Awards.',
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