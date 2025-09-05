import React, { useState, useEffect } from 'react';
import './AdvertisePage.css';

const AdvertisePage = () => {
  const [contactDetails, setContactDetails] = useState({
    fullName: '',
    companyName: '',
    email: '',
    message: ''
  });
  const [submissionMessage, setSubmissionMessage] = useState('');

  useEffect(() => {
    if (submissionMessage) {
      const timer = setTimeout(() => {
        setSubmissionMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submissionMessage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this data would be sent to your sales/marketing team's inbox.
    console.log('Submitting advertising inquiry:', contactDetails);
    setSubmissionMessage('Thank you for your interest! Our team will contact you shortly.');
    setContactDetails({
      fullName: '',
      companyName: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="advertise-page-wrapper">
      {submissionMessage && <div className="message-box">{submissionMessage}</div>}
      <div className="advertise-card">
        <header className="advertise-header">
          <h2>Advertise with The Sunrise State</h2>
          <p>Connect with a dedicated and engaged audience. Reach readers who are passionate about insightful news and analysis.</p>
        </header>

        <section className="advertise-options">
          <h3>Our Offerings</h3>
          <ul>
            <li><strong>Display Advertising:</strong> Premium placements across our website.</li>
            <li><strong>Sponsored Content:</strong> Collaborate with our team to create compelling articles.</li>
            <li><strong>Newsletter Sponsorships:</strong> Feature your brand in our daily and weekly newsletters.</li>
            <li><strong>Custom Campaigns:</strong> We can create a bespoke advertising package to meet your goals.</li>
          </ul>
        </section>

        <section className="contact-form-section">
          <h3>Get in Touch</h3>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" name="fullName" value={contactDetails.fullName} onChange={handleChange} placeholder="John Doe" className="input-field" required />
            </div>
            <div className="input-group">
              <label htmlFor="companyName">Company Name (Optional)</label>
              <input type="text" id="companyName" name="companyName" value={contactDetails.companyName} onChange={handleChange} placeholder="Your Company Inc." className="input-field" />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" value={contactDetails.email} onChange={handleChange} placeholder="you@company.com" className="input-field" required />
            </div>
            <div className="input-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" value={contactDetails.message} onChange={handleChange} rows="5" placeholder="Tell us about your advertising needs..." className="input-field" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Inquiry</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AdvertisePage;