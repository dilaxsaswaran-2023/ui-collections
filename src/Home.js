import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import './Home.css';

function Home() {
  return (
    <div className="container">
      <div className="ring"><FontAwesomeIcon icon={faStar} /></div>
      <div className="card-container">
        <div className="card">
          <a href="/menu">Menu</a>
        </div>
        <div className="card">
          <a href="/button">Button</a>
        </div>
        <div className="card">
          <a href="/navigation">Navigation</a>
        </div>
        <div className="card">
          <a href="/transition">Transition</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
