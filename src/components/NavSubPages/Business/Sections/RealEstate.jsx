import React from 'react';
import { Link } from 'react-router-dom';

// In a real-world application, this data would likely come from a CMS or an API.
const realEstateArticles = [
  {
    id: 1,
    title: 'Housing Market Shows Signs of Cooling as Interest Rates Rise',
    summary: 'After a period of rapid growth, the housing market is beginning to stabilize in response to rising mortgage rates.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Real+Estate+1',
    author: 'Holly Buyer',
    date: 'Oct 26, 2023',
  },
  {
    id: 2,
    title: 'Luxury Condo Development Breaks Ground in Downtown Core',
    summary: 'A new high-rise luxury condominium project has started construction, promising state-of-the-art amenities.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Real+Estate+2',
    author: 'Rick Estate',
    date: 'Oct 25, 2023',
  },
  {
    id: 3,
    title: 'The Rise of Suburban "Zoom Towns" in the Remote Work Era',
    summary: 'Suburban areas are seeing a population boom as remote workers seek more space and a lower cost of living.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Real+Estate+3',
    author: 'Sue Urban',
    date: 'Oct 24, 2023',
  },
  {
    id: 4,
    title: 'Tips for First-Time Homebuyers in a Competitive Market',
    summary: 'Real estate experts share their advice for navigating the challenges of buying a first home in today\'s market.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Real+Estate+4',
    author: 'Mort Gage',
    date: 'Oct 23, 2023',
  },
];

const RealEstate = () => {
  return (
    <div className="category-page-container">
      <nav aria-label="breadcrumb" className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/news">News</Link> / <span>Real Estate</span>
      </nav>

      <header className="category-header">
        <h1 className="main-heading">Real Estate News</h1>
        <p className="subheading">Trends and analysis of the housing and commercial property markets.</p>
      </header>

      <main className="article-list">
        {realEstateArticles.map((article) => (
          <Link to={`/news/real-estate/${article.id}`} key={article.id} className="article-card-link">
            <article className="article-card">
              <img src={article.imageUrl} alt={article.title} className="article-image" />
              <div className="article-content">
                <h2 className="article-title">{article.title}</h2>
                <p className="article-summary">{article.summary}</p>
                <div className="article-meta">
                  <span className="article-author">{article.author}</span> - <span className="article-date">{article.date}</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </main>
    </div>
  );
};

export default RealEstate;

