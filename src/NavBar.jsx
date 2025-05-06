"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import "./navbar.css"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Desktop Menu */}
      <ul>
      <li>
          <Link to="/">Home</Link>
        </li>
        {/* External link for the blog */}
        <li>
          <a href="https://ali-tour-blog.netlify.app" target="_blank" rel="noopener noreferrer">
            Blog
          </a>
        </li>

        {/* Internal links */}
       
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
        <li>
          <Link to="/Experience">Experience</Link>
        </li>
        <li>
          <Link to="/Cert">Certificate</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="https://ali-tour-blog.netlify.app" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
              Blog
            </a>
          </li>
          <li>
            <Link to="/Projects" onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/Experience" onClick={closeMenu}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/Contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
