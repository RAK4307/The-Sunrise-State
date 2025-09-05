import React from 'react';
import { Link } from 'react-router-dom';

// In a real-world application, this data would likely come from a CMS or an API.
const cultureArticles = [
  {
    id: 1,
    title: 'Revival of Ancient Art Forms in Modern Galleries',
    summary: 'Contemporary artists are breathing new life into traditional techniques, creating a fusion of past and present.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Culture+News+1',
    author: 'Isabella Rossi',
    date: 'Oct 26, 2023',
  },
  {
    id: 2,
    title: 'The Global Influence of K-Pop and Korean Cinema',
    summary: 'From music charts to the Academy Awards, South Korean cultural exports are achieving unprecedented global success.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Culture+News+2',
    author: 'David Kim',
    date: 'Oct 25, 2023',
  },
  {
    id: 3,
    title: 'Literary Festival Celebrates Emerging Voices and Diverse Stories',
    summary: 'This year\'s international literary festival highlighted the importance of diversity and inclusion in publishing.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Culture+News+3',
    author: 'Priya Sharma',
    date: 'Oct 24, 2023',
  },
  {
    id: 4,
    title: 'Culinary Heritage: Chefs Rediscover and Reinvent Traditional Dishes',
    summary: 'A movement to preserve culinary history has chefs exploring ancestral recipes with a modern twist.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Culture+News+4',
    author: 'Antoine Dubois',
    date: 'Oct 23, 2023',
  },
];

const Culture = () => {
  return (
    <div className="category-page-container">
      <nav aria-label="breadcrumb" className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/news">News</Link> / <span>Culture</span>
      </nav>

      <header className="category-header">
        <h1 className="main-heading">Culture News</h1>
        <p className="subheading">Exploring art, heritage, and the creative world around us.</p>
      </header>

      <main className="article-list">
        {cultureArticles.map((article) => (
          <Link to={`/news/culture/${article.id}`} key={article.id} className="article-card-link">
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

export default Culture;

