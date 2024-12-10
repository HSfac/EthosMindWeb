import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoBlack from '../assets/image/metamindlogoblack.svg'; // 로고 이미지 경로에 맞게 수정하세요.
import logoWhite from '../assets/image/metamindlogowhite.svg'; // 로고 이미지 경로에 맞게 수정하세요.

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeClass = 'dark-mode';
    const bodyClassList = document.body.classList;
    const isDark = bodyClassList.contains(darkModeClass);
    setIsDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="header">
      <div className="header-logo-container">
        <img
          src={isDarkMode ? logoWhite : logoBlack}
          alt="MetaMind Logo"
          className="header-logo"
        />
        <h1 className="header-title">MetaMind</h1>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/saintschat">PhiloChat</Link></li>
          <li className="nav-item"><Link to="/buddhachats">BuddhaChat</Link></li>
          <li className="nav-item"><Link to="/biblechats">BibleChat</Link></li>
          <li className="nav-item header-download-button"><Link to="/download">Download</Link></li>
          <li className="nav-item"><button className="toggle-button" onClick={toggleDarkMode}>🌓</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
