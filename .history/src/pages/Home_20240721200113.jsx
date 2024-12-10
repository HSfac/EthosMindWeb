import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/hero-image.png';
import philochatScreenshot from '../assets/images/ph-image-dl.png';
import buddhachatScreenshot from '../assets/images/buddha-hero-image.png';
import biblechatScreenshot from '../assets/images/jesus-image-dl.png';

function Home() {
  return (
    <main className="home-main">
      {/* Hero Section */}
      <section className="home-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="home-hero-content">
          <h1 className="home-hero-title">Welcome to MetaMind</h1>
          <p className="home-hero-description">Explore our innovative apps designed to enrich your spiritual journey and philosophical discussions.</p>
          <div className="home-hero-search">
            <input type="text" placeholder="Search for an app" />
            <button>Find</button>
          </div>
        </div>
      </section>

      {/* App Introduction Section */}
      <section id="home-app-introduction" className="home-app-introduction">
        <h2 className="home-section-title">Featured Apps</h2>
        <div className="home-app-cards">
          <div className="home-app-card">
            <img src={philochatScreenshot} alt="Philochat App Screenshot" className="home-app-image" />
            <div className="home-app-info">
              <h3 className="home-app-title">Philochat</h3>
              <ul className="home-app-features">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              <Link to="/saintschat" className="home-learn-more-button">Learn More</Link>
            </div>
          </div>
          
          <div className="home-app-card">
            <img src={buddhachatScreenshot} alt="Buddhachat App Screenshot" className="home-app-image" />
            <div className="home-app-info">
              <h3 className="home-app-title">Buddhachat</h3>
              <ul className="home-app-features">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              <Link to="/buddhachats" className="home-learn-more-button">Learn More</Link>
            </div>
          </div>
          
          <div className="home-app-card">
            <img src={biblechatScreenshot} alt="Biblechat App Screenshot" className="home-app-image" />
            <div className="home-app-info">
              <h3 className="home-app-title">Biblechat</h3>
              <ul className="home-app-features">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              <Link to="/biblechats" className="home-learn-more-button">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="home-cta-section">
        <h2 className="home-cta-title">Join MetaMind Today</h2>
        <p className="home-cta-description">Experience the transformative power of our apps. Join our community and start your journey today.</p>
        <div className="home-cta-buttons">
          <Link to="/contact" className="home-cta-button">Contact Us</Link>
        </div>
      </section>
    </main>
  );
}

export default Home;