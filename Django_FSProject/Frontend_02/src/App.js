import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MusicRoom from './components/MusicRoom';
import ChatRoom from './components/ChatRoom';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/musicroom" element={<MusicRoom />} />
        <Route path="/chatroom" element={<ChatRoom />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;