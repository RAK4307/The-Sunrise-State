import React from 'react';
import { Link } from 'react-router-dom';
import '../Amaravati/Sections/Style.css';

const gunturArticles = [
  {
    id: 1,
    title: 'Guntur Farmers Adopt Smart Agriculture',
    summary: 'Local farmers are embracing new technologies to improve crop yields and sustainability.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Guntur+News+1',
    author: 'Ravi Kumar',
    date: 'Oct 26, 2023',
  },
  {
    id: 2,
    title: 'Guntur Hosts Annual Food Festival',
    summary: 'The city’s famous food festival returns with a variety of local and international cuisines.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Guntur+News+2',
    author: 'Meena Das',
    date: 'Oct 25, 2023',
  },
  {
    id: 3,
    title: 'New Medical College Inaugurated in Guntur',
    summary: 'A state-of-the-art medical college opens its doors to students and faculty.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Guntur+News+3',
    author: 'Anil Reddy',
    date: 'Oct 24, 2023',
  },
  {
    id: 4,
    title: 'Guntur Railway Station Gets Modern Makeover',
    summary: 'Renovations bring new amenities and improved accessibility to the city’s main railway station.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Guntur+News+4',
    author: 'Suma Rao',
    date: 'Oct 23, 2023',
  },
];

const Guntur = () => (
  <div className="category-page-container">
    <nav className="breadcrumb">
      <a href="/">Home</a> / <a href="/news">News</a> / <span>Guntur</span>
    </nav>
    <header className="category-header">
      <h1 className="main-heading">Guntur News</h1>
      <p className="subheading">Updates and stories from Guntur city and district.</p>
    </header>
    <div className="article-list">
      {gunturArticles.map((article) => (
        <Link to={`/news/guntur/${article.id}`} key={article.id} className="article-card-link">
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

export default Guntur;