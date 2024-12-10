import React from 'react';
import { Link } from 'react-router-dom';

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
        </ul>
      </nav>
    </header>
  );
}

export default Header;