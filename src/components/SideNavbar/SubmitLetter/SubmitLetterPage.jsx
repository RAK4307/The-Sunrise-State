import React, { useState, useEffect } from 'react';
import './SubmitLetterPage.css';

const SubmitLetterPage = () => {
  const [letterDetails, setLetterDetails] = useState({
    fullName: '',
    email: '',
    city: '',
    letterContent: ''
  });
  const [submissionMessage, setSubmissionMessage] = useState('');

  // Effect to clear the submission message after 3 seconds
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
    setLetterDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend.
    console.log('Submitting letter:', letterDetails);
    setSubmissionMessage('Thank you! Your letter has been submitted for review.');
    // Reset the form after submission
    setLetterDetails({
      fullName: '',
      email: '',
      city: '',
      letterContent: ''
    });
  };

  return (
    <div className="page-wrapper">
      {submissionMessage && <div className="message-box">{submissionMessage}</div>}
      <div className="form-card">
        <div className="form-header">
          <h2>Submit a Letter to the Editor</h2>
          <p>We welcome your opinions. Letters should preferably be 150 to 200 words.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={letterDetails.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className="input-field"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={letterDetails.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="input-field"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="city">City / Town</label>
            <input
              type="text"
              id="city"
              name="city"
              value={letterDetails.city}
              onChange={handleChange}
              placeholder="e.g., Amaravati"
              className="input-field"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="letterContent">Your Letter</label>
            <textarea
              id="letterContent"
              name="letterContent"
              value={letterDetails.letterContent}
              onChange={handleChange}
              rows="8"
              placeholder="Write your letter here..."
              className="input-field"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit Letter
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitLetterPage;