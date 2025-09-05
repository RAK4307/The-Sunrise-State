import React from 'react';
import { Link } from 'react-router-dom';
import './TermsofService.css';

// The main component for the Terms of Service page.
const TermsOfService = () => {
  return (
    <div className="terms-container">
      <article className="terms-content">
        <header className="terms-header">
          <h1>Terms of Service</h1>
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
          Welcome to The Sunrise State. These Terms of Service govern your use of our website, mobile applications, and related services. By accessing or using our services, you agree to be bound by these terms.
        </p>

        <section className="section">
          <h2 className="section-title">Acceptance of Terms</h2>
          <p>By accessing and using The Sunrise State website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
        </section>

        <section className="section">
          <h2 className="section-title">Use License</h2>
          <p>Permission is granted to temporarily download one copy of the materials on The Sunrise State's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
          <ul className="terms-list">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
          </ul>
          <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by The Sunrise State at any time.</p>
        </section>

        <section className="section">
          <h2 className="section-title">Content and Intellectual Property</h2>
          <p>All content on The Sunrise State, including text, graphics, logos, images, audio clips, video, data compilations, and software, is the property of The Sunrise State or its content suppliers and is protected by copyright laws.</p>
        </section>

        <section className="section">
          <h2 className="section-title">User-Generated Content</h2>
          <p>By submitting content to our website (including comments, letters to the editor, or other communications), you grant The Sunrise State a non-exclusive, royalty-free, perpetual license to use, modify, and publish such content.</p>
        </section>

        <section className="section">
          <h2 className="section-title">Account Terms</h2>
          <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.</p>
          <h3 className="sub-title">Account Responsibilities</h3>
          <ul className="terms-list">
            <li>You must be at least 13 years old to create an account</li>
            <li>You must provide accurate and complete registration information</li>
            <li>You are responsible for maintaining the security of your account and password</li>
            <li>You must notify us immediately of any unauthorized use of your account</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">Prohibited Uses</h2>
          <p>You may not use our service:</p>
          <ul className="terms-list">
            <li>For any unlawful purpose or to solicit others to unlawful acts</li>
            <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
            <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
            <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
            <li>To submit false or misleading information</li>
            <li>To upload or transmit viruses or any other type of malicious code</li>
            <li>To spam, phish, farm, pretext, spider, crawl, or scrape</li>
            <li>For any obscene or immoral purpose</li>
            <li>To interfere with or circumvent the security features of the service</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">Subscription Terms</h2>
          <p>Some of our services require a paid subscription. Subscription fees are charged in advance on a recurring basis and are non-refundable except as required by law or as otherwise stated in our refund policy.</p>
          <h3 className="sub-title">Billing</h3>
          <ul className="terms-list">
            <li>Subscription fees will be charged to your designated payment method</li>
            <li>Subscriptions automatically renew unless cancelled</li>
            <li>Price changes will be communicated with 30 days notice</li>
            <li>You may cancel your subscription at any time from your account settings</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">Disclaimer</h2>
          <p>The materials on The Sunrise State's website are provided on an 'as is' basis. The Sunrise State makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        </section>

        <section className="section">
          <h2 className="section-title">Limitations</h2>
          <p>In no event shall The Sunrise State or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on The Sunrise State's website, even if The Sunrise State or its authorized representative has been notified orally or in writing of the possibility of such damage.</p>
        </section>

        <section className="section">
          <h2 className="section-title">Privacy Policy</h2>
          <p>Your privacy is important to us. Please review our <Link to="/privacy" className="terms-link">Privacy Policy</Link>, which also governs your use of the website, to understand our practices.</p>
        </section>

        <section className="section">
          <h2 className="section-title">Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws of the State where The Sunrise State is headquartered and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.</p>
        </section>

        <section className="section">
          <h2 className="section-title">Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. We will notify users of material changes via email or through a notice on our website. Your continued use of the service after such modifications constitutes acceptance of the new terms.</p>
        </section>

        <section className="section">
          <h2 className="section-title">Contact Information</h2>
          <p>If you have any questions about these Terms of Service, please contact us at:</p>
          <address className="address-block">
            <strong>The Sunrise State</strong><br />
            Email: <a href="mailto:legal@thesunrisestate.com">legal@thesunrisestate.com</a><br />
            Phone: (555) 123-4567<br />
            Address: 123 News Street, Media City, State 12345
          </address>
          <p className="last-updated">Last updated: January 30, 2025</p>
        </section>
      </article>
    </div>
  );
};

export default TermsOfService;
