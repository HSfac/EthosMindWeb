import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import SaintsChat from './pages/SaintsChat.jsx';
import BuddhaChat from './pages/BuddhaChat.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import BibleChat from './pages/BibleChat.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saintschat" element={<SaintsChat />} />
        <Route path="/buddhachats" element={<BuddhaChat />} />
        <Route path="/biblechat" element={<BibleChat />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
