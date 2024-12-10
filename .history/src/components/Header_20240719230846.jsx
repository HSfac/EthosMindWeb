import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoWhite from '../assets/images/metamindlogoblack.png';
import logoBlack from './metamindlogoblack.png';

function Header() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    const darkModeClass = 'dark-mode';
    const bodyClassList = document.body.classList;
    if (isDarkMode) {
      bodyClassList.add(darkModeClass);
    } else {
      bodyClassList.remove(darkModeClass);
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="header">
      <div className="header-title">
        <img src={isDarkMode ? logoWhite : logoBlack} alt="MetaMind Logo" />
        <h1>MetaMind</h1>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/saintschat">SaintsChat</Link></li>
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
