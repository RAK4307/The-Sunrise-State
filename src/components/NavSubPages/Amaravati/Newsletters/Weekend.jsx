import React from 'react';
import './Weekend.css';

const weekendNewsletters = [
  {
    title: "Amaravati Weekend Edition",
    date: "September 6-7, 2025",
    summary: "In-depth stories, interviews, and features for your weekend reading.",
    link: "#"
  },
  // Add more weekend newsletters here
];

function Weekend() {
  return (
    <div className="weekend-newsletter-page">
      <h1 className="weekend-newsletter-title">Amaravati Weekend Newsletters</h1>
      <ul className="weekend-newsletter-list">
        {weekendNewsletters.map((nl, idx) => (
          <li key={idx} className="weekend-newsletter-card">
            <h2 className="weekend-newsletter-card-title">{nl.title}</h2>
            <p className="weekend-newsletter-card-date">{nl.date}</p>
            <p className="weekend-newsletter-card-summary">{nl.summary}</p>
            <a href={nl.link} className="weekend-newsletter-read-more">Read More</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Weekend;