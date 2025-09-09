import React from 'react';
import './Style.css';

const entertainmentDailyNewsletters = [
  {
    title: "Entertainment Daily Digest",
    date: "September 5, 2025",
    summary: "Your daily dose of movies, music, celebrity news, and pop culture.",
    link: "#"
  },
  // Add more daily newsletters here
];

function Daily() {
  return (
    <div className="category-page-container">
      <div className="author-profile-header">
        <h1 className="main-heading">Entertainment Daily Newsletters</h1>
        <p className="subheading">Catch up on the latest in entertainment every day.</p>
      </div>
      <div className="article-list">
        {entertainmentDailyNewsletters.map((nl, idx) => (
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