import React from 'react';
import { Link } from 'react-router-dom';

// In a real-world application, this data would likely come from a CMS or an API.
const lifestyleArticles = [
  {
    id: 1,
    title: 'Minimalism: How Decluttering Your Home Can Declutter Your Mind',
    summary: 'Experts share tips on the minimalist lifestyle and its benefits for mental well-being and focus.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Lifestyle+1',
    author: 'Clara Evans',
    date: 'Oct 26, 2023',
  },
  {
    id: 2,
    title: 'Top 10 Travel Destinations for Adventure Seekers in 2024',
    summary: 'From the mountains of Patagonia to the reefs of Australia, here are the must-visit spots for thrill-seekers.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Lifestyle+2',
    author: 'Marco Polo Jr.',
    date: 'Oct 25, 2023',
  },
  {
    id: 3,
    title: 'The Art of Mindful Eating: A Guide to a Healthier Relationship with Food',
    summary: 'Learn how to practice mindful eating to improve digestion, reduce stress, and enjoy your meals more.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Lifestyle+3',
    author: 'Dr. Anya Sharma',
    date: 'Oct 24, 2023',
  },
  {
    id: 4,
    title: 'Sustainable Fashion: Brands That Are Making a Difference',
    summary: 'Discover fashion brands that prioritize ethical production and environmentally friendly materials.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Lifestyle+4',
    author: 'Stella Green',
    date: 'Oct 23, 2023',
  },
];

const LifeStyle = () => {
  return (
    <div className="category-page-container">
      <nav aria-label="breadcrumb" className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/news">News</Link> / <span>Lifestyle</span>
      </nav>

      <header className="category-header">
        <h1 className="main-heading">Lifestyle</h1>
        <p className="subheading">Trends and advice on wellness, travel, fashion, and more.</p>
      </header>

      <main className="article-list">
        {lifestyleArticles.map((article) => (
          <Link to={`/news/lifestyle/${article.id}`} key={article.id} className="article-card-link">
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

export default LifeStyle;

