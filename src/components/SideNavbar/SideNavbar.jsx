import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {navMenuData} from '../Navbar/navMenuData';
import './SideNavbar.css';

const SideNavbar = ({ isOpen, onClose }) => {
  const [hovered, setHovered] = useState(null);

  const navLinks = [
    { name: 'World' },
    { name: 'India' },
    { name: 'Amaravati' },
    { name: 'Business' },
    { name: 'Sci-Tech' },
    { name: 'Opinion' },
    { name: 'Change' },
    { name: 'Entertainment' },
    { name: 'Sport' },
    { name: 'LifeStyle' },
    { name: 'Health' },
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
            <li
              key={link.name}
              onMouseEnter={() => setHovered(link.name)}
              onMouseLeave={() => setHovered(null)}
            >
              <Link to={link.path} onClick={onClose}>
                {link.name} <span className="chevron">›</span>
              </Link>
              {/* Show section panel if hovered */}
              {hovered === link.name && navMenuData[link.name] && (
                <div className="sidebar-section-panel">
                  <div className="panel-content">
                    <h2 className="panel-title">{link.name}</h2>
                    <div className="panel-columns">
                      {/* Sections */}
                      {navMenuData[link.name].sections && (
                        <div className="panel-col">
                          <div className="panel-col-title">Sections</div>
                          <ul>
                            {navMenuData[link.name].sections.map((item) => (
                              <li key={item}><span>{item}</span></li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {/* Top Stories */}
                      {navMenuData[link.name].topStories && (
                        <div className="panel-col">
                          <div className="panel-col-title">Top Stories</div>
                          <ul>
                            {navMenuData[link.name].topStories.map((item) => (
                              <li key={item}><span>{item}</span></li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {/* Newsletters */}
                      {navMenuData[link.name].newsletters && (
                        <div className="panel-col">
                          <div className="panel-col-title">Newsletters</div>
                          <ul>
                            {navMenuData[link.name].newsletters.map((nl) => (
                              <li key={nl.title}>
                                <span>{nl.title}</span>
                                <span className="panel-newsletter-desc">{nl.desc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {/* Top Authors */}
                      {navMenuData[link.name].authors && (
                        <div className="panel-col">
                          <div className="panel-col-title">Top Authors</div>
                          <ul>
                            {navMenuData[link.name].authors.map((author) => (
                              <li key={author.name}>
                                <span className="panel-author-avatar">{author.initials}</span>
                                <span className="panel-author-name">{author.name}</span>
                                <span className="panel-author-desc">{author.desc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
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
