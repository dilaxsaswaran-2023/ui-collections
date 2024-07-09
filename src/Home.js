import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="card">
        <Link to="/menu">Menu</Link>
      </div>
      <div className="card">
        <Link to="/button">Button</Link>
      </div>
      <div className="card">
        <Link to="/navigation">Navigation</Link>
      </div>
      <div className="card">
        <Link to="/transition">Transition</Link>
      </div>
    </div>
  );
}

export default Home;
