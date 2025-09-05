import React from 'react';
import { Link } from 'react-router-dom';

// Placeholder data for Letters to the Editor
const lettersArticles = [
  {
    id: 1,
    title: 'A Reader Responds to the Four-Day Work Week Op-Ed',
    summary: '"While the idea is appealing, the author of the Op-Ed on a four-day work week overlooks the challenges it would pose for service industries..."',
    imageUrl: 'https://via.placeholder.com/400x250?text=Letter+1',
    author: 'John P. from Vizag',
    date: 'Oct 26, 2023',
  },
  {
    id: 2,
    title: 'Concerns About the New Downtown Development Project',
    summary: '"The proposed downtown development project, while promising, does not adequately address the need for affordable housing. We urge the city council to reconsider..."',
    imageUrl: 'https://via.placeholder.com/400x250?text=Letter+2',
    author: 'Susan B. from Hyderabad',
    date: 'Oct 25, 2023',
  },
];

const Letters = () => {
  return (
    <div className="category-page-container">
      <nav className="breadcrumb">
        <a href="/">Home</a> / <span>Opinion</span> / <span>Letters</span>
      </nav>

      <header className="category-header">
        <h1 className="main-heading">Letters to the Editor</h1>
        <p className="subheading">Readers share their thoughts on our coverage and the issues of the day.</p>
      </header>

      <div className="article-list">
        {lettersArticles.map((article) => (
          <Link to={`/opinion/letters/${article.id}`} key={article.id} className="article-card-link">
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

export default Letters;

