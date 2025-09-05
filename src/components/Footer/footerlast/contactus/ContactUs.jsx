import React from 'react';
import './Contactus.css';

const Contactus = () => {
  return (
    <div className="contact-us-container">
      <article className="contact-us-content">
        <header className="contact-us-header">
          <h1>Contact Us</h1>
          <div className="byline">
            <p>By</p>
            <p className="editorial-board">The Editorial Board</p>
          </div>
          <div className="date-info">
            <p>Published on January 20, 2025</p>
            <p>Updated on January 30, 2025</p>
          </div>
        </header>

        <div className="contact-us-body">
          <p className="lead-paragraph">
            We value your feedback, story tips, and questions. The Sunrise State is committed to serving our community, and we want to hear from you. Whether you have a news tip, feedback on our coverage, or general inquiries, we're here to listen.
          </p>

          <section className="contact-section">
            <h3>General Contact Information</h3>
            <p>Our newsroom operates 24/7 to bring you the latest news and analysis. Here are the best ways to reach us:</p>
            <ul className="contact-details">
              <li><strong>Email:</strong> info@thesunrisestate.com</li>
              <li><strong>Phone:</strong> (555) 123-4567</li>
              <li><strong>Address:</strong> 123 News Street, Media City, State 12345</li>
            </ul>
          </section>

          <section className="contact-section">
            <h3>News Tips</h3>
            <p>Have a story tip or witnessed something newsworthy? We want to hear from you. Our commitment to protecting sources means you can contact us confidentially.</p>
            <ul className="contact-details">
              <li><strong>Tips Email:</strong> tips@thesunrisestate.com</li>
              <li><strong>News Tip Line:</strong> (555) 123-TIPS</li>
            </ul>
          </section>

          <section className="contact-section">
            <h3>Editorial Inquiries</h3>
            <p>For questions about our coverage, editorial decisions, or to reach our editorial team:</p>
            <ul className="contact-details">
              <li><strong>Editorial Email:</strong> editorial@thesunrisestate.com</li>
            </ul>
          </section>

          <section className="contact-section">
            <h3>Letters to the Editor</h3>
            <p>We welcome letters to the editor from our readers. Letters should be 300 words or fewer and include your full name, address, and phone number for verification. We reserve the right to edit letters for length and clarity.</p>
            <ul className="contact-details">
              <li><strong>Letters Email:</strong> letters@thesunrisestate.com</li>
            </ul>
          </section>

          <section className="contact-section">
            <h3>Corrections and Clarifications</h3>
            <p>If you believe we have made an error in our reporting, please contact us immediately. We take accuracy seriously and will promptly investigate and correct any mistakes.</p>
            <ul className="contact-details">
              <li><strong>Corrections Email:</strong> corrections@thesunrisestate.com</li>
            </ul>
          </section>

          <section className="contact-section">
            <h3>Office Hours</h3>
            <ul className="contact-details">
              <li><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</li>
              <li><strong>Weekend:</strong> 10:00 AM - 4:00 PM</li>
              <li><strong>News Desk:</strong> Available 24/7</li>
            </ul>
            <p className="closing-note">We aim to respond to all inquiries within 24 hours during business days. For urgent news tips or breaking news, please call our news desk directly.</p>
          </section>
        </div>
      </article>
    </div>
  );
};

export default Contactus;