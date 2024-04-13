import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Download from './Components/Download';
import HomePage from './Pages/Homepage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/download/:id" element={<Download />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
