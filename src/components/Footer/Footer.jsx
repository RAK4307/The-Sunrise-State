import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'

// --- Data for Footer Links ---
// This approach makes the footer easier to update and manage.

const footerLinkColumns = [
  {
    title: 'NEWS',
    links: [
      { text: 'World', path: '/news/world' , isStrong: true },
      { text: 'India', path: '/news/india' },
      { text: 'Amaravati', path: '/news/amaravati' },
      { text: 'Vizag', path: '/news/vizag' },
      { text: 'Andhra Pradesh', path: '/news/andhra-pradesh' },
      { text: 'Telangana', path: '/news/telangana' },
      { text: 'Hyderabad', path: '/news/hyderabad' },
      { text: 'US', path: '/news/us' },
      { text: 'Sri Lanka', path: '/news/sri-lanka' },
    ],
  },
  {
    title: 'OPINION',
    links: [
      { text: 'Op-Ed', path: '/opinion/op-ed' },
      { text: 'Editorial', path: '/opinion/editorial' },
      { text: 'Interview', path: '/opinion/interview' },
      { text: 'Letters', path: '/opinion/letters' },
    ],
  },
  {
    title: 'WEB STORIES',
    links: [
      { text: 'Featured Stories', path: '/web-stories/featured' },
      { text: 'Health Stories', path: '/web-stories/health' },
      { text: 'Politics Stories', path: '/web-stories/politics' },
      { text: 'Tech Stories', path: '/web-stories/tech' },
      { text: 'Celeb Stories', path: '/web-stories/celebs' },
      { text: 'Sport Stories', path: '/web-stories/sport' },
      { text: 'Food Recipes', path: '/web-stories/food' },
      { text: 'Movie Reviews', path: '/web-stories/movies' },
    ],
  },
  {
    title: 'CATEGORIES',
    links: [
      { text: 'Business', path: '/categories/business' },
      { text: 'Sci-Tech', path: '/categories/sci-tech' },
      { text: 'Culture', path: '/categories/culture' },
      { text: 'Entertainment', path: '/categories/entertainment' },
      { text: 'Sport', path: '/categories/sport' },
      { text: 'Life & Style', path: '/categories/life-style' },
      { text: 'Health', path: '/categories/health' },
      { text: 'Agriculture', path: '/categories/agriculture' },
    ],
  },
  {
    title: 'LATEST UPDATES',
    links: [
      { text: 'Politics', path: '/latest/politics' },
      { text: 'Weather', path: '/latest/weather' },
      { text: 'Climate Change', path: '/latest/climate-change' },
      { text: 'Real Estate', path: '/latest/real-estate' },
      { text: 'Outdoors', path: '/latest/outdoors' },
    ],
  },
  {
    title: 'ACCOUNT',
    links: [
      { text: 'Advertise', path: '/advertise' },
      { text: 'Submit Letter', path: '/submit-letter' },
      { text: 'Editorial Policy', path: '/editorial-policy', isStrong: true },
      { text: 'Newsletters', path: '/newsletters' },
      { text: 'Subscribe', path: '/subscribe' },
      { text: 'Refund Policy', path: '/refund-policy', isStrong: true },
    ],
  },
]; 

const footerBottomLinks = [
  { text: 'About Us', path: '/about-us' },
  { text: 'Authors', path: '/authors' },
  { text: 'Contact Us', path: '/contact' },
  { text: 'Careers', path: '/careers' },
  { text: 'Grievance Redressal', path: '/grievance-redressal' },
  { text: 'Cookies', path: '/cookies' },
  { text: 'Privacy Policy', path: '/privacy' },
  { text: 'Terms of Service', path: '/terms' },
  { text: 'Sitemap', path: '/sitemap' },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main footer content with title and link columns */}
        <div className="footer-main">
          <div className="footer-title-section">
            <h2 className="footer-title">The Sunrise State</h2>
          </div>

          {/* Grid container for all the link columns */} 
          <div className="footer-links">
            {footerLinkColumns.map((column) => (
              <div key={column.title} className="footer-column">
                <h4>{column.title}</h4>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.text}>
                      <Link to={link.path}>
                        {link.isStrong ? <strong>{link.text}</strong> : link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar with copyright and secondary navigation */}
        <div className="footer-bottom-bar">
          <p className="copyright">&copy; 2025 The Sunrise State</p>
          <nav className="footer-bottom-nav">
            <ul>
              {footerBottomLinks.map((link) => (
                <li key={link.text}>
                  <Link to={link.path}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer