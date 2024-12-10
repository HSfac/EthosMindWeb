import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/hero-image.png';
import philochatScreenshot from '../assets/images/ph-image-dl.png';
import buddhachatScreenshot from '../assets/images/buddha-hero-image.png';
import biblechatScreenshot from '../assets/images/jesus-image-dl.png';

function Home() {
  return (
    <main className="home-landing-page">
      {/* Hero Section */}
      <section className="home-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="home-hero-content">
          <h1 className="home-hero-title">Welcome to MetaMind</h1>
          <p className="home-hero-description">Explore our innovative apps designed to enrich your spiritual journey and philosophical discussions.</p>
          <div className="home-hero-buttons">
            <button className="home-hero-button">Get Started</button>
            <a href="#home-app-introduction" className="home-hero-button">Learn More</a>
          </div>
        </div>
      </section>

      {/* App Introduction Section */}
      <section id="home-app-introduction" className="home-app-introduction">
        <div className="home-app-intro-card">
          <h2 className="home-app-title">Philochat</h2>
          <p className="home-app-description">Engage in profound philosophical discussions with AI philosophers. Receive daily philosophy feeds and interact with a vibrant community.</p>
          <ul className="home-app-features">
            <li>AI 철학자들과 채팅</li>
            <li>데일리 철학 피드</li>
            <li>커뮤니티 기능</li>
          </ul>
          <img src={philochatScreenshot} alt="Philochat App Screenshot" className="home-app-screenshot" />
          <Link to="/saintschat" className="home-learn-more-button">Learn More</Link>
        </div>
        
        <div className="home-app-intro-card">
          <h2 className="home-app-title">Buddhachat</h2>
          <p className="home-app-description">Connect with Buddhas for insightful conversations. Track your meditation progress with our meditation tracker feature.</p>
          <ul className="home-app-features">
            <li>부처와 채팅</li>
            <li>명상 기록 및 트래커 기능</li>
          </ul>
          <img src={buddhachatScreenshot} alt="Buddhachat App Screenshot" className="home-app-screenshot" />
          <Link to="/buddhachats" className="home-learn-more-button">Learn More</Link>
        </div>
        
        <div className="home-app-intro-card">
          <h2 className="home-app-title">Biblechat</h2>
          <p className="home-app-description">Chat with the Bible and explore the scriptures. Receive daily Bible feeds to inspire your faith journey.</p>
          <ul className="home-app-features">
            <li>성경책과 채팅</li>
            <li>데일리 성경 피드</li>
          </ul>
          <img src={biblechatScreenshot} alt="Biblechat App Screenshot" className="home-app-screenshot" />
          <Link to="/biblechats" className="home-learn-more-button">Learn More</Link>
        </div>
      </section>

      {/* Detailed App Sections */}
      <section className="home-detailed-app-section">
        <div id="home-philochat-detail" className="home-app-detail">
          <h2 className="home-detail-title">Discover Philochat</h2>
          <p className="home-detail-description">Philochat는 철학자와 철학 애호가들이 만나 토론하고 배울 수 있는 플랫폼입니다. AI 철학자와의 채팅을 통해 새로운 통찰을 얻고, 매일 제공되는 철학 피드를 통해 지식을 넓히세요.</p>
          <ul className="home-detail-features">
            <li>상세 설명 기능 1</li>
            <li>상세 설명 기능 2</li>
          </ul>
          <img src={philochatScreenshot} alt="Philochat Detailed Screenshot" className="home-detail-screenshot" />
          <Link to="/download" className="home-download-button">Download Philochat</Link>
        </div>

        <div id="home-buddhachat-detail" className="home-app-detail">
          <h2 className="home-detail-title">Discover Buddhachat</h2>
          <p className="home-detail-description">Buddhachat는 부처와의 대화를 통해 명상과 깨달음을 추구하는 사용자들을 위한 플랫폼입니다. 명상 기록과 트래커 기능을 통해 명상 습관을 추적하고 발전시키세요.</p>
          <ul className="home-detail-features">
            <li>상세 설명 기능 1</li>
            <li>상세 설명 기능 2</li>
          </ul>
          <img src={buddhachatScreenshot} alt="Buddhachat Detailed Screenshot" className="home-detail-screenshot" />
          <Link to="/download" className="home-download-button">Download Buddhachat</Link>
        </div>

        <div id="home-biblechat-detail" className="home-app-detail">
          <h2 className="home-detail-title">Discover Biblechat</h2>
          <p className="home-detail-description">Biblechat는 성경과의 대화를 통해 신앙을 깊이 있게 탐구할 수 있는 플랫폼입니다. 매일 제공되는 성경 피드를 통해 영감을 받고, 성경 공부 그룹에 참여하세요.</p>
          <ul className="home-detail-features">
            <li>상세 설명 기능 1</li>
            <li>상세 설명 기능 2</li>
          </ul>
          <img src={biblechatScreenshot} alt="Biblechat Detailed Screenshot" className="home-detail-screenshot" />
          <Link to="/download" className="home-download-button">Download Biblechat</Link>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="home-cta-section">
        <h2 className="home-cta-title">Join MetaMind Today</h2>
        <p className="home-cta-description">Experience the transformative power of our apps. Join our community and start your journey today.</p>
        <div className="home-cta-buttons">
          <Link to="/download" className="home-cta-button">Sign Up</Link>
          <Link to="/contact" className="home-cta-button">Contact Us</Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
