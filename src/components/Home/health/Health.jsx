import React from 'react';
import './Health.css';

const featuredArticle = {
  image: './images/health-featured.jpg', // Example image URL
  title: 'Revolutionary Gene Therapy Shows Promise in Treating Rare Genetic Disorders',
  time: '6 HOURS AGO',
  readTime: '1 MIN READ',
  summary:
    'Breakthrough medical research demonstrates significant success rates in gene therapy trials, offering new hope for patients with previously untreatable genetic conditions and paving the way for personalized medicine approaches.',
};

const sideArticles = [
  {
    title: 'Mental Health Awareness Campaign Reaches Record Participation in Communities Nationwide',
    time: '40 MINS AGO',
    readTime: '1 MIN READ',
  }, 
  {
    title: 'Mediterranean Diet Study Reveals Long-Term Benefits for Heart Disease Prevention',
    time: '3 HOURS AGO',
    readTime: '1 MIN READ',
  },
  {
    title: 'Telemedicine Adoption Transforms Rural Healthcare Access and Patient Outcomes Dramatically',
    time: '8 HOURS AGO',
    readTime: '1 MIN READ',
  },
];

const Health = () => (
  <div className="health-bg">
    <div className="health-container">
      <h2 className="health-column-title" style={{ marginBottom: '32px' }}>Health</h2>
      <div className="health-row" style={{ alignItems: 'flex-start' }}>
        {/* Left: Featured Article */}
        <div>
          <img
            src={featuredArticle.image}
            alt="Featured"
            style={{
              width: '100%',
              maxWidth: '520px',
              height: '320px',
              objectFit: 'cover',
              borderRadius: '2px',
              marginBottom: '24px',
              background: '#eee',
            }}
          />
          <a href="#" className="health-title" style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '8px', display: 'block' }}>
            {featuredArticle.title}
          </a>
          <div className="health-meta" style={{ marginBottom: '12px' }}>
            {featuredArticle.time} • {featuredArticle.readTime}
          </div>
          <div style={{ fontSize: '1.08rem', color: '#374151', marginTop: '8px', maxWidth: '520px' }}>
            {featuredArticle.summary}
          </div>
        </div>
        {/* Right: Side Articles */}
        <div>
          {sideArticles.map((item, idx) => (
            <div key={idx} style={{ marginBottom: '32px' }}>
              <a href="#" className="health-title" style={{ fontSize: '1.15rem', fontWeight: '500', display: 'block', marginBottom: '4px' }}>
                {item.title}
              </a>
              <div className="health-meta">{item.time} • {item.readTime}</div>
            </div>
          ))}
          <div className="health-more" style={{ marginTop: '24px', textAlign: 'left' }}>
            <a href="#" className="health-more-link">More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Health;