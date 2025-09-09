import React from 'react';
import './Daily.css';

const dailyNewsletters = [
  {
    title: "Amaravati Daily Bulletin",
    date: "September 5, 2025",
    summary: "Your daily digest of Amaravati news and events.",
    link: "#"
  },
  // Add more daily newsletters here
];

function Daily() {
  return (
    <div className="daily-newsletter-page">
      <h1 className="daily-newsletter-title">Amaravati Daily Newsletters</h1>
      <ul className="daily-newsletter-list">
        {dailyNewsletters.map((nl, idx) => (
          <li key={idx} className="daily-newsletter-card">
            <h2 className="daily-newsletter-card-title">{nl.title}</h2>
            <p className="daily-newsletter-card-date">{nl.date}</p>
            <p className="daily-newsletter-card-summary">{nl.summary}</p>
            <a href={nl.link} className="daily-newsletter-read-more">Read More</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Daily;