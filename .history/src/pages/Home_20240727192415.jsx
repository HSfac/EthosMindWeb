import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/hero-image-land.png';
import philochatScreenshot from '../assets/images/ph-image-dl.png';
import buddhachatScreenshot from '../assets/images/buddha-hero-image.png';
import biblechatScreenshot from '../assets/images/jesus-image-dl.png';

function Home() {
  return (
    <main className="home-main">
      {/* Hero Section */}
      <section className="home-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="home-hero-content">
          <h1 className="home-hero-title">Welcome to EMind</h1>
          <p className="home-hero-description">Explore our innovative apps designed to enrich your spiritual journey and philosophical discussions.</p>
          <div className="home-hero-search">
            <input type="text" placeholder="Chat with great thinkers" />
            <Link to="/download" className="home-hero-button">Download</Link>
          </div>
        </div>
      </section>

      {/* App Introduction Section */}
      <section id="home-app-introduction" className="home-app-introduction">
        <h2 className="home-section-title">Featured Apps</h2>
        <div className="home-app-cards">
          <div className="home-app-card">
            <div className="home-app-image-container">
              <img src={philochatScreenshot} alt="Philochat App Screenshot" className="home-app-image" />
            </div>
            <div className="home-app-info">
              <h3 className="home-app-title">Philochat</h3>
              <p className="home-app-description">Engage in profound philosophical discussions with AI philosophers. Receive daily philosophy feeds and interact with a vibrant community.</p>
              <ul className="home-app-features">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              <Link to="/saintschat" className="home-learn-more-button" onClick={() => window.scrollTo(0, 0)}>Learn More</Link>
            </div>
          </div>
          <hr className="home-divider" />

          <div className="home-app-card">
            <div className="home-app-image-container">
              <img src={buddhachatScreenshot} alt="Buddhachat App Screenshot" className="home-app-image" />
            </div>
            <div className="home-app-info">
              <h3 className="home-app-title">Buddhachat</h3>
              <p className="home-app-description">Connect with Buddhas for insightful conversations. Track your meditation progress with our meditation tracker feature.</p>
              <ul className="home-app-features">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              <Link to="/buddhachats" className="home-learn-more-button" onClick={() => window.scrollTo(0, 0)}>Learn More</Link>
            </div>
          </div>
          <hr className="home-divider" />
          
          <div className="home-app-card">
            <div className="home-app-image-container">
              <img src={biblechatScreenshot} alt="Biblechat App Screenshot" className="home-app-image" />
            </div>
            <div className="home-app-info">
              <h3 className="home-app-title">Biblechat</h3>
              <p className="home-app-description">Chat with the Bible and explore the scriptures. Receive daily Bible feeds to inspire your faith journey.</p>
              <ul className="home-app-features">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              <Link to="/biblechats" className="home-learn-more-button" onClick={() => window.scrollTo(0, 0)}>Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="home-cta-section">
        <h2 className="home-cta-title">Join MetaMind Today</h2>
        <p className="home-cta-description">Experience the transformative power of our apps. Join our community and start your journey today.</p>
        <div className="home-cta-buttons">
          <Link to="/download" className="home-cta-button">Download</Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
