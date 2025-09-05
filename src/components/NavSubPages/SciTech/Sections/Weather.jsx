import React from 'react';
import { Link } from 'react-router-dom';

// In a real-world application, this data would likely come from a CMS or an API.
const weatherArticles = [
  {
    id: 1,
    title: 'Severe Storm Warning Issued for Coastal Areas This Weekend',
    summary: 'Meteorologists are tracking a major storm system expected to bring heavy rain and strong winds to the coast.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Weather+1',
    author: 'Storm Tracker Team',
    date: 'Oct 26, 2023',
  },
  {
    id: 2,
    title: 'Heatwave Continues, Breaking Temperature Records Across the Region',
    summary: 'An ongoing heatwave has set new all-time high temperature records, with relief not expected until next week.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Weather+2',
    author: 'Sunny Day',
    date: 'Oct 25, 2023',
  },
  {
    id: 3,
    title: 'Unexpected Cold Front Brings Early Snow to Mountain Regions',
    summary: 'A surprising dip in temperature has resulted in early snowfall in higher elevations, delighting ski resorts.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Weather+3',
    author: 'Jack Frost',
    date: 'Oct 24, 2023',
  },
  {
    id: 4,
    title: 'Weekly Forecast: Sunny Skies and Mild Temperatures Ahead',
    summary: 'The upcoming week promises pleasant weather with clear skies and moderate temperatures, perfect for outdoor activities.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Weather+4',
    author: 'Gail Weathers',
    date: 'Oct 23, 2023',
  },
];

const Weather = () => {
  return (
    <div className="category-page-container">
      <nav aria-label="breadcrumb" className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/news">News</Link> / <span>Weather</span>
      </nav>

      <header className="category-header">
        <h1 className="main-heading">Weather</h1>
        <p className="subheading">Your local and national forecast and weather-related news.</p>
      </header>

      <main className="article-list">
        {weatherArticles.map((article) => (
          <Link to={`/news/weather/${article.id}`} key={article.id} className="article-card-link">
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

export default Weather;

