import React from 'react';
import './Cookies.css';

// The main component for the Cookie Policy page.
const Cookies = () => {
  return (
    <div className="cookie-policy-container">
      <article className="cookie-policy-content">
        <header className="cookie-policy-header">
          <h1>Cookie Policy</h1>
        </header>

        <p className="intro-text">
          This Cookie Policy explains how The Sunrise State uses cookies and similar technologies to provide you with a better experience on our website.
        </p>

        <section className="section">
          <h2 className="section-title">What Are Cookies</h2>
          <p>
            Cookies are small text files that are stored on your computer or mobile device when you visit a website. They help us remember your preferences and improve your browsing experience.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">How We Use Cookies</h2>
          <p>We use cookies for the following purposes:</p>
          <ul className="cookie-list">
            <li>To remember your login status and preferences</li>
            <li>To analyze website traffic and user behavior</li>
            <li>To provide personalized content and advertisements</li>
            <li>To improve website functionality and performance</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">Types of Cookies We Use</h2>
          <h3 className="sub-title">Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas.
          </p>
          <h3 className="sub-title">Performance Cookies</h3>
          <p>
            These cookies collect information about how visitors use our website, helping us improve its performance and user experience.
          </p>
          <h3 className="sub-title">Functionality Cookies</h3>
          <p>
            These cookies remember your preferences and settings to provide a more personalized experience.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Managing Cookies</h2>
          <p>
            You can control and manage cookies in your browser settings. Please note that disabling certain cookies may affect the functionality of our website.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Contact Us</h2>
          <p>
            If you have any questions about our Cookie Policy, please contact us at <a href="mailto:privacy@thesunrisestate.com" className="cookie-policy-link">privacy@thesunrisestate.com</a>.
          </p>
        </section>
      </article>
    </div>
  );
};

export default Cookies;

