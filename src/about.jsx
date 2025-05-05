"use client"

import { useState } from "react"
import "./about.css"
import { ArrowLeft, ChevronDown, Phone, Mail } from "lucide-react"
import fharProfile from './images/profile_me.jpeg';
import SkillsNexp from './images/skills_exp.png';
import CareerG from './images/career_goal.png';


export default function About() {
  const [activeFact, setActiveFact] = useState(null)

  const toggleFact = (factId) => {
    if (activeFact === factId) {
      setActiveFact(null)
    } else {
      setActiveFact(factId)
    }
  }

  return (
    <div className="about-container" id="about">
      {/* Back Button */}
      <button className="back-button" onClick={() => window.history.back()}>
        <ArrowLeft size={20} />
        <span>Back</span>
      </button>

      {/* About Me Section */}
      <section className="about-me" id="Me">
        <div className="profile-image">
          <img src={fharProfile} alt="Fhar's Profile" />
        </div>
        <div className="about-me-content">
          <h2>About Me</h2>
          <p>
            Hi, I'm Fhar, a budding web developer with a passion for crafting clean, efficient, and user-friendly web
            applications. I'm currently focused on mastering React.js and exploring the exciting world of full-stack
            development.
          </p>
          <p>I enjoy the challenge of problem-solving and the satisfaction of bringing ideas to life through code.</p>
        </div>
      </section>

      {/* Skills and Expertise Card */}
      <section className="card-section" id="skills">
        <div className="card skills-card">
          <div className="card-image">
            <img src={SkillsNexp} alt="Skills and Expertise" />
          </div>
          <div className="card-content">
            <h2>Skills & Expertise</h2>
            <p>
              I'm proficient in front-end technologies like HTML, CSS, and JavaScript, and I'm actively expanding my
              skillset with React.js. I also have some experience with Python and a basic understanding of machine
              learning concepts.
            </p>
            <p>
              While I'm still developing my expertise, I'm a quick learner and always eager to take on new challenges.
              I'm confident in my ability to build functional websites and applications, and I'm constantly seeking
              opportunities to improve and expand my knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Career Goals Card */}
      <section className="card-section reverse" id="goals">
        <div className="card career-card">
          <div className="card-content">
            <h2>Career Goals</h2>
            <p>
              My long-term goal is to work in the field of cybersecurity. I'm fascinated by the challenges and
              importance of protecting digital systems, and I believe my growing development skills will be a valuable
              asset in this area.
            </p>
            <p>
              Of course, a comfortable life is also a motivating factor! I'm eager to find a role where I can contribute
              to a secure digital world while building a stable future.
            </p>
          </div>
          <div className="card-image">
            <img src={CareerG} alt="Career Goals" />
          </div>
        </div>
      </section>

      {/* Fun Facts Section (Personal Touch) */}
      <section className="fun-facts" id="personal">
        <h2>Personal Touch</h2>
        <div className="facts-container">
          <div className="fact">
            <button className={`fact-button ${activeFact === 1 ? "active" : ""}`} onClick={() => toggleFact(1)}>
              Anime Fan
              <ChevronDown className={`chevron ${activeFact === 1 ? "rotate" : ""}`} />
            </button>
            <div className={`fact-content ${activeFact === 1 ? "show" : ""}`}>
              <p>
                Outside of coding, I'm a big anime fan. I love the storytelling and creativity found in many series.
                Some of my favorites include [your favorite anime series].
              </p>
            </div>
          </div>

          <div className="fact">
            <button className={`fact-button ${activeFact === 2 ? "active" : ""}`} onClick={() => toggleFact(2)}>
              Cat Person
              <ChevronDown className={`chevron ${activeFact === 2 ? "rotate" : ""}`} />
            </button>
            <div className={`fact-content ${activeFact === 2 ? "show" : ""}`}>
              <p>
                I'm definitely a cat person - they're the perfect companions! Their independent yet affectionate nature
                makes them ideal pets for a developer lifestyle.
              </p>
            </div>
          </div>

          <div className="fact">
            <button className={`fact-button ${activeFact === 3 ? "active" : ""}`} onClick={() => toggleFact(3)}>
              Cooking Enthusiast
              <ChevronDown className={`chevron ${activeFact === 3 ? "rotate" : ""}`} />
            </button>
            <div className={`fact-content ${activeFact === 3 ? "show" : ""}`}>
              <p>
                When I'm not glued to a screen, I enjoy experimenting in the kitchen. Cooking is a great way for me to
                relax and explore my creative side. I especially enjoy trying new recipes and cuisines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section" id="call">
        <div className="cta-content">
          <h2>Let's Connect</h2>
          <p>
            I'm always open to connecting with other developers and learning about new opportunities. Feel free to reach
            out - let's chat!
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <Phone size={20} />
              <span>+6391 5248 8217</span>
            </div>
            <div className="contact-item">
              <Mail size={20} />
              <span>fharhanasali19@gmail.com</span>
            </div>
          </div>
          <button className="cta-button">Get In Touch</button>
        </div>
      </section>
    </div>
  )
}
