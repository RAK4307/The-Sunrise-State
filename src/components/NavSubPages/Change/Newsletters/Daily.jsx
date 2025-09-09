import React from 'react';
import '../../Business/Newsletters/Style.css';

const changeDailyNewsletters = [
  {
    title: "Change Daily Digest",
    date: "September 5, 2025",
    summary: "Your daily roundup of change-makers, innovation, and transformation stories.",
    link: "#"
  },
  // Add more daily newsletters here
];

function Daily() {
  return (
    <div className="category-page-container">
      <div className="author-profile-header">
        <h1 className="main-heading">Change Daily Newsletters</h1>
        <p className="subheading">Stay inspired with daily stories of progress and impact.</p>
      </div>
      <div className="article-list">
        {changeDailyNewsletters.map((nl, idx) => (
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
