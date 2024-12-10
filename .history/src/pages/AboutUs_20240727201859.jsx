import React from 'react';
import './AboutUs.css';
import heroImage from '../assets/images/about-hero-background.png';

function About() {
  return (
    <main className="about-main">
      <section className="about-ethosmind-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="about-ethosmind-hero-content">
          <h1 className="about-ethosmind-hero-title">About EthosMind</h1>
          <p className="about-ethosmind-hero-description">Empowering minds through AI-driven philosophical conversations</p>
        </div>
      </section>

      <section className="about-ethosmind-content">
        <h2 className="about-ethosmind-section-title">Our Mission</h2>
        <p>At EthosMind, we believe in the power of philosophical dialogue to enrich lives and broaden perspectives. Our mission is to make profound conversations accessible to everyone through innovative AI technology.</p>

        <h2 className="about-ethosmind-section-title">Our Apps</h2>
        <div className="about-ethosmind-apps">
          <div className="about-ethosmind-app">
            <h3>Philochat</h3>
            <p>Engage in stimulating discussions with AI-powered philosophers, expanding your intellectual horizons.</p>
          </div>
          <div className="about-ethosmind-app">
            <h3>Buddhachat</h3>
            <p>Explore Buddhist teachings and mindfulness practices through conversations with an AI Buddha.</p>
          </div>
          <div className="about-ethosmind-app">
            <h3>Biblechat</h3>
            <p>Deepen your understanding of scripture through interactive dialogues with an AI-powered biblical companion.</p>
          </div>
        </div>

        <h2 className="about-ethosmind-section-title">Our Vision</h2>
        <p>We envision a world where everyone has access to personalized philosophical guidance, fostering critical thinking, empathy, and personal growth.</p>
      </section>
    </main>
  );
}

export default About;
