import React from 'react';
import './Style.css';

const entertainmentWeekendNewsletters = [
  {
    title: "Entertainment Weekend Edition",
    date: "September 6-7, 2025",
    summary: "Special features, interviews, and reviews for your weekend entertainment.",
    link: "#"
  },
  // Add more weekend newsletters here
];

function Weekend() {
  return (
    <div className="category-page-container">
      <div className="author-profile-header">
        <h1 className="main-heading">Entertainment Weekend Newsletters</h1>
        <p className="subheading">Enjoy exclusive entertainment content every weekend.</p>
      </div>
      <div className="article-list">
        {entertainmentWeekendNewsletters.map((nl, idx) => (
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