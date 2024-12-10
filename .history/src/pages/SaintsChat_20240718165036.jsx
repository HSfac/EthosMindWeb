import React from 'react';
import './SaintsChat.css';
import heroImage from '../assets/images/hero-image.png';
import philosopher1 from '../assets/images/philosopher1.png';
import philosopher2 from '../assets/images/philosopher2.png';
import philosopher3 from '../assets/images/philosopher3.png';
import philosopher4 from '../assets/images/philosopher4.png';
import philosopher5 from '../assets/images/philosopher5.png';
import philosopher6 from '../assets/images/philosopher6.png';
import philosopher7 from '../assets/images/philosopher7.png';
import plato from '../assets/images/plato.png';
import nietzsche from '../assets/images/nietzsche.png';
import schopenhauer from '../assets/images/schopenhauer.png';

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
      <section className="additional-philosophers">
        <div className="additional-philosopher-card">
          <img src={philosopher5} alt="Philosopher 5" className="additional-philosopher-image"/>
        </div>
        <div className="additional-philosopher-card">
          <img src={philosopher6} alt="Philosopher 6" className="additional-philosopher-image"/>
        </div>
        <div className="additional-philosopher-card">
          <img src={philosopher7} alt="Philosopher 7" className="additional-philosopher-image"/>
        </div>
      </section>
      <section className="featured-philosophers">
        <h2 className="section-title">Featured Philosophers</h2>
        <div className="featured-philosopher-list">
          <div className="featured-philosopher-card">
            <img src={plato} alt="Plato" className="featured-philosopher-image" />
            <div className="featured-philosopher-info">
              <h3 className="philosopher-name">Plato</h3>
              <p className="philosopher-description">428–348 BC<br />A philosopher in Classical Greece and the founder of the Academy in Athens, the first institution of higher learning in the Western world. He is widely considered one of the most important and influential figures in Western philosophy.</p>
              <button className="start-chatting-button">Start chatting</button>
            </div>
          </div>
          <div className="featured-philosopher-card">
            <img src={nietzsche} alt="Nietzsche" className="featured-philosopher-image" />
            <div className="featured-philosopher-info">
              <h3 className="philosopher-name">Friedrich Nietzsche</h3>
              <p className="philosopher-description">1844–1900<br />A German philosopher, cultural critic, composer, poet, writer, and philologist whose work has exerted a profound influence on modern intellectual history and Western philosophy.</p>
              <button className="start-chatting-button">Start chatting</button>
            </div>
          </div>
          <div className="featured-philosopher-card">
            <img src={schopenhauer} alt="Schopenhauer" className="featured-philosopher-image" />
            <div className="featured-philosopher-info">
              <h3 className="philosopher-name">Arthur Schopenhauer</h3>
              <p className="philosopher-description">1788–1860<br />A German philosopher best known for his work 'The World as Will and Representation,' in which he characterizes the phenomenal world as the product of a blind and insatiable metaphysical will.</p>
              <button className="start-chatting-button">Start chatting</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SaintsChat;
