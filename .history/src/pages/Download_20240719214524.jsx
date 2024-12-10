import React from 'react';
import './Download.css';
import saintsImage from '../assets/images/ph-image.png'; // Update this path with the correct image path
import buddhaImage from '../assets/images/buddha-image.png'; // Update this path with the correct image path
import bibleImage from '../assets/images/bible-image.png'; // Update this path with the correct image path

function Download() {
  return (
    <main className="download-main">
      <section className="download-section">
        <img src={saintsImage} alt="ChatSaints" className="download-image" />
        <div className="download-content">
          <h1 className="download-title">ChatSaints</h1>
          <p className="download-description">
            The world’s first conversation intelligence platform for sales teams. Turn every sales call into a revenue intelligence goldmine.
          </p>
          <div className="download-buttons">
            <button className="download-button">Download for Android</button>
            <button className="download-button">Download for iOS</button>
          </div>
        </div>
      </section>

      <section className="download-section">
        <img src={buddhaImage} alt="BuddhaChat" className="download-image" />
        <div className="download-content">
          <h1 className="download-title">BuddhaChat</h1>
          <p className="download-description">
            Buddhist meditation and chat app. Connect with other Buddhists, listen to spiritual music, and get daily teachings from the Buddha.
          </p>
          <div className="download-buttons">
            <button className="download-button">Download for Android</button>
            <button className="download-button">Download for iOS</button>
          </div>
        </div>
      </section>

      <section className="download-section">
        <img src={bibleImage} alt="BibleChat" className="download-image" />
        <div className="download-content">
          <h1 className="download-title">BibleChat</h1>
          <p className="download-description">
            Christian devotional and chat app. Connect with other Christians, listen to Christian music, and get daily Bible verses.
          </p>
          <div className="download-buttons">
            <button className="download-button">Download for Android</button>
            <button className="download-button">Download for iOS</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Download;
