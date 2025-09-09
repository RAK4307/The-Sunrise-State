import React from 'react';
import './Style.css';

const worldWeekendNewsletters = [
  {
    title: "World Weekend Edition",
    date: "September 6-7, 2025",
    summary: "Special features, interviews, and in-depth coverage of global events for your weekend reading.",
    link: "#"
  },
  // Add more weekend newsletters here
];

function Weekend() {
  return (
    <div className="category-page-container">
      <div className="author-profile-header">
        <h1 className="main-heading">World Weekend Newsletters</h1>
        <p className="subheading">Explore global stories and features every weekend.</p>
      </div>
      <div className="article-list">
        {worldWeekendNewsletters.map((nl, idx) => (
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