"use client"

import { useState } from "react"
import "./Certificate.css"

function Certificate() {
  const [activeCard, setActiveCard] = useState(null)

  const handleCardHover = (index) => {
    setActiveCard(index)
  }

  const handleCardLeave = () => {
    setActiveCard(null)
  }

  const certificates = [
    {
      id: 1,
      title: "Introduction to CISSP Security Assessment & Testing and Security Operations",
      link: "https://simpli-web.app.link/e/E5BASHgS8Sb",
      description:
        "Comprehensive training on CISSP security frameworks, covering assessment methodologies, testing procedures, and operational security measures to protect organizational assets and data.",
      icon: "🔒",
    },
    {
      id: 2,
      title: "Become a Machine Learning Expert: Introduction to MATLAB",
      link: "https://simpli-web.app.link/e/0p053g1S8Sb",
      description:
        "Foundation course on MATLAB for machine learning applications, covering essential programming concepts, data visualization, and implementing basic ML algorithms.",
      icon: "🤖",
    },
    {
      id: 3,
      title: "Ethical Hacking 101: Beginners Guide to Ethical Hacking",
      link: "https://simpli-web.app.link/e/Ij7fRS6S8Sb",
      description:
        "Introduction to ethical hacking principles and methodologies, teaching responsible vulnerability assessment, penetration testing basics, and security mindset development.",
      icon: "🛡️",
    },
    {
      id: 4,
      title: "Introduction to the Sorting Algorithms",
      link: "https://simpli-web.app.link/e/Y2JSltbT8Sb",
      description:
        "Exploration of fundamental sorting algorithms including bubble sort, merge sort, quick sort, and heap sort, with analysis of time complexity and practical implementations.",
      icon: "📊",
    },
    {
      id: 5,
      title: "Become a Machine Learning Expert: Introduction to MATLAB",
      link: "https://simpli-web.app.link/e/wwI92qnT8Sb",
      description:
        "Advanced MATLAB techniques for machine learning, covering neural networks, deep learning frameworks, and practical applications in data science projects.",
      icon: "📈",
    },
    {
      id: 6,
      title: "Introduction to Kali Linux Basics",
      link: "https://simpli-web.app.link/e/NVnmQ0rT8Sb",
      description:
        "Hands-on introduction to Kali Linux, the premier penetration testing platform, covering installation, basic commands, and essential security tools for beginners.",
      icon: "🐧",
    },
    {
      id: 7,
      title: "Introduction to DevOps Tools",
      link: "https://simpli-web.app.link/e/6mJkJ0uT8Sb",
      description:
        "Overview of essential DevOps tools and practices, including continuous integration, deployment automation, and infrastructure as code for modern software development.",
      icon: "🔄",
    },
    {
      id: 8,
      title: "GIT",
      link: "https://simpli-web.app.link/e/v88liPxT8Sb",
      description:
        "Comprehensive guide to Git version control system, covering repositories, branching, merging, and collaborative workflows for effective code management.",
      icon: "📝",
    },
    {
      id: 9,
      title: "Business Analytics with Excel",
      link: "https://simpli-web.app.link/e/71ZAY2AT8Sb",
      description:
        "Practical training on leveraging Excel for business analytics, including data analysis, visualization, pivot tables, and dashboard creation for data-driven decision making.",
      icon: "📊",
    },
    {
      id: 10,
      title: "Introduction to Supervised & Unsupervised Machine Learning",
      link: "https://simpli-web.app.link/e/Lee7QtFT8Sb",
      description:
        "Foundational course on machine learning paradigms, exploring supervised learning algorithms like regression and classification, and unsupervised techniques like clustering and dimensionality reduction.",
      icon: "🧠",
    },
  ]

  return (
    <div className="certificates-container">
      {/* Back Button */}
      <button className="back-button" onClick={() => window.history.back()}>
        <span className="arrow-left">←</span>
        <span>Back</span>
      </button>

      <div className="certificates-header">
        <h2>My Certifications</h2>
        <p>Professional development and continuous learning</p>
        <div className="header-decoration">
          <div className="header-circle circle1"></div>
          <div className="header-circle circle2"></div>
        </div>
      </div>

      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div
            key={cert.id}
            className={`certificate-card ${activeCard === index ? "active" : ""}`}
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={handleCardLeave}
          >
            <div className="certificate-icon">{cert.icon}</div>
            <div className="certificate-content">
              <h3>{cert.title}</h3>
              <p>{cert.description}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
                aria-label={`View certificate for ${cert.title}`}
              >
                <span className="link-text">View Certificate</span>
                <span className="link-arrow">→</span>
              </a>
            </div>
            <div className="certificate-number">{cert.id.toString().padStart(2, "0")}</div>
          </div>
        ))}
      </div>

      <div className="certificates-footer">
        <div className="footer-content">
          <h3>Continuous Learning</h3>
          <p>
            These certifications represent my commitment to ongoing professional development and expanding my knowledge
            in various technical domains. I'm constantly seeking new opportunities to learn and grow in the
            ever-evolving tech landscape.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Certificate
