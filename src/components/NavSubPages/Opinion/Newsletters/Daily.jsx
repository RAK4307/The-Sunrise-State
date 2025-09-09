import React from 'react';
import './Style.css';

const opinionDailyNewsletters = [
  {
    title: "Opinion Daily Digest",
    date: "September 5, 2025",
    summary: "Daily expert opinions, editorials, and commentary on current affairs.",
    link: "#"
  },
  // Add more daily newsletters here
];

function Daliy() {
  return (
    <div className="category-page-container">
      <div className="author-profile-header">
        <h1 className="main-heading">Opinion Daily Newsletters</h1>
        <p className="subheading">Fresh perspectives and expert commentary every day.</p>
      </div>
      <div className="article-list">
        {opinionDailyNewsletters.map((nl, idx) => (
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

export default Daliy;