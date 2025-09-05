import React from 'react';
import './Aboutus.css';

const Aboutus = () => {
  return (
    <div className="about-us-container">
      <article className="about-us-content">
        <header className="about-us-header">
          <h1>About The Sunrise State</h1>
          <div className="byline">
            <p>By</p>
            <p className="editorial-board">The Editorial Board</p>
          </div>
          <div className="date-info">
            <p>Published on January 27, 2025</p>
            <p>Updated on January 30, 2025</p>
          </div>
        </header>

        <div className="about-us-body">
          <p className="lead-paragraph">
            Truth in the tempest. We are dedicated to delivering accurate, comprehensive news coverage that informs, educates, and empowers our community.
          </p>
          <p>
            The Sunrise State exists to serve our community through independent, fact-based journalism. We believe that a well-informed citizenry is essential to democracy, and we are committed to providing the news and analysis needed to make informed decisions.
          </p>
          <p>
            Our newsroom operates with transparency, accountability, and a deep respect for the communities we serve. We cover the stories that matter most to our readers, from local government and business to culture and sports.
          </p>
          <p>
            Founded in 2015, The Sunrise State has grown from a local news initiative to a comprehensive digital publication serving communities across Andhra Pradesh, Telangana, and beyond. Our award-winning journalism team brings decades of experience in covering politics, business, culture, and breaking news.
          </p>
          <p>
            We are committed to journalistic excellence and maintaining the highest standards of accuracy, fairness, and independence. Our editorial policy ensures that we provide balanced coverage while holding those in power accountable to the communities we serve.
          </p>
          <p>
            As we continue to evolve in the digital age, The Sunrise State remains focused on our core mission: delivering quality journalism that makes a difference in people's lives. We invite you to join our community of engaged readers who value truth, transparency, and meaningful reporting.
          </p>
        </div>
      </article>
    </div>
  );
};

export default Aboutus;