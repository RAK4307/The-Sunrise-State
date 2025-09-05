import React from 'react';
import { Link } from 'react-router-dom';

// In a real-world application, this data would likely come from a CMS or an API.
const businessArticles = [
  {
    id: 1,
    title: 'Global Markets Rally on Positive Economic Outlook',
    summary: 'Stock markets worldwide saw significant gains as new data suggests a stronger-than-expected economic recovery.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Business+News+1',
    author: 'John Doe',
    date: 'Oct 26, 2023',
  },
  {
    id: 2,
    title: 'The Future of Remote Work: A Hybrid Model Emerges',
    summary: 'Companies are increasingly adopting a hybrid work model, balancing in-office collaboration with remote flexibility.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Business+News+2',
    author: 'Jane Smith',
    date: 'Oct 25, 2023',
  },
  {
    id: 3,
    title: 'Start-up Ecosystem Thrives with New Venture Capital Funding',
    summary: 'A new wave of venture capital is fueling innovation, with tech and green energy start-ups receiving record investments.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Business+News+3',
    author: 'Robert Johnson',
    date: 'Oct 24, 2023',
  },
  {
    id: 4,
    title: 'Navigating Supply Chain Disruptions in a Post-Pandemic World',
    summary: 'Experts discuss strategies for building resilient supply chains to mitigate risks from global disruptions.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Business+News+4',
    author: 'Emily Williams',
    date: 'Oct 23, 2023',
  },
];

const Business = () => {
  return (
    <div className="category-page-container">
      <nav aria-label="breadcrumb" className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/news">News</Link> / <span>Business</span>
      </nav>

      <header className="category-header">
        <h1 className="main-heading">Business News</h1>
        <p className="subheading">Your source for the latest in finance, markets, and corporate strategy.</p>
      </header>

      <main className="article-list">
        {businessArticles.map((article) => (
          <Link to={`/news/business/${article.id}`} key={article.id} className="article-card-link">
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

export default Business;

