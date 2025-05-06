import "./Experience.css"
import { Link } from "react-router-dom"
import SE from './images/se_front.jpeg';
function Experience() {
  return (
    <div className="experience-container">

      {/* Back Button */}
      <button className="back-button" onClick={() => window.history.back()}>
        <span className="arrow-left">←</span>
        <span>Back</span>
      </button>


      {/* Header Section */}
      <div className="experience-header">
        <div className="header-content">
          <h2>WMSU Wellness Program</h2>
          <h3>Innovatica</h3>
        </div>
        <div className="decorative-element">
          <div className="circle-dec circle-dec1"></div>
          <div className="circle-dec circle-dec2"></div>
        </div>
      </div>

      <div className="experience-content">
        {/* Image Card */}
        <div className="experience-image-card">
          <div className="image-container">
            <img src={SE} alt="WMSU Wellness Program" />
            <div className="image-overlay">
              <span className="project-badge">Backend Development</span>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="experience-description">
          <div className="description-card">
            <h4>About the Project</h4>
            <p>
              The WMSU Wellness Program is a robust web-based system designed to analyze, track, manage, and guide
              wellness users towards a healthier lifestyle. Specifically, it supports users in their weight loss journey
              while helping them maintain overall wellness through comprehensive monitoring and data-driven insights.
            </p>
          </div>

          <div className="description-card">
            <h4>My Role</h4>
            <p>
              As a Backend Developer, I was responsible for architecting and implementing the server-side logic of the
              application. I built and maintained RESTful API endpoints, designed scalable data models, and integrated
              secure data transactions between the frontend and a MySQL database. My work ensured smooth data flow and
              high performance, enabling the system to manage complex wellness data and deliver personalized insights.
            </p>
          </div>

          {/* Technologies Section */}
          <div className="technologies-section">
            <h4>Technologies Used</h4>
            <div className="tech-icons">
              <div className="tech-icon">
                <span className="tech-icon-symbol">🐍</span>
                <span className="tech-name">Python</span>
              </div>
              <div className="tech-icon">
                <span className="tech-icon-symbol">🎸</span>
                <span className="tech-name">Django</span>
              </div>
              <div className="tech-icon">
                <span className="tech-icon-symbol">📄</span>
                <span className="tech-name">HTML</span>
              </div>
              <div className="tech-icon">
                <span className="tech-icon-symbol">🎨</span>
                <span className="tech-name">CSS</span>
              </div>
              <div className="tech-icon">
                <span className="tech-icon-symbol">📜</span>
                <span className="tech-name">JavaScript</span>
              </div>
              <div className="tech-icon">
                <span className="tech-icon-symbol">📊</span>
                <span className="tech-name">JSON</span>
              </div>
              <div className="tech-icon">
                <span className="tech-icon-symbol">🗄️</span>
                <span className="tech-name">MySQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Stats */}
      <div className="project-stats">
        <div className="stat-item">
          <span className="stat-number"></span>
          <span className="stat-label"></span>
        </div>
        <div className="stat-item">
          <span className="stat-number"></span>
          <span className="stat-label"></span>
        </div>
        <div className="stat-item">
          <span className="stat-number"></span>
          <span className="stat-label"></span>
        </div>
      </div>
    </div>
  )
}

export default Experience
