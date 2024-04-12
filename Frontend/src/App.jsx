import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Trending from './Components/Trending';
import NewSection from './Components/NewSection';
import Footer from './Components/Footer';
import Download from './Components/Download';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/new" element={<NewSection />} />
        <Route path="/download/:id" element={<Download />} />
      </Routes>
      <Trending/>
      <NewSection/>
      <Footer />
    </>
  );
}

export default App;
