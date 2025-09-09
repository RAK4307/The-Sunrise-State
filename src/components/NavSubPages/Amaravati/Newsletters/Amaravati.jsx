import React from 'react';
import './Amaravati.css'; // Update this file for new class names

const newsletters = [
  {
    title: "Amaravati Weekly",
    date: "September 5, 2025",
    summary: "Top stories and updates from Amaravati.",
    link: "#"
  },
  // Add more newsletters here
];

function Amaravati() {
  return (
    <div className="amaravati-newsletter-page">
      <h1 className="amaravati-newsletter-title">Amaravati Newsletters</h1>
      <ul className="amaravati-newsletter-list">
        {newsletters.map((nl, idx) => (
          <li key={idx} className="amaravati-newsletter-card">
            <h2 className="amaravati-newsletter-card-title">{nl.title}</h2>
            <p className="amaravati-newsletter-card-date">{nl.date}</p>
            <p className="amaravati-newsletter-card-summary">{nl.summary}</p>
            <a href={nl.link} className="amaravati-newsletter-read-more">Read More</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Amaravati;