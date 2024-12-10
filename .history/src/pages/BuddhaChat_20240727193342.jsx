import React from 'react';
import './BuddhaChat.css';
import buddhaImage from '../assets/images/buddha-hero-image.png';
import buddhaFeature1 from '../assets/images/buddha-feature-1.png';
import buddhaFeature2 from '../assets/images/buddha-feature-2.png';
import buddhaFeature3 from '../assets/images/buddha-feature-3.png';
import buddhaFeature4 from '../assets/images/buddha-feature-4.png';
import buddhaMeditation1 from '../assets/images/buddha-meditation-1.png';
import buddhaMeditation2 from '../assets/images/buddha-meditation-2.png';
import buddhaMeditation3 from '../assets/images/buddha-meditation-3.png';
import buddhaMeditation4 from '../assets/images/buddha-meditation-4.png';

function BuddhaChat() {
  return (
    <main className="buddha-main">
      <section className="buddha-hero" style={{ backgroundImage: `url(${buddhaImage})` }}>
        <div className="buddha-hero-content">
          <h1 className="buddha-hero-title">Meditate with Buddha</h1>
          <p className="buddha-hero-subtitle">Explore the wisdom of the Buddha and meditate together with our AI chatbot</p>
          <button className="buddha-hero-button">Try it now</button>
        </div>
      </section>
      <section className="buddha-features">
        <h2 className="buddha-section-title">Features</h2>
        <p className="buddha-section-description">BuddhaChat uses AI to create interactive dialogue apps that let you chat with buddha, Explore their worldviews, ask them questions, and get personalized advice.And train </p>
        <div className="buddha-feature-cards">
          <div className="buddha-feature-card">
            <img src={buddhaFeature1} alt="Interactive Dharma Talks" className="buddha-feature-image" />
            <p className="buddha-feature-title">Interactive Dharma Talks</p>
            <p className="buddha-feature-description">Chat with the Buddha about life's deepest questions</p>
          </div>
          <div className="buddha-feature-card">
            <img src={buddhaFeature2} alt="Daily Meditation Sessions" className="buddha-feature-image" />
            <p className="buddha-feature-title">Daily Meditation Sessions</p>
            <p className="buddha-feature-description">Join live meditations or practice on your own schedule</p>
          </div>
          <div className="buddha-feature-card">
            <img src={buddhaFeature3} alt="Personalized Practice Plans" className="buddha-feature-image" />
            <p className="buddha-feature-title">Personalized Practice Plans</p>
            <p className="buddha-feature-description">Create a plan to build your meditation habit</p>
          </div>
          <div className="buddha-feature-card">
            <img src={buddhaFeature4} alt="Meditation made easy" className="buddha-feature-image" />
            <p className="buddha-feature-title">Meditation made easy</p>
            <p className="buddha-feature-description">Follow along with audio meditations led by meditation teachers</p>
          </div>
        </div>
      </section>
      <section className="buddha-meditation">
        <h2 className="buddha-section-title">Meditation made easy</h2>
        <div className="buddha-meditation-cards">
          <div className="buddha-meditation-card">
            <img src={buddhaMeditation1} alt="Guided Meditations" className="buddha-meditation-image" />
            <p className="buddha-meditation-title">Guided Meditations</p>
            <p className="buddha-meditation-description">Follow along with audio meditations led by meditation teachers</p>
          </div>
          <div className="buddha-meditation-card">
            <img src={buddhaMeditation2} alt="Meditation Timer" className="buddha-meditation-image" />
            <p className="buddha-meditation-title">Meditation Timer</p>
            <p className="buddha-meditation-description">Set a timer to meditate on your own, or use our meditation music</p>
          </div>
          <div className="buddha-meditation-card">
            <img src={buddhaMeditation3} alt="Progress Tracker" className="buddha-meditation-image" />
            <p className="buddha-meditation-title">Progress Tracker</p>
            <p className="buddha-meditation-description">Track your meditation minutes and build a daily practice</p>
          </div>
          <div className="buddha-meditation-card">
            <img src={buddhaMeditation4} alt="Daily Reminders" className="buddha-meditation-image" />
            <p className="buddha-meditation-title">Daily Reminders</p>
            <p className="buddha-meditation-description">Get reminders to help you meditate every day</p>
          </div>
        </div>
      </section>
      <section className="buddha-cta">
        <h2 className="buddha-cta-title">Ready to chat with Buddha?</h2>
        <p className="buddha-cta-description">Sign up for SaintsChat to explore the wisdom of the Buddha and meditate together with our AI chatbot</p>
        <button className="buddha-cta-button">Try it now</button>
      </section>
    </main>
  );
}

export default BuddhaChat;
