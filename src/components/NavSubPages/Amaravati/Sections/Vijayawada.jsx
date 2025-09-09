import React from 'react';
import { Link } from 'react-router-dom';
import '../Amaravati/Sections/Style.css';

const vijayawadaArticles = [
  {
    id: 1,
    title: 'Vijayawada Metro Project Gets Green Light',
    summary: 'The long-awaited metro project is set to begin construction next month.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Vijayawada+News+1',
    author: 'Ramesh Babu',
    date: 'Oct 26, 2023',
  },
  {
    id: 2,
    title: 'Krishna Riverfront Beautification Completed',
    summary: 'The riverfront now features parks, walkways, and recreational areas for residents.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Vijayawada+News+2',
    author: 'Sunitha Rao',
    date: 'Oct 25, 2023',
  },
  {
    id: 3,
    title: 'Vijayawada Hosts National Sports Meet',
    summary: 'Athletes from across India compete in various sports at the city’s stadium.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Vijayawada+News+3',
    author: 'Ajay Kumar',
    date: 'Oct 24, 2023',
  },
  {
    id: 4,
    title: 'Historic Temple Restoration Completed',
    summary: 'The city’s iconic temple has been restored to its former glory.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Vijayawada+News+4',
    author: 'Priya Nair',
    date: 'Oct 23, 2023',
  },
];

const Vijayawada = () => (
  <div className="category-page-container">
    <nav className="breadcrumb">
      <a href="/">Home</a> / <a href="/news">News</a> / <span>Vijayawada</span>
    </nav>
    <header className="category-header">
      <h1 className="main-heading">Vijayawada News</h1>
      <p className="subheading">Latest news, events, and updates from Vijayawada.</p>
    </header>
    <div className="article-list">
      {vijayawadaArticles.map((article) => (
        <Link to={`/news/vijayawada/${article.id}`} key={article.id} className="article-card-link">
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

export default Vijayawada;