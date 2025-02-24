import React from 'react';
import './about.css';

function About() {
  return (
    <div className="about-container" id="about">
      <div className="about-me left-align" id="Me">
        <h2>About Me</h2>
        <p>
          Hi, I'm Fhar, a budding web developer with a passion for crafting clean, efficient, and user-friendly web applications. 
          I'm currently focused on mastering React.js and exploring the exciting world of full-stack development.
          I enjoy the challenge of problem-solving and the satisfaction of bringing ideas to life through code.
        </p>
      </div>

      <div className="skills-container right-align" id="skills">
        <h2>Skills & Expertise</h2>
        <p>I'm proficient in front-end technologies like HTML, CSS, and JavaScript, and I'm actively expanding my skillset with React.js. 
           I also have some experience with Python and a basic understanding of machine learning concepts.
           While I'm still developing my expertise, I'm a quick learner and always eager to take on new challenges. 
           I'm confident in my ability to build functional websites and applications, and I'm constantly seeking opportunities to improve and expand my knowledge.
        </p>
      </div>

      <div className="goals-container left-align" id="goals">
        <h2>Career Goals</h2>
        <p>My long-term goal is to work in the field of cybersecurity.
           I'm fascinated by the challenges and importance of protecting digital systems, and I believe my growing development skills will be a valuable asset in this area. 
           Of course, a comfortable life is also a motivating factor!  I'm eager to find a role where I can contribute to a secure digital world while building a stable future.
        </p>
      </div>

      <div className="personal-container right-align" id="personal">
        <h2>Personal Touch</h2>
        <p>Outside of coding, I'm a big anime fan. I love the storytelling and creativity found in many series. 
           I'm also a cat person they're the perfect companions! And when I'm not glued to a screen, 
           I enjoy experimenting in the kitchen. Cooking is a great way for me to relax and explore my creative side.
        </p>
      </div>

      <div className="call-container center" id="call">
        
        <p>I'm always open to connecting with other developers and learning about new opportunities. Feel free to reach out let's chat!</p>
        <p>You can find my contact information below.</p>
          <p>phone: +6391 5248 8217</p>
          <p> email: fharhanasali19@gmail.com</p>
      </div>
    </div>
  );
}

export default About;
