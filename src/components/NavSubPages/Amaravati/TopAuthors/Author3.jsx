import React from 'react';
import '../Sections/style.css';

const author = {
  name: 'Prakash Naidu',
  avatar: 'https://via.placeholder.com/120x120?text=P+Naidu',
  bio: 'Environment and culture columnist, passionate about green initiatives and local heritage.',
  articles: [
    {
      id: 1,
      title: 'Green City Initiative: Over a Million Saplings Planted',
      summary: 'As part of the green city initiative, volunteers and officials have planted over a million trees across Amaravati.',
      date: 'Oct 24, 2023',
    },
    {
      id: 2,
      title: 'Cultural Festival Celebrates Local Heritage',
      summary: 'The annual Amaravati cultural festival saw record attendance, with performances showcasing the rich history of the region.',
      date: 'Oct 23, 2023',
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