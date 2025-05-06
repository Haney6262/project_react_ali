import "./Projects.css"
import { Link } from "react-router-dom"
import SciCal from './images/sci-cal.png';
import Pokedex from './images/pokedex.png';

function Projects() {
  return (
    <div className="projects-container">

       {/* Back Button */}
       <button className="back-button" onClick={() => window.history.back()}>
        <span className="arrow-left">←</span>
        <span>Back</span>
      </button>

      <div className="projects-header">
        <h2>My Projects</h2>
        <p>Check out some of my recent work</p>
        <div className="header-decoration">
          <div className="header-circle circle1"></div>
          <div className="header-circle circle2"></div>
        </div>
      </div>

      <div className="projects-grid">
        {/* Weekly Project 1 - Scientific Calculator */}
        <div className="project-card">
          <div className="project-image">
            <img src={SciCal} alt="Scientific Calculator" />
            <div className="project-overlay">
              <span className="project-number">01</span>
            </div>
          </div>
          <div className="project-content">
            <h3>Scientific Calculator</h3>
            <p>
              A fully functional scientific calculator web application with advanced mathematical operations, memory
              functions, and a responsive design.
            </p>
            <div className="project-tech">
              <span className="tech-tag">HTML</span>
              <span className="tech-tag">CSS</span>
              <span className="tech-tag">JavaScript</span>
            </div>
            <div className="project-links">
              <a
                href="https://ali-apolinario-sci-cal.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link primary"
              >
                <span className="link-icon">🔗</span>
                Live Demo
              </a>
              <a href="#" className="project-link secondary">
                <span className="link-icon">📁</span>
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* Weekly Project 2 - Pokemon Battle Simulator */}
        <div className="project-card">
          <div className="project-image">
            <img src={Pokedex} alt="Pokemon Battle Simulator" />
            <div className="project-overlay">
              <span className="project-number">02</span>
            </div>
          </div>
          <div className="project-content">
            <h3>Pokemon Battle Simulator</h3>
            <p>
              An interactive Pokemon battle simulator that allows users to select Pokemon, view their stats, and
              simulate battles with dynamic animations and game mechanics.
            </p>
            <div className="project-tech">
              <span className="tech-tag">React</span>
              <span className="tech-tag">CSS</span>
              <span className="tech-tag">Pokemon API</span>
            </div>
            <div className="project-links">
              <a
                href="https://pokedex-ali-apolinario.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link primary"
              >
                <span className="link-icon">🔗</span>
                Live Demo
              </a>
              <a href="#" className="project-link secondary">
                <span className="link-icon">📁</span>
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="projects-footer">
        <div className="more-projects">
          <span className="more-text">More projects coming soon!</span>
          <div className="dots-container">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
