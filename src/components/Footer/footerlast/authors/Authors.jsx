import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import './Authors.css';

const Authors = () => {
  return (
    <div className="authors-page-container">
      <main className="authors-content">
        {/* Breadcrumb Navigation */}
        <nav aria-label="breadcrumb" className="breadcrumb-nav">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/archives">Archives</Link>
          <span className="separator">/</span>
          <span className="current-page">author</span>
        </nav>

        {/* Header Section */}
        <header className="authors-header">
          <div className="title-container">
            <Calendar className="calendar-icon" size={24} />
            <h1 className="authors-title">author</h1>
          </div>
          <p className="authors-subtitle">0 articles published</p>
        </header>

        {/* Pagination Links */}
        <nav className="pagination-nav" aria-label="Year navigation">
          <Link to="#" className="prev-link">
            <ArrowLeft size={16} />
            <span>Previous Year</span>
          </Link>
          <Link to="#" className="next-link">
            <span>Next Year</span>
            <ArrowRight size={16} />
          </Link>
        </nav>

        {/* Main Empty State Message */}
        <section className="empty-state">
          <h2 className="empty-state-title">No articles found</h2>
          <p className="empty-state-text">No articles were published on author.</p>
          <Link to="/" className="back-link">
            <span aria-hidden="true">←</span> Back to Homepage
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Authors;
