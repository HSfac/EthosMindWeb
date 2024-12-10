import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import SaintsChat from './pages/SaintsChat.jsx';
import BuddhaChat from './pages/BuddhaChat.jsx';
import BibleChat from './pages/BibleChat.jsx'; // BibleChat 페이지를 추가합니다.
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saintschat" element={<SaintsChat />} />
        <Route path="/buddhachats" element={<BuddhaChat />} />
        <Route path="/biblechats" element={<BibleChat />} /> {/* BibleChat 페이지를 추가합니다. */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;