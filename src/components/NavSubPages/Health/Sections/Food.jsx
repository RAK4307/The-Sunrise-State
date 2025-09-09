import React from 'react';
import './Style.css';

const foodArticles = [
  {
    id: 1,
    title: 'Healthy Eating: Nutrition Tips',
    summary: 'Expert advice on balanced diets and nutritious meals.',
    author: 'Meena Das',
    date: 'Sep 5, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Food+News+1',
  },
  {
    id: 2,
    title: 'Superfoods for Wellness',
    summary: 'Explore the benefits of superfoods for overall health.',
    author: 'Lakshmi Reddy',
    date: 'Sep 4, 2025',
    imageUrl: 'https://via.placeholder.com/400x250?text=Food+News+2',
  },
];

const Food = () => (
  <div className="category-page-container">
    <header className="category-header">
      <h1 className="main-heading">Food & Nutrition News</h1>
      <p className="subheading">Guides, recipes, and tips for healthy eating.</p>
    </header>
    <div className="article-list">
      {foodArticles.map((article) => (
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

export default Food;