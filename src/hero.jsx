import React from 'react';
import './hero.css';
import fharImage from './images/fhar_hero_page__1.png';

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-image">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <img src={fharImage} alt="Fhar - Web Developer | React Enthusiast" />
      </div>
      <div className="hero-text">
        <h1>Fhar - Web Developer | React Enthusiast</h1>
        <p>Currently on a quest to master React and conquer the world of full stack development</p>
        <button>Let's Connect!</button>
      </div>
    </div>
  );
}

export default Hero;
