import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2 className="footer-title">SaintsChat</h2>
          <p className="footer-description">Connecting you with the greatest thinkers in history.</p>
        </div>
        <div className="footer-section">
          <h3 className="footer-subtitle">Explore</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/saintschat">SaintsChat</Link></li>
            <li><Link to="/buddhachats">BuddhaChat</Link></li>
            <li><Link to="/biblechats">BibleChat</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-subtitle">Company</h3>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-subtitle">Follow Us</h3>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 SaintsChat. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
