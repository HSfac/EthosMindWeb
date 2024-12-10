import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import SaintsChat from './pages/SaintsChat.jsx';
import Header from './components/Header.jsx';
import BuddhaChat from './pages/BuddhaChat.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saintschat" element={<SaintsChat />} />
        <Route path="/buddhachats" element={<BuddhaChat />} />
      </Routes>
    </Router>
  );
}

export default App;
