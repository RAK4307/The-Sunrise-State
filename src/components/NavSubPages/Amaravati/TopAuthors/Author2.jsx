import React from 'react';
import '../Sections/style.css';

const author = {
  name: 'Lakshmi Reddy',
  avatar: 'https://via.placeholder.com/120x120?text=L+Reddy',
  bio: 'Award-winning reporter focusing on technology, education, and social issues in Amaravati and Guntur.',
  articles: [
    {
      id: 1,
      title: 'Amaravati to Host International Tech Summit',
      summary: 'The city is set to welcome tech leaders from across the globe for a summit focused on AI and blockchain technology.',
      date: 'Oct 25, 2023',
    },
    {
      id: 2,
      title: 'Guntur Hosts Annual Food Festival',
      summary: 'The city’s famous food festival returns with a variety of local and international cuisines.',
      date: 'Oct 25, 2023',
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