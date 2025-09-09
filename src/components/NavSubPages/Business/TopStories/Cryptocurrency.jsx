import React from 'react';
import '../Sections/Style.css';

const cryptoStories = [
  {
    id: 1,
    title: 'Cryptocurrency Market Volatility Continues',
    summary: 'Bitcoin and other cryptocurrencies experience significant price swings.',
    author: 'Meena Das',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Crypto+Story+1',
  },
  {
    id: 2,
    title: 'Regulatory Updates for Crypto Exchanges',
    summary: 'New government regulations impact crypto trading platforms.',
    author: 'Ajay Kumar',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Crypto+Story+2',
  },
];

const Cryptocurrency = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Cryptocurrency Top Stories</h1>
      <p className="subheading">News and analysis on digital currencies and blockchain technology.</p>
    </header>
    <div className="article-list">
      {cryptoStories.map((story) => (
        <div key={story.id} className="article-card">
          <img src={story.imageUrl} alt={story.title} className="article-image" />
          <div className="article-content">
            <h2 className="article-title">{story.title}</h2>
            <p className="article-summary">{story.summary}</p>
            <div className="article-meta">
              <span className="article-author">{story.author}</span> - <span className="article-date">{story.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Cryptocurrency;