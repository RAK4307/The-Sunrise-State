import React from 'react';
import { Link } from 'react-router-dom';

// In a real-world application, this data would likely come from a CMS or an API.
const climateChangeArticles = [
  {
    id: 1,
    title: 'UN Report Warns of Accelerating Climate Change Impacts',
    summary: 'The latest IPCC report highlights the urgent need for global action to mitigate the worsening effects of climate change.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Climate+1',
    author: 'Global Watch',
    date: 'Oct 26, 2023',
  },
  {
    id: 2,
    title: 'Innovations in Carbon Capture Technology Show Promise',
    summary: 'New technologies designed to capture carbon dioxide from the atmosphere are proving effective in pilot programs.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Climate+2',
    author: 'Tech Forward',
    date: 'Oct 25, 2023',
  },
  {
    id: 3,
    title: 'Global Summit on Climate Action Concludes with New Pledges',
    summary: 'Nations have committed to new, more ambitious targets for reducing greenhouse gas emissions by 2030.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Climate+3',
    author: 'Diana Prince',
    date: 'Oct 24, 2023',
  },
  {
    id: 4,
    title: 'The Impact of Melting Glaciers on Global Sea Levels',
    summary: 'A comprehensive study reveals the alarming rate of glacial melt and its projected impact on coastal communities.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Climate+4',
    author: 'Dr. Eva Rostova',
    date: 'Oct 23, 2023',
  },
];

const ClimateChange = () => {
  return (
    <div className="category-page-container">
      <nav aria-label="breadcrumb" className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/news">News</Link> / <span>Climate Change</span>
      </nav>

      <header className="category-header">
        <h1 className="main-heading">Climate Change</h1>
        <p className="subheading">Covering the environmental challenges and solutions shaping our world.</p>
      </header>

      <main className="article-list">
        {climateChangeArticles.map((article) => (
          <Link to={`/news/climate-change/${article.id}`} key={article.id} className="article-card-link">
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

export default ClimateChange;

