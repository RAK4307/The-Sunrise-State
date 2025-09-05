import React from 'react';
import { Link } from 'react-router-dom';
import './SideNavbar.css';

const SideNavbar = ({ isOpen, onClose }) => {
  // Updated to an array of objects for proper routing
  const navLinks = [
    { name: 'World', path: '/news/world' },
    { name: 'India', path: '/news/india' },
    { name: 'Amaravati', path: '/news/amaravati' },
    { name: 'Business', path: '/news/business' },
    { name: 'Sci-Tech', path: '/news/sci-tech' },
    { name: 'Opinion', path: '/opinion/oped' },
    { name: 'Climate Change', path: '/news/climate-change' },
    { name: 'Entertainment', path: '/news/entertainment' },
    { name: 'Sport', path: '/news/sports' },
    { name: 'Life & Style', path: '/news/lifestyle' },
    { name: 'Health', path: '/news/health' },
  ];
 
  return (
    <>
      <div className={`slide-drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <strong className="drawer-logo">T</strong>
          <button className="icon-button close-button" onClick={onClose}>✖</button>
        </div>

        <ul className="drawer-links"> 
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path} onClick={onClose}>
                {link.name} <span className="chevron">›</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="drawer-footer">
          <Link to="/subscribe" className="subscribe-btn" onClick={onClose}>Subscribe</Link>
          <Link to="/login" className="signin-btn" onClick={onClose}>Sign In</Link>
          <Link to="/submit-letter" className="submit-letter-link" onClick={onClose}>
            Submit a Letter
          </Link>
        </div>
      </div>

      {isOpen && <div className="drawer-overlay" onClick={onClose}></div>}
    </>
  );
};

export default SideNavbar;
