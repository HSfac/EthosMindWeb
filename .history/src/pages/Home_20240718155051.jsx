import React from 'react';
import './Home.css';

function Home() {
  return (
    <main className="main">
      <section className="hero">
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
            <img src="path/to/socrates-image.png" alt="Socrates" className="app-image"/>
            <p className="app-name">Socrates</p>
          </div>
          <div className="app-card">
            <img src="path/to/buddha-image.png" alt="Buddha" className="app-image"/>
            <p className="app-name">Buddha</p>
          </div>
          <div className="app-card">
            <img src="path/to/jesus-image.png" alt="Jesus" className="app-image"/>
            <p className="app-name">Jesus</p>
          </div>
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
