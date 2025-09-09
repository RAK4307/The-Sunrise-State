import React from 'react';
import './Style.css';

const worldDailyNewsletters = [
  {
    title: "World Daily Digest",
    date: "September 5, 2025",
    summary: "Daily global news updates, international affairs, and expert analysis.",
    link: "#"
  },
  // Add more daily newsletters here
];

function Daily() {
  return (
    <div className="category-page-container">
      <div className="author-profile-header">
        <h1 className="main-heading">World Daily Newsletters</h1>
        <p className="subheading">Stay informed with daily updates from around the globe.</p>
      </div>
      <div className="article-list">
        {worldDailyNewsletters.map((nl, idx) => (
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

export default Daily;