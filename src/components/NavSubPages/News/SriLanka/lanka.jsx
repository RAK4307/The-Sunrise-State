import React from 'react';
import { Link } from 'react-router-dom';

// Placeholder data for Sri Lanka articles
const srilankaArticles = [
  {
    id: 1,
    title: 'Sri Lanka Boosts Tourism with New Eco-Friendly Resorts',
    summary: 'The Sri Lankan tourism board has launched a new initiative to promote sustainable tourism with several new eco-resorts.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Sri+Lanka+News+1',
    author: 'Nimal Perera',
    date: 'Oct 26, 2023',
  },
  {
    id: 2,
    title: 'Colombo Port City Project Reaches New Milestone',
    summary: 'The ambitious Colombo Port City project has completed its land reclamation phase, paving the way for infrastructure development.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Sri+Lanka+News+2',
    author: 'Anusha Silva',
    date: 'Oct 25, 2023',
  },
  {
    id: 3,
    title: 'Government Announces Economic Reforms to Tackle Inflation',
    summary: 'A new set of economic policies has been introduced to stabilize the currency and control rising inflation.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Sri+Lanka+News+3',
    author: 'Rohan Jayawardena',
    date: 'Oct 24, 2023',
  },
  {
    id: 4,
    title: 'Wildlife Conservation Efforts Show Success in Yala National Park',
    summary: 'Conservationists report a significant increase in the leopard population in Yala National Park due to anti-poaching measures.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Sri+Lanka+News+4',
    author: 'Dr. Asha de Silva',
    date: 'Oct 23, 2023',
  },
];

const Srilanka = () => {
  return (
    <div className="category-page-container">
      <nav className="breadcrumb">
        <a href="/">Home</a> / <a href="/news">News</a> / <span>Sri Lanka</span>
      </nav>

      <header className="category-header">
        <h1 className="main-heading">Sri Lanka News</h1>
        <p className="subheading">The latest on tourism, economy, and culture in Sri Lanka.</p>
      </header>

      <div className="article-list">
        {srilankaArticles.map((article) => (
          <Link to={`/news/sri-lanka/${article.id}`} key={article.id} className="article-card-link">
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

export default Srilanka;

