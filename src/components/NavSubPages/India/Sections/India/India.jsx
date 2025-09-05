import React from 'react';
import './India.css'; // Reusing the same style for consistency

// Placeholder data for India articles
const indiaArticles = [
  {
    id: 1,
    title: 'New Economic Policies Announced in Parliament',
    summary: 'The government has unveiled a new set of economic reforms aimed at boosting manufacturing and creating jobs.',
    imageUrl: 'https://via.placeholder.com/400x250?text=India+News+1',
    author: 'Ravi Sharma',
    date: 'Oct 26, 2023',
  },
  {
    id: 2,
    title: 'ISRO Launches New Communication Satellite',
    summary: 'The Indian Space Research Organisation successfully placed a new satellite into orbit to enhance communication services.',
    imageUrl: 'https://via.placeholder.com/400x250?text=India+News+2',
    author: 'Priya Singh',
    date: 'Oct 25, 2023',
  },
  {
    id: 3,
    title: 'Bollywood Film Festival Goes International',
    summary: 'The annual Mumbai film festival will be hosted in three international cities this year to promote Indian cinema.',
    imageUrl: 'https://via.placeholder.com/400x250?text=India+News+3',
    author: 'Anjali Mehta',
    date: 'Oct 24, 2023',
  },
  {
    id: 4,
    title: 'Record Monsoon Rains Affect Northern States',
    summary: 'Several states in Northern India are grappling with floods after experiencing record-breaking monsoon rainfall.',
    imageUrl: 'https://via.placeholder.com/400x250?text=India+News+4',
    author: 'Amit Kumar',
    date: 'Oct 23, 2023',
  },
];

const India = () => {
  return (
    <div className="category-page-container">
      <nav className="breadcrumb">
        <a href="/">Home</a> / <a href="/news">News</a> / <span>India</span>
      </nav>

      <header className="category-header">
        <h1 className="main-heading">India News</h1>
        <p className="subheading">The latest on events, politics, and culture from India.</p>
      </header>

      <div className="article-list">
        {indiaArticles.map((article) => (
          <div key={article.id} className="article-card">
            <img src={article.imageUrl} alt={article.title} className="article-image" />
            <div className="article-content">
              <h2 className="article-title">{article.title}</h2>
              <p className="article-summary">{article.summary}</p>
              <div className="article-meta">
                <span className="article-author">{article.author}</span> - <span className="article-date">{article.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default India;
