import React, { useState, useEffect } from 'react';
import './Refund.css';

const RefundPage = () => {
  const [refundDetails, setRefundDetails] = useState({
    orderId: '',
    email: '',
    reason: '',
    comments: ''
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
    setRefundDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend for processing.
    console.log('Submitting refund request:', refundDetails);
    setSubmissionMessage('Your refund request has been submitted successfully.');
    // Optionally reset the form
    setRefundDetails({
      orderId: '',
      email: '',
      reason: '',
      comments: ''
    });
  };

  return (
    <div className="page-wrapper">
      {submissionMessage && <div className="message-box">{submissionMessage}</div>}
      <div className="form-card">
        <div className="form-header">
          <h2>Request a Refund</h2>
          <p>Please fill out the form below to request a refund for your subscription or purchase.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="orderId">Order or Subscription ID</label>
            <input
              type="text"
              id="orderId"
              name="orderId"
              value={refundDetails.orderId}
              onChange={handleChange}
              placeholder="e.g., TSS-12345"
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
              value={refundDetails.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="input-field"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="reason">Reason for Refund</label>
            <select
              id="reason"
              name="reason"
              value={refundDetails.reason}
              onChange={handleChange}
              className="input-field"
              required
            >
              <option value="">-- Select a Reason --</option>
              <option value="accidental_purchase">Accidental Purchase</option>
              <option value="not_satisfied">Not Satisfied with Service</option>
              <option value="technical_issues">Technical Issues</option>
              <option value="other">Other (Please specify below)</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="comments">Additional Comments (Optional)</label>
            <textarea
              id="comments"
              name="comments"
              value={refundDetails.comments}
              onChange={handleChange}
              rows="4"
              placeholder="Provide any extra details here..."
              className="input-field"
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default RefundPage;