import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        {/* External link for the blog */}
        <li>
          <a
            href="https://ali-tour-blog.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </li>

        {/* Internal links */}
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
