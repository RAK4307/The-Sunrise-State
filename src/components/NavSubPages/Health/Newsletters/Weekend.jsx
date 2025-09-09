import React from 'react';
import './Style.css';

const healthWeekendNewsletters = [
  {
    title: "Health Weekend Edition",
    date: "September 6-7, 2025",
    summary: "In-depth features, interviews, and wellness guides for your weekend reading.",
    link: "#"
  },
  // Add more weekend newsletters here
];

function Weekend() {
  return (
    <div className="category-page-container">
      <div className="author-profile-header">
        <h1 className="main-heading">Health Weekend Newsletters</h1>
        <p className="subheading">Explore expert insights and health stories every weekend.</p>
      </div>
      <div className="article-list">
        {healthWeekendNewsletters.map((nl, idx) => (
          <div key={idx} className="article-card">
            <div className="article-content">
              <h2 className="article-title">{nl.title}</h2>
              <p className="article-summary">{nl.summary}</p>
              <div className="article-meta">
                <span className="article-date">{nl.date}</span>
              </div>
              <a href={nl.link} className="article-author">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Weekend;