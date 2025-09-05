import React from 'react';
import { Link } from 'react-router-dom';

// Placeholder data for Interviews
const interviewsArticles = [
  {
    id: 1,
    title: 'A Conversation with Tech CEO on the Future of AI',
    summary: 'We sit down with the CEO of a leading AI firm to discuss the opportunities and ethical challenges presented by rapidly advancing technology.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Interview+1',
    author: 'Interview by Priya Singh',
    date: 'Oct 26, 2023',
  },
  {
    id: 2,
    title: 'Filmmaker Discusses Her Latest Award-Winning Documentary',
    summary: 'An in-depth conversation with the director about her powerful new film, the challenges of documentary filmmaking, and the stories that need to be told.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Interview+2',
    author: 'Interview by Amit Kumar',
    date: 'Oct 25, 2023',
  },
];

const Interviews = () => {
  return (
    <div className="category-page-container">
      <nav className="breadcrumb">
        <a href="/">Home</a> / <span>Opinion</span> / <span>Interviews</span>
      </nav>

      <header className="category-header">
        <h1 className="main-heading">Interviews</h1>
        <p className="subheading">In-depth conversations with newsmakers and cultural figures.</p>
      </header>

      <div className="article-list">
        {interviewsArticles.map((article) => (
          <Link to={`/opinion/interviews/${article.id}`} key={article.id} className="article-card-link">
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

export default Interviews;

