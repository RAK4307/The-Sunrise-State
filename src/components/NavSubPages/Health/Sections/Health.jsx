import React from 'react';
import { Link } from 'react-router-dom';

// In a real-world application, this data would likely come from a CMS or an API.
const healthArticles = [
  {
    id: 1,
    title: 'New Study Links Gut Health to Improved Mental Clarity',
    summary: 'Researchers have found a strong correlation between a healthy gut microbiome and cognitive functions like memory and focus.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Health+News+1',
    author: 'Dr. Susan Oliver',
    date: 'Oct 26, 2023',
  },
  {
    id: 2,
    title: 'The Benefits of High-Intensity Interval Training (HIIT) for Heart Health',
    summary: 'Short bursts of intense exercise can be more effective for cardiovascular health than longer, moderate workouts.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Health+News+2',
    author: 'Carlos Ramirez',
    date: 'Oct 25, 2023',
  },
  {
    id: 3,
    title: 'Navigating the Flu Season: Prevention and Treatment Tips',
    summary: 'Health officials advise on the best practices for staying healthy during flu season, including vaccination and hygiene.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Health+News+3',
    author: 'Public Health Today',
    date: 'Oct 24, 2023',
  },
  {
    id: 4,
    title: 'The Importance of Sleep for Physical and Mental Recovery',
    summary: 'A deep dive into how quality sleep is crucial for muscle repair, hormone regulation, and overall well-being.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Health+News+4',
    author: 'Dr. Emily Carter',
    date: 'Oct 23, 2023',
  },
];

const Health = () => {
  return (
    <div className="category-page-container">
      <nav aria-label="breadcrumb" className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/news">News</Link> / <span>Health</span>
      </nav>

      <header className="category-header">
        <h1 className="main-heading">Health News</h1>
        <p className="subheading">The latest in medical breakthroughs, fitness, and wellness.</p>
      </header>

      <main className="article-list">
        {healthArticles.map((article) => (
          <Link to={`/news/health/${article.id}`} key={article.id} className="article-card-link">
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

export default Health;

