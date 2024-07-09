import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Menu from './Components/Menu';
import Button from './Components/Button';
import Navigation from './Components/Navigation';
import Transition from './Components/Transition';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/button" element={<Button />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/transition" element={<Transition />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
