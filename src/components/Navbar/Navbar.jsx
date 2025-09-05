import React, { useState, useEffect, useRef } from 'react';
import SlideNavbar from '../SideNavbar/SideNavbar';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Search, Menu } from 'lucide-react';
import { navMenuData } from './navMenuData'; // Import data

// Helper to create URL-friendly slugs
const toUrlSlug = (text) => text.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');

// --- Mega Menu Column Components ---

// Column for Sections and Top Stories
const LinkColumn = ({ title, items, basePath }) => (
    <div className="mega-menu-column">
        <h4 className="column-header">{title}</h4>
        <ul className="column-list">
            {items.map((item) => (
                <li key={item}>
                    <Link to={`/${toUrlSlug(basePath)}/${toUrlSlug(item)}`}>{item}</Link>
                </li>
            ))}
        </ul>
    </div>
);

// Column for Newsletters
const NewsletterColumn = ({ items }) => (
    <div className="mega-menu-column">
        <h4 className="column-header">Newsletters</h4>
        {items.map((item) => {
            const iconShapeClass = item.title.toLowerCase() === 'weekend' ? 'square' : 'dot';
            return (
                <a href="#" key={item.title} className="newsletter-card">
                    <div className={`newsletter-icon ${iconShapeClass}`} style={{ backgroundColor: item.bgColor }}></div>
                    <div>
                        <p className="newsletter-title">{item.title}</p>
                        <p className="newsletter-desc">{item.description}</p>
                    </div>
                </a>
            );
        })}
    </div>
);

// Column for Top Authors
const AuthorColumn = ({ items }) => (
  <div className="mega-menu-column authors-column">
    <h4 className="column-header">Top Authors</h4>
    <div className="author-list">
        {items.map((author) => (
            <a href="#" key={author.name} className="author-item">
                <div className="author-avatar" style={{ backgroundColor: author.bgColor, color: author.textColor }}>
                    {author.initials}
                </div>
                <div>
                    <p className="author-name">{author.name}</p>
                    <p className="author-subtitle">{author.description}</p>
                </div>
            </a>
        ))}
    </div>
    <a href="#" className="see-all-authors">See all authors ›</a>
  </div>
);


const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const navLinks = Object.keys(navMenuData); // Use data from navMenuData.js
  const [isSticky, setIsSticky] = useState(false);
  const navContainerRef = useRef(null);

  useEffect(() => {
    const navContainer = navContainerRef.current;
    if (!navContainer) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the top of the element is no longer visible in the viewport, make it sticky.
        setIsSticky(!entry.isIntersecting);
      },
      { rootMargin: '0px', threshold: 1.0 }
    );

    // A simple div right before the nav container to act as the trigger
    const triggerElement = document.createElement('div');
    navContainer.before(triggerElement);
    observer.observe(triggerElement);

    return () => observer.disconnect();
  }, []);


  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  
  return (
    <>
      <header className="navbar">
        <div className="navbar-top">
          <div className="navbar-icons">
            <button 
              className="icon-button" 
              aria-label="Open menu"
              onClick={toggleDrawer} // Use toggleDrawer
            >
              <Menu />
            </button>
            <button className="icon-button" aria-label="Search">
              <Search />
            </button>
          </div>

          <div className="navbar-date">{currentDate}</div>

          <div className="navbar-auth">
            <Link to="/subscribe" className="subscribe-btn">Subscribe</Link>
            <Link to="/login" className="signin-btn">Sign In</Link>
          </div>
        </div>
         
        <div className="navbar-center">
          <Link to="/" className="navbar-title">The Sunrise State</Link>
          <p className="navbar-tagline">Covering the world from the heart of Andhra Pradesh</p>
        </div>
      </header>
      
      <nav className="navbar-links-container" role="navigation" aria-label="Main menu">
        <ul className="navbar-links">
            {navLinks.map((linkTitle) => {
                const menuContent = navMenuData[linkTitle];
                return (
                    <li key={linkTitle} className="nav-item">
                        <Link to={`/${toUrlSlug(linkTitle)}`}>{linkTitle}</Link>
                        <div className="mega-menu">
                            <div className="mega-menu-grid">
                                <LinkColumn title="Sections" items={menuContent.sections} basePath={linkTitle} />
                                <LinkColumn title="Top Stories" items={menuContent.topStories} basePath={linkTitle} />
                                <NewsletterColumn items={menuContent.newsletters} />
                                <AuthorColumn items={menuContent.authors} />
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
      </nav>

      <SlideNavbar isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </>
  );
};

export default Navbar;
