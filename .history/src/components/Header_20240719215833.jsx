import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">SaintsChat</h1>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/saintschat">SaintsChat</Link></li>
          <li className="nav-item"><Link to="/buddhachats">BuddhaChat</Link></li>
          <li className="nav-item"><Link to="/biblechats">BibleChat</Link></li>
          <li className="nav-item header-download-button"><Link to="/download">Download</Link></li>
          <li className="nav-item"><button className="toggle-button" onClick={() => document.body.classList.toggle('dark-mode')}>🌓</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
