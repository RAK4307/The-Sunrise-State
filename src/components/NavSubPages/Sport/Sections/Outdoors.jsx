import React from 'react';
import { Link } from 'react-router-dom';

// In a real-world application, this data would likely come from a CMS or an API.
const outdoorsArticles = [
  {
    id: 1,
    title: 'National Parks Report Record Number of Visitors This Season',
    summary: 'An unprecedented number of people are exploring national parks, highlighting a growing appreciation for nature.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Outdoors+1',
    author: 'Ranger Rick',
    date: 'Oct 26, 2023',
  },
  {
    id: 2,
    title: 'A Hiker\'s Guide to the Appalachian Trail\'s Best Sections',
    summary: 'Experienced hikers share their favorite segments of the iconic Appalachian Trail for stunning views and challenging treks.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Outdoors+2',
    author: 'Pat H. Finder',
    date: 'Oct 25, 2023',
  },
  {
    id: 3,
    title: 'Kayaking Adventures: Exploring Hidden Coastal Coves',
    summary: 'Discover serene and secluded coastal coves that are only accessible by kayak, perfect for a peaceful day on the water.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Outdoors+3',
    author: 'River Banks',
    date: 'Oct 24, 2023',
  },
  {
    id: 4,
    title: 'New Conservation Effort Aims to Protect Local Wildlife Habitats',
    summary: 'A coalition of environmental groups has launched a new initiative to preserve and restore critical wildlife habitats.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Outdoors+4',
    author: 'Willow Green',
    date: 'Oct 23, 2023',
  },
];

const Outdoors = () => {
  return (
    <div className="category-page-container">
      <nav aria-label="breadcrumb" className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/news">News</Link> / <span>Outdoors</span>
      </nav>

      <header className="category-header">
        <h1 className="main-heading">Outdoors</h1>
        <p className="subheading">News and guides for hiking, camping, and appreciating the natural world.</p>
      </header>

      <main className="article-list">
        {outdoorsArticles.map((article) => (
          <Link to={`/news/outdoors/${article.id}`} key={article.id} className="article-card-link">
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

export default Outdoors;

