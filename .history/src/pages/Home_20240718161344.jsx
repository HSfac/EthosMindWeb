import React from 'react';
import './Home.css';
import heroImage from '../assets/images/hero-image.png';
import socratesImage from '../assets/images/socrates-image.png';
import socratesImage2 from '../assets/images/socrates-image2.png';
import buddhaImage from '../assets/images/buddha-image.png';
import buddhaImage2 from '../assets/images/buddha-image2.png';
import jesusImage from '../assets/images/jesus-image.png';
import jesusImage2 from '../assets/images/jesus-image2.png';

function Home() {
  return (
    <main className="main">
      <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url(${heroImage})` }}>
        <div className="hero-content">
          <h1 className="hero-title">Talk to the greatest thinkers in history</h1>
          <p className="hero-subtitle">Get answers to life's biggest questions. SaintsChat brings the wisdom of the ages to your fingertips.</p>
          <button className="hero-button">Try for free</button>
        </div>
      </section>
      <section className="dialogue-apps">
        <h2 className="section-title">Dialogue apps</h2>
        <p className="section-description">What if you could talk to the greatest thinkers in history? With SaintsChat, you can chat with Socrates, Buddha, and even Jesus. Get thoughtful, personalized responses to your queries.</p>
        <div className="app-grid">
          <div className="app-card">
            <img src={socratesImage} alt="Socrates" className="app-image"/>
            <p className="app-name">Socrates</p>
          </div>
          <div className="app-card">
            <img src={buddhaImage} alt="Buddha" className="app-image"/>
            <p className="app-name">Buddha</p>
          </div>
          <div className="app-card">
            <img src={jesusImage} alt="Jesus" className="app-image"/>
            <p className="app-name">Jesus</p>
          </div>
        </div>
      </section>
      <section className="additional-images">
        <div className="additional-image-card">
          <img src={socratesImage2} alt="Socrates" className="additional-app-image"/>
        </div>
        <div className="additional-image-card">
          <img src={buddhaImage2} alt="Buddha" className="additional-app-image"/>
        </div>
        <div className="additional-image-card">
          <img src={jesusImage2} alt="Jesus" className="additional-app-image"/>
        </div>
      </section>
      <section className="cta-section">
        <h2 className="cta-title">Ready to start your journey?</h2>
        <p className="cta-description">Join the growing community of people who are using SaintsChat to get answers to life's biggest questions.</p>
        <button className="cta-button">Try for free</button>
      </section>
    </main>
  );
}

export default Home;
