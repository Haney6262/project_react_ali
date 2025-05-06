import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './NavBar';
import Hero from './hero';
import About from './about';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Projects" element={<Projects/>} />
          <Route path="/Contact" element={<Contact />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
