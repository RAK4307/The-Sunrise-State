import React from 'react';
import './Style.css';

const sciTechDailyNewsletters = [
  {
    title: "SciTech Daily Digest",
    date: "September 5, 2025",
    summary: "Daily updates on science and technology breakthroughs, research, and innovation.",
    link: "#"
  },
  // Add more daily newsletters here
];

function Daliy() {
  return (
    <div className="category-page-container">
      <div className="author-profile-header">
        <h1 className="main-heading">SciTech Daily Newsletters</h1>
        <p className="subheading">Stay updated with the latest in science and technology every day.</p>
      </div>
      <div className="article-list">
        {sciTechDailyNewsletters.map((nl, idx) => (
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