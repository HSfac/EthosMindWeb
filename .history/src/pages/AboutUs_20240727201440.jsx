import React from 'react';
import './AboutUs.css';
import heroImage from '../assets/images/about-hero-background.png';

function About() {
  return (
    <div className="about">
      <header className="about-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <h1>About EthosMind</h1>
        <p>Empowering minds through AI-driven philosophical conversations</p>
      </header>
      
      <main className="about-content">
        <section>
          <h2>Our Mission</h2>
          <p>At EthosMind, we believe in the power of philosophical dialogue to enrich lives and broaden perspectives. Our mission is to make profound conversations accessible to everyone through innovative AI technology.</p>
        </section>

        <section>
          <h2>Our Apps</h2>
          <div className="app-list">
            <div className="app-item">
              <h3>Philochat</h3>
              <p>Engage in stimulating discussions with AI-powered philosophers, expanding your intellectual horizons.</p>
            </div>
            <div className="app-item">
              <h3>Buddhachat</h3>
              <p>Explore Buddhist teachings and mindfulness practices through conversations with an AI Buddha.</p>
            </div>
            <div className="app-item">
              <h3>Biblechat</h3>
              <p>Deepen your understanding of scripture through interactive dialogues with an AI-powered biblical companion.</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Our Vision</h2>
          <p>We envision a world where everyone has access to personalized philosophical guidance, fostering critical thinking, empathy, and personal growth.</p>
        </section>
      </main>
    </div>
  );
}

export default About;