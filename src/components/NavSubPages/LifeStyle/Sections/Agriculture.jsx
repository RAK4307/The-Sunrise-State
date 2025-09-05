import React from 'react';
import { Link } from 'react-router-dom';

// In a real-world application, this data would likely come from a CMS or an API.
const agricultureArticles = [
  {
    id: 1,
    title: 'Vertical Farming Technology Promises to Revolutionize Urban Food Supply',
    summary: 'New methods in vertical farming are increasing crop yields in urban centers, reducing transportation costs and carbon footprint.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Agriculture+1',
    author: 'George Franklin',
    date: 'Oct 26, 2023',
  },
  {
    id: 2,
    title: 'Drought-Resistant Crops Offer Hope for Arid Regions',
    summary: 'Genetic advancements have led to the development of new crop varieties that can thrive with minimal water.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Agriculture+2',
    author: 'Aisha Bello',
    date: 'Oct 25, 2023',
  },
  {
    id: 3,
    title: 'The Role of Bees and Pollinators in Global Food Security',
    summary: 'A new report highlights the critical importance of protecting pollinator populations for a stable food supply.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Agriculture+3',
    author: 'Beatrice Miller',
    date: 'Oct 24, 2023',
  },
  {
    id: 4,
    title: 'Organic Farming Sees Surge in Demand as Consumers Prioritize Health',
    summary: 'The market for organic produce has grown significantly as more people seek out pesticide-free food options.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Agriculture+4',
    author: 'Tom Gardner',
    date: 'Oct 23, 2023',
  },
];

const Agriculture = () => {
  return (
    <div className="category-page-container">
      <nav aria-label="breadcrumb" className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/news">News</Link> / <span>Agriculture</span>
      </nav>

      <header className="category-header">
        <h1 className="main-heading">Agriculture News</h1>
        <p className="subheading">Updates on farming, food production, and agricultural technology.</p>
      </header>

      <main className="article-list">
        {agricultureArticles.map((article) => (
          <Link to={`/news/agriculture/${article.id}`} key={article.id} className="article-card-link">
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

export default Agriculture;

