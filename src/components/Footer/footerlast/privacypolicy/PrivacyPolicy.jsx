import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <article className="privacy-policy-content">
        <header className="privacy-policy-header">
          <h1>Privacy Policy</h1>
          <div className="byline">
            <p>By</p>
            <p className="editorial-board">The Editorial Board</p>
          </div>
          <div className="date-info">
            <p>Published on January 15, 2025</p>
            <p>Updated on January 30, 2025</p>
          </div>
        </header>

        <p className="intro-text">
          At The Sunrise State, we are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
        </p>

        <section className="section">
          <h2 className="section-title">Information We Collect</h2>
          <h3 className="sub-title">Information You Provide</h3>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul className="privacy-list">
            <li>Subscribe to our newsletter or create an account</li>
            <li>Submit comments on articles or contact us</li>
            <li>Participate in surveys, contests, or promotional activities</li>
            <li>Subscribe to our paid services</li>
          </ul>
          <p>This information may include your name, email address, postal address, phone number, and payment information.</p>

          <h3 className="sub-title">Automatically Collected Information</h3>
          <p>When you access our website, we automatically collect certain information about your device and browsing behavior, including:</p>
          <ul className="privacy-list">
            <li>IP address and location data</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent on our site</li>
            <li>Referring website addresses</li>
            <li>Device information (type, operating system, screen resolution)</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="privacy-list">
            <li>Provide, maintain, and improve our services</li>
            <li>Process subscription payments and manage accounts</li>
            <li>Send newsletters and updates about our content</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Analyze website usage and improve user experience</li>
            <li>Detect, prevent, and address technical issues</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">Information Sharing and Disclosure</h2>
          <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:</p>
          <ul className="privacy-list">
            <li>Service providers who assist us in operating our website and conducting business</li>
            <li>Legal requirements, such as responding to subpoenas or court orders</li>
            <li>Protection of our rights, property, or safety, or that of our users</li>
            <li>Business transfers, such as mergers or acquisitions</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.</p>
        </section>

        <section className="section">
          <h2 className="section-title">Your Rights and Choices</h2>
          <p>Depending on your location, you may have the following rights:</p>
          <ul className="privacy-list">
            <li>Access to your personal information</li>
            <li>Correction of inaccurate information</li>
            <li>Deletion of your personal information</li>
            <li>Restriction of processing</li>
            <li>Data portability</li>
            <li>Objection to processing</li>
          </ul>
          <p>To exercise these rights, please contact us using the information provided below.</p>
        </section>

        <section className="section">
          <h2 className="section-title">Cookies and Tracking Technologies</h2>
          <p>We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. You can control cookies through your browser settings.</p>
        </section>

        <section className="section">
          <h2 className="section-title">Third-Party Links</h2>
          <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>
        </section>

        <section className="section">
          <h2 className="section-title">Children's Privacy</h2>
          <p>Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it.</p>
        </section>

        <section className="section">
          <h2 className="section-title">Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
        </section>

        <section className="section">
          <h2 className="section-title">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us at:</p>
          <address className="address-block">
            <strong>The Sunrise State</strong><br />
            Email: <a href="mailto:privacy@thesunrisestate.com">privacy@thesunrisestate.com</a><br />
            Phone: (555) 123-4567<br />
            Address: 123 News Street, Media City, State 12345
          </address>
        </section>
      </article>
    </div>
  );
};

export default PrivacyPolicy;