import React, { useState, useEffect } from 'react';
import './NewslettersPage.css';

const newsletters = [
  {
    name: 'Daily Briefing',
    description: 'Get the day\'s top stories and analysis delivered to your inbox every morning.',
    frequency: 'Daily'
  },
  {
    name: 'Weekly Wrap-Up',
    description: 'A curated look at the most important stories of the week, with exclusive commentary.',
    frequency: 'Weekly'
  },
  {
    name: 'Tech & Science',
    description: 'Stay ahead of the curve with the latest breakthroughs in technology and science.',
    frequency: 'Bi-weekly'
  }
];

const NewslettersPage = () => {
  const [email, setEmail] = useState('');
  const [submissionMessage, setSubmissionMessage] = useState('');

  useEffect(() => {
    if (submissionMessage) {
      const timer = setTimeout(() => {
        setSubmissionMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submissionMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would integrate with your email marketing service (e.g., Mailchimp, ConvertKit).
    console.log('Subscribing email:', email);
    setSubmissionMessage(`Thank you for subscribing! A confirmation has been sent to ${email}.`);
    setEmail('');
  };

  return (
    <div className="newsletter-page-wrapper">
      {submissionMessage && <div className="message-box">{submissionMessage}</div>}
      <div className="newsletter-card">
        <header className="newsletter-header">
          <h1>Our Newsletters</h1>
          <p>Stay informed with our curated newsletters, delivered straight to your inbox.</p>
        </header>

        <section className="newsletter-list">
          {newsletters.map((newsletter, index) => (
            <div key={index} className="newsletter-item">
              <div className="newsletter-info">
                <h3>{newsletter.name}</h3>
                <p>{newsletter.description}</p>
              </div>
              <span className="newsletter-frequency">{newsletter.frequency}</span>
            </div>
          ))}
        </section>

        <section className="subscription-form-section">
          <h3>Subscribe Now</h3>
          <form onSubmit={handleSubmit} className="subscription-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="input-field"
              required
            />
            <button type="submit" className="submit-button">
              Subscribe
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default NewslettersPage;