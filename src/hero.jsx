import "./hero.css"
import { Link } from "react-router-dom"
import fharF from './images/fhar_hero_page__1.png';

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-image-container">
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
          <div className="hero-image">
            <img src={fharF} alt="Fhar - Web Developer | React Enthusiast" />
          </div>
        </div>

        <div className="hero-text">
          <h1>
            <span className="name">Fhar</span>
            <span className="title">Web Developer | React Enthusiast</span>
          </h1>
          <p>Currently on a quest to master React and conquer the world of full stack development</p>
          <div className="cta-container">
            <Link to="/about" className="cta-link">
              <button className="cta-button">Let's Connect!</button>
            </Link>
            <div className="scroll-indicator">
              
            </div>
          </div>
        </div>
      </div>

      <div className="hero-background">
        <div className="bg-shape shape1"></div>
        <div className="bg-shape shape2"></div>
      </div>
    </div>
  )
}

export default Hero
