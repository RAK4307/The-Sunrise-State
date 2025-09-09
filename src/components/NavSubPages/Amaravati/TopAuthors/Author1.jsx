import React from 'react';
import '../Sections/style.css';

const author = {
  name: 'Srinivas Rao',
  avatar: 'https://via.placeholder.com/120x120?text=S+Rao',
  bio: 'Senior journalist covering Amaravati’s development, politics, and culture for over 15 years.',
  articles: [
    {
      id: 1,
      title: 'New Government Complex Construction Begins in Amaravati',
      summary: 'The foundation stone for the new administrative complex was laid today, marking a major milestone for the city.',
      date: 'Oct 26, 2023',
    },
    {
      id: 2,
      title: 'Amaravati’s Green City Initiative',
      summary: 'Volunteers and officials have planted over a million trees across Amaravati.',
      date: 'Oct 24, 2023',
    },
  ],
};

const Author1 = () => (
  <div className="category-page-container">
    <div className="author-profile-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
      <img
        src={author.avatar}
        alt={author.name}
        style={{
          borderRadius: '50%',
          width: '120px',
          height: '120px',
          objectFit: 'cover',
          marginBottom: '1rem',
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        }}
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