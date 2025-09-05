import React from 'react';
import { Link } from 'react-router-dom';

// In a real-world application, this data would likely come from a CMS or an API.
const politicsArticles = [
  {
    id: 1,
    title: 'Election Season Heats Up as Key Debates Begin',
    summary: 'Candidates are preparing for a series of debates that could shape public opinion ahead of the upcoming election.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Politics+1',
    author: 'Eleanor Vance',
    date: 'Oct 26, 2023',
  },
  {
    id: 2,
    title: 'New International Trade Agreement Signed by World Leaders',
    summary: 'A landmark trade deal has been signed, aiming to boost economic cooperation and reduce tariffs between member nations.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Politics+2',
    author: 'Arthur Chen',
    date: 'Oct 25, 2023',
  },
  {
    id: 3,
    title: 'Government Announces Major Infrastructure Spending Plan',
    summary: 'The new plan allocates billions towards upgrading roads, bridges, and public transportation networks nationwide.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Politics+3',
    author: 'Sofia Rodriguez',
    date: 'Oct 24, 2023',
  },
  {
    id: 4,
    title: 'Analysis: The Impact of Social Media on Modern Politics',
    summary: 'Experts weigh in on how social media platforms are changing political discourse and voter engagement.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Politics+4',
    author: 'Henry Wallace',
    date: 'Oct 23, 2023',
  },
];

const Politics = () => {
  return (
    <div className="category-page-container">
      <nav aria-label="breadcrumb" className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/news">News</Link> / <span>Politics</span>
      </nav>

      <header className="category-header">
        <h1 className="main-heading">Politics News</h1>
        <p className="subheading">The latest on government, elections, and international affairs.</p>
      </header>

      <main className="article-list">
        {politicsArticles.map((article) => (
          <Link to={`/news/politics/${article.id}`} key={article.id} className="article-card-link">
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

export default Politics;

