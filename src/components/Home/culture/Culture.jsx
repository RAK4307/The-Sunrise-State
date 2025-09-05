import React from 'react';
import './Culture.css';

const App = () => {
  const entertainmentNews = [
    {
      title: 'Hollywood Strike Ends: Major Studios Reach Agreement with Writers and Actors Unions',
      time: '10 MINS AGO',
      readTime: '1 MIN READ',
    }, 
    {
      title: 'Streaming Wars Intensity as Netflix Announces Record-Breaking Content Investment',
      time: '1 HOUR AGO',
      readTime: '1 MIN READ', 
    },
    {
      title: 'Bollywood\'s Global Expansion: Indian Cinema Breaks International Box Office Records',
      time: '3 HOURS AGO',
      readTime: '1 MIN READ',
    },
    {
      title: 'Music Industry Revolution: AI-Generated Songs Spark Creative and Legal Debates',
      time: '8 HOURS AGO',
      readTime: '1 MIN READ',
    },
    {
      title: 'Celebrity Chef\'s New Restaurant Concept Combines Fine Dining with Interactive Entertainment',
      time: '1 DAY AGO',
      readTime: '1 MIN READ',
    },
  ];

  const cultureNews = [
    {
      title: 'Ancient Manuscripts Digitized: UNESCO Project Preserves Cultural Heritage for Future Generations',
      time: '25 MINS AGO',
      readTime: '1 MIN READ',
    },
    {
      title: 'Contemporary Art Market Boom: Emerging Artists Command Record-Breaking Auction Prices',
      time: '1 HOUR AGO',
      readTime: '1 MIN READ',
    },
    {
      title: 'Traditional Dance Forms Experience Renaissance Through Social Media Platforms',
      time: '4 HOURS AGO',
      readTime: '1 MIN READ',
    },
    {
      title: 'Museum Innovation: Virtual Reality Exhibitions Transform Cultural Education Experience',
      time: '9 HOURS AGO',
      readTime: '1 MIN READ',
    },
    {
      title: 'Literary Festival Season: Authors Discuss Impact of Digital Age on Storytelling',
      time: '2 DAYS AGO',
      readTime: '1 MIN READ',
    },
  ];

  const NewsItem = ({ title, time, readTime }) => (
    <div className="news-item">
      <span className="news-bullet">•</span>
      <div className="news-content">
        <a href="#" className="news-title">
          {title}
        </a>
        <p className="news-meta">
          {time} • {readTime}
        </p>
      </div>
    </div>
  );

  const NewsColumn = ({ title, items }) => (
    <div className="news-column">
      <h2 className="news-column-title">{title}</h2>
      <div className="news-list">
        {items.map((item, index) => (
          <NewsItem
            key={index}
            title={item.title}
            time={item.time}
            readTime={item.readTime}
          />
        ))}
      </div>
      <div className="news-more">
        <a href="#" className="news-more-link">More</a>
      </div>
    </div>
  );

  return (
    <div className="culture-bg">
      <div className="culture-container">
        <div className="culture-row">
          <NewsColumn title="Entertainment" items={entertainmentNews} />
          <NewsColumn title="Culture" items={cultureNews} />
        </div>
      </div>
    </div>
  );
};

export default App;