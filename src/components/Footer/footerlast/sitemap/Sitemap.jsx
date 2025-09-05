import React from 'react';
import { Link } from 'react-router-dom';
import './Sitemap.css';

const Sitemap = () => {
  // Generate years from 2025 down to 1990
  const startYear = 2025;
  const endYear = 1990;
  const years = Array.from({ length: startYear - endYear + 1 }, (_, i) => startYear - i);

  return (
    <div className="sitemap-container">
      <main className="sitemap-content">
        <header className="sitemap-header">
          <h1>Site Map</h1>
        </header>

        <nav className="sitemap-tabs" aria-label="Sitemap time navigation">
          <Link to="#" className="tab-link active">Today</Link>
          <Link to="#" className="tab-link">Yesterday</Link>
          <Link to="#" className="tab-link">This Week</Link>
          <Link to="#" className="tab-link">Last Week</Link>
        </nav>

        <div className="sitemap-main-grid">
          <section className="sitemap-column">
            <h2>Today's Articles</h2>
            <ul>
              <li><Link to="#">Article Title One</Link></li>
              <li><Link to="#">Another Interesting Article</Link></li>
              <li><Link to="#">The Third Story of the Day</Link></li>
            </ul>
          </section>

          <section className="sitemap-column">
            <h2>Categories</h2>
            <ul>
              <li><Link to="/categories/business">Business</Link></li>
              <li><Link to="/categories/sci-tech">Sci-Tech</Link></li>
              <li><Link to="/categories/culture">Culture</Link></li>
              <li><Link to="/categories/entertainment">Entertainment</Link></li>
              <li><Link to="/categories/sport">Sport</Link></li>
            </ul>
          </section>

          <section className="sitemap-column">
            <h2>Authors</h2>
            <ul>
              <li>Priya Sharma</li>
              <li>Rajesh Kumar</li>
              <li>Amit Verma</li>
            </ul>
          </section>
        </div>

        <section className="years-section">
          <h2>Years</h2>
          <div className="years-grid">
            {years.map(year => <Link key={year} to={`/archives/${year}`}>{year}</Link>)}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Sitemap;