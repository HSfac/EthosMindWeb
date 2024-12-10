import React from 'react';
import './BibleChat.css';
import heroImage from '../assets/images/hero-image-bi.png';
import dialogueImage1 from '../assets/images/dialogue-image1.png';
import dialogueImage2 from '../assets/images/dialogue-image2.png';
import dialogueImage3 from '../assets/images/dialogue-image3.png';
import dialogueImage4 from '../assets/images/dialogue-image4.png';
import dailyWisdomImage1 from '../assets/images/daily-wisdom-image1.png';
import dailyWisdomImage2 from '../assets/images/daily-wisdom-image2.png';
import dailyWisdomImage3 from '../assets/images/daily-wisdom-image3.png';

function BibleChat() {
  return (
    <main className="biblechat-main">
      <section className="biblechat-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="biblechat-hero-content">
          <h1 className="biblechat-hero-title">Bible Chat</h1>
          <p className="biblechat-hero-subtitle">Deepen your understanding of the Bible and its teachings with our AI. Explore its wisdom and learn how to apply it to everyday life.</p>
          <div className="biblechat-hero-search">
            <input type="text" placeholder="Ask a question or start a conversation" />
            <button>Start chatting</button>
          </div>
        </div>
      </section>
      <section className="biblechat-featured-dialogues">
        <h2 className="biblechat-section-title">Featured Dialogues</h2>
        <div className="biblechat-dialogue-cards">
          <div className="biblechat-dialogue-card">
            <img src={dialogueImage1} alt="How do I find peace in God?" className="biblechat-dialogue-image" />
            <div className="biblechat-dialogue-info">
              <h3 className="biblechat-dialogue-title">How do I find peace in God?</h3>
              <p className="biblechat-dialogue-description">Explore the Bible's teachings on finding peace in God and learn how to apply them to your life.</p>
              <button className="biblechat-dialogue-button">Start Chat</button>
            </div>
          </div>
          <div className="biblechat-dialogue-card">
            <img src={dialogueImage2} alt="What does the Bible say about forgiveness?" className="biblechat-dialogue-image" />
            <div className="biblechat-dialogue-info">
              <h3 className="biblechat-dialogue-title">What does the Bible say about forgiveness?</h3>
              <p className="biblechat-dialogue-description">Discover the Bible's teachings on forgiveness and learn how to forgive others and yourself.</p>
              <button className="biblechat-dialogue-button">Start Chat</button>
            </div>
          </div>
          <div className="biblechat-dialogue-card">
            <img src={dialogueImage3} alt="How can I trust in God's plan?" className="biblechat-dialogue-image" />
            <div className="biblechat-dialogue-info">
              <h3 className="biblechat-dialogue-title">How can I trust in God's plan?</h3>
              <p className="biblechat-dialogue-description">Learn how to trust in God's plan and find peace and guidance in times of uncertainty.</p>
              <button className="biblechat-dialogue-button">Start Chat</button>
            </div>
          </div>
          <div className="biblechat-dialogue-card">
            <img src={dialogueImage4} alt="What is the meaning of life according to the Bible?" className="biblechat-dialogue-image" />
            <div className="biblechat-dialogue-info">
              <h3 className="biblechat-dialogue-title">What is the meaning of life according to the Bible?</h3>
              <p className="biblechat-dialogue-description">Explore the Bible's teachings on the purpose of life and how to find meaning and fulfillment.</p>
              <button className="biblechat-dialogue-button">Start Chat</button>
            </div>
          </div>
        </div>
      </section>
      <section className="biblechat-daily-wisdom">
        <h2 className="biblechat-section-title">Daily Wisdom</h2>
        <div className="biblechat-wisdom-cards">
          <div className="biblechat-wisdom-card">
            <div className="biblechat-wisdom-info">
              <h3 className="biblechat-wisdom-title">Proverbs 3:5-6</h3>
              <p className="biblechat-wisdom-description">Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.</p>
            </div>
            <img src={dailyWisdomImage1} alt="Proverbs 3:5-6" className="biblechat-wisdom-image" />
          </div>
          <div className="biblechat-wisdom-card">
            <div className="biblechat-wisdom-info">
              <h3 className="biblechat-wisdom-title">Philippians 4:6-7</h3>
              <p className="biblechat-wisdom-description">Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.</p>
            </div>
            <img src={dailyWisdomImage2} alt="Philippians 4:6-7" className="biblechat-wisdom-image" />
          </div>
          <div className="biblechat-wisdom-card">
            <div className="biblechat-wisdom-info">
              <h3 className="biblechat-wisdom-title">Psalm 23:1</h3>
              <p className="biblechat-wisdom-description">The Lord is my shepherd, I lack nothing.</p>
            </div>
            <img src={dailyWisdomImage3} alt="Psalm 23:1" className="biblechat-wisdom-image" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default BibleChat;
