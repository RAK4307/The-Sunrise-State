import React from 'react';
import { Link } from 'react-router-dom';

// In a real-world application, this data would likely come from a CMS or an API.
const sportsArticles = [
  {
    id: 1,
    title: 'Underdogs Clinch Championship in Stunning Final-Second Victory',
    summary: 'A dramatic last-minute goal secured the title for the home team in one of the most exciting finals in recent history.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Sports+News+1',
    author: 'Mike O\'Connell',
    date: 'Oct 26, 2023',
  },
  {
    id: 2,
    title: 'Record-Breaking Marathon Performance Sets New World Standard',
    summary: 'The marathon world record was shattered today as the winner crossed the finish line with an astonishing time.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Sports+News+2',
    author: 'Elena Petrova',
    date: 'Oct 25, 2023',
  },
  {
    id: 3,
    title: 'Team Announces Major Trade Ahead of Transfer Deadline',
    summary: 'In a surprising move, the team has acquired a star player in a multi-player trade that shakes up the league.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Sports+News+3',
    author: 'Kenji Tanaka',
    date: 'Oct 24, 2023',
  },
  {
    id: 4,
    title: 'The Rise of Esports: From Niche Hobby to Global Phenomenon',
    summary: 'Esports arenas are selling out, and prize pools are rivaling traditional sports, marking a new era in competitive gaming.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Sports+News+4',
    author: 'Jasmine Lee',
    date: 'Oct 23, 2023',
  },
];

const Sports = () => {
  return (
    <div className="category-page-container">
      <nav aria-label="breadcrumb" className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/news">News</Link> / <span>Sports</span>
      </nav>

      <header className="category-header">
        <h1 className="main-heading">Sports News</h1>
        <p className="subheading">Your daily source for scores, highlights, and in-depth sports analysis.</p>
      </header>

      <main className="article-list">
        {sportsArticles.map((article) => (
          <Link to={`/news/sports/${article.id}`} key={article.id} className="article-card-link">
            <article className="article-card">
              <img src={article.imageUrl} alt={article.title} className="article-image" />
              <div className="article-content">
                <h2 className="article-title">{article.title}</h2>
                <p className="article-summary">{article.summary}</p>
                <div className="article-meta">
                  <span className="article-author">{article.author}</span> - <span className="article-date">{article.date}</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </main>
    </div>
  );
};

export default Sports;

