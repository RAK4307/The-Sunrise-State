import React, { useState } from "react";
import "./Home.css";

const Card = ({ children, className }) => <div className={`card ${className}`}>{children}</div>;
const CardContent = ({ children, className }) => <div className={`card-content ${className}`}>{children}</div>;
const Button = ({ children, onClick, className }) => <button onClick={onClick} className={`button ${className}`}>{children}</button>;
const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <path d="m15 18-6-6 6-6"/>
  </svg>
); 
const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

// --- Data (could come from an API) ---
const mainArticlesData = [
    { id: "gaza-aid", title: "Gaza's Aid Crisis Helps Only Hamas", img: "./images/image1.jpg" },
    { id: "minnesota-poll", title: "Minnesota Poll: Four takeaways on how voters are feeling right now", img: "./images/image2.jpg" },
    { id: "walz-third-term", title: "Gov. Walz has an uphill battle for a third term as voters express concerns", img: "./images/image3.jpg" },
    { id: "infrastructure-funding", title: "Legislature considers new funding measures for infrastructure projects", img: "./images/image4.jpg" },
    { id: "un-resolution", title: "UN Security Council debates new resolution on Middle East humanitarian access", img: "./images/image5.jpg" },
    { id: "donor-review", title: "International donors review aid effectiveness in conflict zones", img: "./images/image6.jpg" },
    { id: "humanitarian-monitoring", title: "Humanitarian organizations call for improved monitoring systems", img: "./images/image7.jpg" },
    { id: "scotus-environment", title: "Supreme Court delivers landmark verdict on environmental protection laws", img: "./images/image8.jpg" },
];

const opinionArticlesData = [
    { id: "opinion-gaza", title: "Gaza's Aid Crisis Helps Only Hamas", author: "By The Editorial Board", img: "./images/image1.jpg" },
    { id: "opinion-meme-stocks", title: "Of Meme Stocks and Main Street", author: "By The Editorial Board", img: "./images/image2.jpg" },
    { id: "opinion-drones", title: "The Pentagon Gets Serious About Drones", author: "By The Editorial Board", img: "./images/image3.jpg" },
    { id: "opinion-obama-gift", title: "A Gift Obama Should Give to America", author: "By James Freeman", img: "./images/image4.jpg" },
    { id: "opinion-china-exit", title: "China's No-Exit Plan for Foreigners", author: "By The Editorial Board", img: "./images/image5.jpg" },
];


// --- Child Components ---

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <>
      <div className="carousel-container">
        <img
          src={slides[current].img}
          alt={slides[current].title}
          className="carousel-image"
        />
        <div className="carousel-overlay">
          {slides[current].title}
        </div>
        <Button
          onClick={prevSlide}
          className="carousel-button carousel-button-left"
        >
          <ChevronLeft />
        </Button>
        <Button
          onClick={nextSlide}
          className="carousel-button carousel-button-right"
        >
          <ChevronRight />
        </Button>
      </div>
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={slides[index].id}
            className={`dot ${current === index ? 'active' : 'inactive'}`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
};

const MainArticleList = ({ articles }) => (
  <ul className="articles-list">
    {articles.map((article) => (
      <li key={article.id} className="list-item">
        <span className="bullet">•</span>
        <span>{article.title}</span>
      </li>
    ))}
  </ul>
);

const OpinionSection = ({ articles }) => (
  <div className="right-section">
    <h2 className="opinion-title">Opinion</h2>
    <div className="opinion-cards">
      {articles.map((article) => (
        <Card key={article.id} className="card">
          <img src={article.img} alt={article.title} className="card-image" />
          <CardContent className="card-content">
            <p className="card-title">{article.title}</p>
            <p className="card-author">{article.author}</p>
          </CardContent>
        </Card>
      ))}
      <div className="more-link">
        {/* In a real app, this would link to the main opinion page */}
        <a href="/opinion">More</a>
      </div>
    </div>
  </div>
);


// --- Main Page Component ---

export default function Home() {
  return (
    <div className="container">
      <div className="grid-layout">
        <div className="left-section">
          <Carousel slides={mainArticlesData} />
          <MainArticleList articles={mainArticlesData} />
        </div>
        <OpinionSection articles={opinionArticlesData} />
      </div>
    </div>
  );
}