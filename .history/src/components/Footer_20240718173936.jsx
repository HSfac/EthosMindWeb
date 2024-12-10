import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2 className="footer-title">SaintsChat</h2>
          <p className="footer-description">Unlock wisdom from history's greatest thinkers with SaintsChat. Explore their ideas and get personalized advice on life, love, happiness, and more.</p>
        </div>
        <div className="footer-section">
          <h3 className="footer-subtitle">Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/saintschat">SaintsChat</a></li>
            <li><a href="/buddhachats">BuddhaChat</a></li>
            <li><a href="/biblechats">BibleChat</a></li>
            <li><a href="/download">Download</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-subtitle">Contact Us</h3>
          <p>Email: support@saintschat.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Wisdom St, Philosophy City, PC 12345</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 SaintsChat. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
