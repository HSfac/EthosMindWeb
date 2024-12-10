import React from 'react';
import './Home.css';
import heroImage from '../assets/images/hero-image.png'; // 이미지 예시, 적절한 경로와 이미지로 교체해주세요
import philochatScreenshot from '../assets/images/ph-dl.png'; // 이미지 예시, 적절한 경로와 이미지로 교체해주세요
import buddhachatScreenshot from '../assets/images/buddhachat-screenshot.png'; // 이미지 예시, 적절한 경로와 이미지로 교체해주세요
import biblechatScreenshot from '../assets/images/biblechat-screenshot.png'; // 이미지 예시, 적절한 경로와 이미지로 교체해주세요

function Home() {
  return (
    <main className="landing-page">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-content">
          <h1 className="hero-title">Welcome to MetaMind</h1>
          <p className="hero-description">Explore our innovative apps designed to enrich your spiritual journey and philosophical discussions.</p>
          <div className="hero-buttons">
            <button className="hero-button">Get Started</button>
            <button className="hero-button">Learn More</button>
          </div>
        </div>
      </section>

      {/* App Introduction Section */}
      <section className="app-introduction">
        <div className="app-intro-card">
          <h2 className="app-title">Philochat</h2>
          <p className="app-description">Engage in profound philosophical discussions with AI philosophers. Receive daily philosophy feeds and interact with a vibrant community.</p>
          <ul className="app-features">
            <li>AI 철학자들과 채팅</li>
            <li>데일리 철학 피드</li>
            <li>커뮤니티 기능</li>
          </ul>
          <img src={philochatScreenshot} alt="Philochat App Screenshot" className="app-screenshot" />
          <button className="learn-more-button">Learn More</button>
        </div>
        
        <div className="app-intro-card">
          <h2 className="app-title">Buddhachat</h2>
          <p className="app-description">Connect with Buddhas for insightful conversations. Track your meditation progress with our meditation tracker feature.</p>
          <ul className="app-features">
            <li>부처와 채팅</li>
            <li>명상 기록 및 트래커 기능</li>
          </ul>
          <img src={buddhachatScreenshot} alt="Buddhachat App Screenshot" className="app-screenshot" />
          <button className="learn-more-button">Learn More</button>
        </div>
        
        <div className="app-intro-card">
          <h2 className="app-title">Biblechat</h2>
          <p className="app-description">Chat with the Bible and explore the scriptures. Receive daily Bible feeds to inspire your faith journey.</p>
          <ul className="app-features">
            <li>성경책과 채팅</li>
            <li>데일리 성경 피드</li>
          </ul>
          <img src={biblechatScreenshot} alt="Biblechat App Screenshot" className="app-screenshot" />
          <button className="learn-more-button">Learn More</button>
        </div>
      </section>

      {/* Detailed App Sections */}
      <section className="detailed-app-section">
        <div id="philochat-detail" className="app-detail">
          <h2 className="detail-title">Discover Philochat</h2>
          <p className="detail-description">Philochat는 철학자와 철학 애호가들이 만나 토론하고 배울 수 있는 플랫폼입니다. AI 철학자와의 채팅을 통해 새로운 통찰을 얻고, 매일 제공되는 철학 피드를 통해 지식을 넓히세요.</p>
          <ul className="detail-features">
            <li>상세 설명 기능 1</li>
            <li>상세 설명 기능 2</li>
          </ul>
          <img src={philochatScreenshot} alt="Philochat Detailed Screenshot" className="detail-screenshot" />
          <button className="download-button">Download Philochat</button>
        </div>

        <div id="buddhachat-detail" className="app-detail">
          <h2 className="detail-title">Discover Buddhachat</h2>
          <p className="detail-description">Buddhachat는 부처와의 대화를 통해 명상과 깨달음을 추구하는 사용자들을 위한 플랫폼입니다. 명상 기록과 트래커 기능을 통해 명상 습관을 추적하고 발전시키세요.</p>
          <ul className="detail-features">
            <li>상세 설명 기능 1</li>
            <li>상세 설명 기능 2</li>
          </ul>
          <img src={buddhachatScreenshot} alt="Buddhachat Detailed Screenshot" className="detail-screenshot" />
          <button className="download-button">Download Buddhachat</button>
        </div>

        <div id="biblechat-detail" className="app-detail">
          <h2 className="detail-title">Discover Biblechat</h2>
          <p className="detail-description">Biblechat는 성경과의 대화를 통해 신앙을 깊이 있게 탐구할 수 있는 플랫폼입니다. 매일 제공되는 성경 피드를 통해 영감을 받고, 성경 공부 그룹에 참여하세요.</p>
          <ul className="detail-features">
            <li>상세 설명 기능 1</li>
            <li>상세 설명 기능 2</li>
          </ul>
          <img src={biblechatScreenshot} alt="Biblechat Detailed Screenshot" className="detail-screenshot" />
          <button className="download-button">Download Biblechat</button>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2 className="cta-title">Join MetaMind Today</h2>
        <p className="cta-description">Experience the transformative power of our apps. Join our community and start your journey today.</p>
        <div className="cta-buttons">
          <button className="cta-button">Sign Up</button>
          <button className="cta-button">Contact Us</button>
        </div>
      </section>
    </main>
  );
}

export default Home;
