import React from 'react';
import { Link } from 'react-router-dom';
import './Grievance.css';

// The main component for the Grievance Redressal page.
const GrievanceRedressal = () => {
  return (
    <div className="grievance-container">
      <article className="grievance-content">
        <header className="grievance-header">
          <h1>Grievance Redressal</h1>
        </header>

        <p className="intro-text">
          At The Sunrise State, we are committed to providing excellent service and addressing your concerns promptly and fairly. This page outlines our grievance redressal mechanism.
        </p>

        <section className="section">
          <h2 className="section-title">Our Commitment</h2>
          <p>
            We believe in transparent and accountable journalism. If you have any concerns about our content, services, or editorial decisions, we want to hear from you.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Types of Grievances</h2>
          <p>We handle the following types of complaints:</p>
          <ul className="grievance-list">
            <li>Editorial concerns and factual corrections</li>
            <li>Privacy and data protection issues</li>
            <li>Subscription and billing problems</li>
            <li>Website technical issues</li>
            <li>Advertising and content placement concerns</li>
            <li>General feedback and suggestions</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">How to File a Grievance</h2>
          <h3 className="sub-title">Email</h3>
          <p>
            Send your complaint to: <a href="mailto:grievance@thesunrisestate.com" className="grievance-link">grievance@thesunrisestate.com</a>
          </p>
          <h3 className="sub-title">Postal Mail</h3>
          <p className="address-text">
            Grievance Officer <br />
            The Sunrise State <br />
            123 News Plaza <br />
            Amaravati, Andhra Pradesh 522503
          </p>
          <h3 className="sub-title">Online Form</h3>
          <p>
            You can also submit your grievance through our contact form on the <Link to="/contact" className="grievance-link">Contact Us</Link> page.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Information to Include</h2>
          <p>When filing a grievance, please provide:</p>
          <ul className="grievance-list">
            <li>Your full name and contact information</li>
            <li>Date and nature of the incident</li>
            <li>Specific article or service in question (if applicable)</li>
            <li>Detailed description of your concern</li>
            <li>Any supporting documentation</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">Resolution Process</h2>
          <p>Our grievance redressal process follows these steps:</p>
          <ul className="grievance-list">
            <li><strong>Acknowledgment:</strong> We will acknowledge receipt of your complaint within 24 hours.</li>
            <li><strong>Investigation:</strong> Our team will investigate the matter thoroughly.</li>
            <li><strong>Response:</strong> We will provide a detailed response within 7 business days.</li>
            <li><strong>Follow-up:</strong> If needed, we will follow up to ensure your satisfaction.</li>
          </ul>
        </section>
        
        <section className="section">
          <h2 className="section-title">Grievance Officer</h2>
          <p className="officer-name"><strong>Ms. Priya Sharma</strong></p>
          <p className="officer-title">Grievance Officer</p>
          <p className="officer-details">
            <strong>Email:</strong> <a href="mailto:grievance@thesunrisestate.com" className="grievance-link">grievance@thesunrisestate.com</a> <br />
            <strong>Phone:</strong> +91 8563 234 567 <br />
            <strong>Working Hours:</strong> Monday to Friday, 9:00 AM to 6:00 PM IST
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Editorial Standards</h2>
          <p>
            We adhere to the highest standards of journalism ethics. If you believe we have fallen short of these standards, please refer to our <Link to="/editorial-policy" className="grievance-link">Editorial Policy</Link> for more information.
          </p>
        </section>
      </article>
    </div>
  );
};

export default GrievanceRedressal;

