import React from 'react';
import './SaintsChat.css';
import heroImage from '../assets/images/hero-image.png';
import philosopher1 from '../assets/images/philosopher1.png';
import philosopher2 from '../assets/images/philosopher2.png';
import philosopher3 from '../assets/images/philosopher3.png';
import philosopher4 from '../assets/images/philosopher4.png';
import philosopher5 from '../assets/images/philosopher5.png';
import featuredPhilosopher from '../assets/images/featured-philosopher.png';

function SaintsChat() {
  return (
    <main className="main">
      <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-content">
          <h1 className="hero-title">Talk to Philosophers</h1>
          <p className="hero-subtitle">Unlock wisdom from history's greatest thinkers. Explore their ideas and get personalized advice on life, love, happiness, and more.</p>
          <button className="hero-button">Get started</button>
        </div>
      </section>
      <section className="how-it-works">
        <h2 className="section-title">How it works</h2>
        <div className="work-steps">
          <div className="work-step">
            <img src={philosopher1} alt="Personalized wisdom" className="work-step-image" />
            <p className="work-step-title">Personalized wisdom</p>
            <p className="work-step-description">Ask questions and get thoughtful responses tailored to your unique situation.</p>
          </div>
          <div className="work-step">
            <img src={philosopher2} alt="Explore new ideas" className="work-step-image" />
            <p className="work-step-title">Explore new ideas</p>
            <p className="work-step-description">Discover new perspectives and insights from history's greatest thinkers.</p>
          </div>
          <div className="work-step">
            <img src={philosopher3} alt="Get advice on anything" className="work-step-image" />
            <p className="work-step-title">Get advice on anything</p>
            <p className="work-step-description">Seek guidance on relationships, career, personal growth, and any other topic you're curious about.</p>
          </div>
          <div className="work-step">
            <img src={philosopher4} alt="Learn from the best" className="work-step-image" />
            <p className="work-step-title">Learn from the best</p>
            <p className="work-step-description">Gain valuable life lessons from Plato, Socrates, Confucius, and other influential sages.</p>
          </div>
        </div>
      </section>
      <section className="featured-philosophers">
        <h2 className="section-title">Featured Philosopher</h2>
        <div className="featured-philosopher-card">
          <img src={featuredPhilosopher} alt="Featured Philosopher" className="featured-philosopher-image" />
          <div className="featured-philosopher-info">
            <h3 className="philosopher-name">Plato</h3>
            <p className="philosopher-description">428–348 BC<br />A philosopher in Classical Greece and the founder of the Academy in Athens, the first institution of higher learning in the Western world. He is widely considered one of the most important and influential figures in Western philosophy.</p>
            <button className="start-chatting-button">Start chatting</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SaintsChat;
