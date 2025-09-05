import React from 'react';
import { Link } from 'react-router-dom';

// Placeholder data for Op-Ed articles
const opedArticles = [
  {
    id: 1,
    title: 'The Future of Urban Planning in a Post-Pandemic World',
    summary: 'We must rethink our cityscapes to be more resilient, green, and human-centric in the wake of recent global challenges.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Op-Ed+1',
    author: 'Dr. Elena Vasquez',
    date: 'Oct 26, 2023',
  },
  {
    id: 2,
    title: 'AI in Education: A Tool, Not a Teacher',
    summary: 'While artificial intelligence offers powerful tools for learning, it can never replace the mentorship and inspiration of a human teacher.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Op-Ed+2',
    author: 'Prof. David Chen',
    date: 'Oct 25, 2023',
  },
  {
    id: 3,
    title: 'Why We Need a Global Treaty on Plastic Pollution',
    summary: 'The environmental crisis caused by plastic waste requires a coordinated, international response with binding commitments.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Op-Ed+3',
    author: 'Anya Sharma',
    date: 'Oct 24, 2023',
  },
  {
    id: 4,
    title: 'The Case for a Four-Day Work Week',
    summary: 'Studies and pilot programs show that a shorter work week can lead to increased productivity, better work-life balance, and higher employee retention.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Op-Ed+4',
    author: 'James O\'Malley',
    date: 'Oct 23, 2023',
  },
];

const Oped = () => {
  return (
    <div className="category-page-container">
      <nav className="breadcrumb">
        <a href="/">Home</a> / <span>Opinion</span> / <span>Op-Ed</span>
      </nav>

      <header className="category-header">
        <h1 className="main-heading">Op-Ed</h1>
        <p className="subheading">Expert analysis and diverse perspectives on today's critical issues.</p>
      </header>

      <div className="article-list">
        {opedArticles.map((article) => (
          <Link to={`/opinion/oped/${article.id}`} key={article.id} className="article-card-link">
            <div className="article-card">
              <img src={article.imageUrl} alt={article.title} className="article-image" />
              <div className="article-content">
                <h2 className="article-title">{article.title}</h2>
                <p className="article-summary">{article.summary}</p>
                <div className="article-meta">
                  <span className="article-author">{article.author}</span> - <span className="article-date">{article.date}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Oped;

