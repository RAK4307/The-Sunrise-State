import React from 'react';
import './Poltics.css';

// Combined App component: Poltics.jsx and Poltics2.jsx
const App = () => {
  return (
    <div className="poltics-bg">
      <div className="poltics-container">
        <div className="poltics-row"> 
          {/* Politics Section */}
          <div className="poltics-main">
            <h1 className="poltics-title">Politics</h1>
            <div className="poltics-main-content">
              <div className="poltics-featured">
                <div className="poltics-featured-img"></div>
                <p className="poltics-meta">2 HOURS AGO • 1 MIN READ</p>
                <h2 className="poltics-featured-title">Gaza's Aid Crisis Helps Only Hamas</h2>
                <p className="poltics-featured-desc">
                  International humanitarian assistance continues to flow into Gaza, but critics argue that the aid infrastructure primarily benefits the militant organization rather than civilians in need.
                </p>
              </div>
              <div className="poltics-side-articles">
                <div>
                  <h3 className="poltics-side-title">
                    Minnesota Poll: Four takeaways on how voters are feeling right now
                  </h3>
                  <p className="poltics-meta">1 MIN AGO • 1 MIN READ</p>
                </div>
                <div>
                  <h3 className="poltics-side-title">
                    Gov. Walz has an uphill battle for a third term as voters express concerns
                  </h3>
                  <p className="poltics-meta">45 MINS AGO • 1 MIN READ</p>
                </div>
                <div>
                  <h3 className="poltics-side-title">
                    Legislature considers new funding measures for infrastructure projects
                  </h3>
                  <p className="poltics-meta">3 HOURS AGO • 1 MIN READ</p>
                </div>
              </div>
            </div>
            <div className="poltics-more">
              <a href="#" className="poltics-more-link">More</a>
            </div>
          </div>

          {/* Amaravati Section */}
          <div className="poltics-sidebar">
            <h1 className="poltics-title">Amaravati</h1>
            <div className="poltics-sidebar-list">
              <div className="poltics-sidebar-item poltics-sidebar-border">
                <h3 className="poltics-side-title">Prada acknowledges Kolhapuri chappals as inspiration after fashion show backlash</h3>
                <p className="poltics-meta">5 MINS AGO • 1 MIN READ</p>
              </div>
              <div className="poltics-sidebar-item poltics-sidebar-border">
                <h3 className="poltics-side-title">Trump halts trade talks with Canada over tech tax on US firms</h3>
                <p className="poltics-meta">1 HOUR AGO • 1 MIN READ</p>
              </div>
              <div className="poltics-sidebar-item poltics-sidebar-border">
                <h3 className="poltics-side-title">JSW Paints acquires 74.8 per cent of Akzo Nobel India in Rs 12,995-cr deal</h3>
                <p className="poltics-meta">4 HOURS AGO • 1 MIN READ</p>
              </div>
              <div className="poltics-sidebar-item poltics-sidebar-border">
                <h3 className="poltics-side-title">Trump confirms US-China trade deal, China verifies framework details</h3>
                <p className="poltics-meta">1 DAY AGO • 1 MIN READ</p>
              </div>
              <div className="poltics-sidebar-item">
                <h3 className="poltics-side-title">Amaravati development authority announces new infrastructure projects for sustainable growth</h3>
                <p className="poltics-meta">2 DAYS AGO • 1 MIN READ</p>
              </div>
              <div className="poltics-more">
                <a href="#" className="poltics-more-link">More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business & Vizag Section */}
      <div className="poltics-container">
        <div className="poltics-row">
          {/* Business Section */}
          <div className="poltics-main">
            <h1 className="poltics-title">Business</h1>
            <div className="poltics-main-content">
              <div className="poltics-featured">
                <img
                  src="https://placehold.co/800x500/E5E7EB/1F2937?text=Image"
                  alt="Stock market graph"
                  className="poltics-featured-img-real"
                />
                <p className="poltics-meta">3 HOURS AGO • 1 MIN READ</p>
                <h2 className="poltics-featured-title">In a world of conflict, the spoils are rich from gold and guns</h2>
                <p className="poltics-featured-desc">
                  Forget the Magnificent Seven tech giants, defence stocks and gold are the winners in this volatile economic and geopolitical environment. Investors are shifting their focus.
                </p>
              </div>
              <div className="poltics-side-articles">
                <div>
                  <h3 className="poltics-side-title">
                    Crypto lenders secured a 400% pay rise. But it's still not enough for market demands
                  </h3>
                  <p className="poltics-meta">15 MINS AGO • 1 MIN READ</p>
                </div>
                <div>
                  <h3 className="poltics-side-title">
                    Thinking of salary sacrifice? Here’s why you should, or shouldn't consider it now
                  </h3>
                  <p className="poltics-meta">1 HOUR AGO • 1 MIN READ</p>
                </div>
                <div>
                  <h3 className="poltics-side-title">
                    Market volatility creates new opportunities for strategic investors worldwide
                  </h3>
                  <p className="poltics-meta">3 HOURS AGO • 1 MIN READ</p>
                </div>
              </div>
            </div>
            <div className="poltics-more">
                <a href="#" className="poltics-more-link">More</a>
              </div>
          </div>
          {/* Vizag Section */}
          <div className="poltics-sidebar">
            <h1 className="poltics-title">Vizag</h1>
            <div className="poltics-sidebar-list">
              <div className="poltics-sidebar-item poltics-sidebar-border">
                <h3 className="poltics-side-title">Vizag steel plant modernization project receives environmental clearance from ministry</h3>
                <p className="poltics-meta">30 MINS AGO • 1 MIN READ</p>
              </div>
              <div className="poltics-sidebar-item poltics-sidebar-border">
                <h3 className="poltics-side-title">Port city witnesses surge in tech startups with new innovation hub launch</h3>
                <p className="poltics-meta">2 HOURS AGO • 1 MIN READ</p>
              </div>
              <div className="poltics-sidebar-item poltics-sidebar-border">
                <h3 className="poltics-side-title">Coastal development authority announces new beach beautification projects</h3>
                <p className="poltics-meta">4 HOURS AGO • 1 MIN READ</p>
              </div>
              <div className="poltics-sidebar-item poltics-sidebar-border">
                <h3 className="poltics-side-title">Railway expansion work begins for improved connectivity to industrial zones</h3>
                <p className="poltics-meta">12 HOURS AGO • 1 MIN READ</p>
              </div>
              <div className="poltics-sidebar-item">
                <h3 className="poltics-side-title">Maritime university collaborates with international institutions for advanced research programs</h3>
                <p className="poltics-meta">1 DAY AGO • 1 MIN READ</p>
              </div>
              <div className="poltics-more">
                <a href="#" className="poltics-more-link">More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;