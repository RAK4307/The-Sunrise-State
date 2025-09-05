import React from 'react';
import { Link } from 'react-router-dom';

// In a real-world application, this data would likely come from a CMS or an API.
const sciTechArticles = [
  {
    id: 1,
    title: 'Breakthrough in AI Allows for Real-Time Language Translation',
    summary: 'A new neural network model can translate spoken language instantly, breaking down communication barriers.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Sci-Tech+News+1',
    author: 'Dr. Evelyn Reed',
    date: 'Oct 26, 2023',
  },
  {
    id: 2,
    title: 'Hubble Successor, James Webb Telescope, Reveals Stunning New Images',
    summary: 'NASA has released the first set of breathtaking images from the James Webb Space Telescope, showing distant galaxies in unprecedented detail.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Sci-Tech+News+2',
    author: 'Marcus Chen',
    date: 'Oct 25, 2023',
  },
  {
    id: 3,
    title: 'Quantum Computing Reaches New Milestone in Stability',
    summary: 'Researchers have successfully maintained a quantum state for a record duration, a major step towards viable quantum computers.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Sci-Tech+News+3',
    author: 'Alia Khan',
    date: 'Oct 24, 2023',
  },
  {
    id: 4,
    title: 'Lab-Grown Organs: The Future of Transplant Medicine?',
    summary: 'Advancements in bio-printing and stem cell research are bringing personalized, lab-grown organs closer to reality.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Sci-Tech+News+4',
    author: 'Ben Carter',
    date: 'Oct 23, 2023',
  },
];

const SciTech = () => {
  return (
    <div className="category-page-container">
      <nav aria-label="breadcrumb" className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/news">News</Link> / <span>Sci-Tech</span>
      </nav>

      <header className="category-header">
        <h1 className="main-heading">Sci-Tech News</h1>
        <p className="subheading">The latest breakthroughs and discoveries in science and technology.</p>
      </header>

      <main className="article-list">
        {sciTechArticles.map((article) => (
          <Link to={`/news/sci-tech/${article.id}`} key={article.id} className="article-card-link">
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

export default SciTech;
