import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RoomDetail from './pages/HomeDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/room/:id' element={<RoomDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
