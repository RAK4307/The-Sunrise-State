import React from 'react';
import '../../Amaravati/TopAuthors/Style.css';

const dailyBusinessNewsletters = [
  {
    title: "Business Daily Briefing",
    date: "September 5, 2025",
    summary: "Essential business news and market updates for your day.",
    link: "#"
  },
  // Add more daily newsletters here
];

function Daily() {
  return (
    <div className="category-page-container">
      <div className="author-profile-header">
        <h1 className="main-heading">Business Daily Newsletters</h1>
        <p className="subheading">Stay updated with daily business insights and market trends.</p>
      </div>
      <div className="article-list">
        {dailyBusinessNewsletters.map((nl, idx) => (
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