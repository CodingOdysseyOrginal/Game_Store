import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Download from './Pages/Download';
import HomePage from './Pages/Homepage';

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/download/:id" element={<Download />} />
      </Routes>

    </>
  );
}

export default App;
