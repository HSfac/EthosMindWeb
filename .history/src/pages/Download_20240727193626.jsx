import React from 'react';
import './Download.css';
import saintsImage from '../assets/images/ph-image-dl.png'; // Update this path with the correct image path
import buddhaImage from '../assets/images/buddha-image-dl.png'; // Update this path with the correct image path
import bibleImage from '../assets/images/jesus-image-dl.png'; // Update this path with the correct image path

function Download() {
  return (
    <main className="download-main">
      <section className="download-section">
        <div className="download-image-container">
          <img src={saintsImage} alt="SaintsChat" className="download-image" />
          <div className="download-content">
            <h1 className="download-title">PhiloChat</h1>
            <p className="download-description">
              The world’s first platform for engaging with the greatest philosophers in history. Discuss and explore philosophical ideas with our AI-driven chat.
            </p>
            <p className="download-rating">COMING SOON</p>
            <div className="download-buttons">
              <a href="#" className="download-button">Download for Android</a>
              <a href="#" className="download-button">Download for iOS</a>
            </div>
          </div>
        </div>
      </section>

      <section className="download-section">
        <div className="download-image-container">
          <img src={buddhaImage} alt="BuddhaChat" className="download-image" />
          <div className="download-content">
            <h1 className="download-title">BuddhaChat</h1>
            <p className="download-description">
              Buddhist meditation and chat app. Connect with other Buddhists, listen to spiritual music, and get daily teachings from the Buddha.
            </p>
            <p className="download-rating">COMING SOON</p>
            <div className="download-buttons">
              <a href="#" className="download-button">Download for Android</a>
              <a href="#" className="download-button">Download for iOS</a>
            </div>
          </div>
        </div>
      </section>

      <section className="download-section">
        <div className="download-image-container">
          <img src={bibleImage} alt="BibleChat" className="download-image" />
          <div className="download-content">
            <h1 className="download-title">BibleChat</h1>
            <p className="download-description">
              Christian devotional and chat app. Connect with other Christians, listen to Christian music, and get daily Bible verses.
            </p>
            <p className="download-rating">★ 5.0 on Google Play and App Store</p>
            <div className="download-buttons">
              <a href="#" className="download-button">Download for Android</a>
              <a href="#" className="download-button">Download for iOS</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Download;
