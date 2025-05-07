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
      hours: "4 hrs",
      link: "https://simpli-web.app.link/e/E5BASHgS8Sb",
      description:
        "Comprehensive training on CISSP security frameworks, covering assessment methodologies, testing procedures, and operational security measures to protect organizational assets and data.",
    },
    {
      id: 2,
      title: "Become a Machine Learning Expert: Introduction to MATLAB",
      hours: "2 hrs",
      link: "https://simpli-web.app.link/e/0p053g1S8Sb",
      description:
        "Foundation course on MATLAB for machine learning applications, covering essential programming concepts, data visualization, and implementing basic ML algorithms.",
    },
    {
      id: 3,
      title: "Ethical Hacking 101: Beginners Guide to Ethical Hacking",
      hours: "2 hrs",
      link: "https://simpli-web.app.link/e/Ij7fRS6S8Sb",
      description:
        "Introduction to ethical hacking principles and methodologies, teaching responsible vulnerability assessment, penetration testing basics, and security mindset development.",
    },
    {
      id: 4,
      title: "Introduction to the Sorting Algorithms",
      hours: "3 hrs",
      link: "https://simpli-web.app.link/e/Y2JSltbT8Sb",
      description:
        "Exploration of fundamental sorting algorithms including bubble sort, merge sort, quick sort, and heap sort, with analysis of time complexity and practical implementations.",
    },
    {
      id: 5,
      title: "Introduction to Kali Linux Basics",
      hours: "2 hrs",
      link: "https://simpli-web.app.link/e/NVnmQ0rT8Sb",
      description:
        "Hands-on introduction to Kali Linux, the premier penetration testing platform, covering installation, basic commands, and essential security tools for beginners.",
    },
    {
      id: 6,
      title: "Introduction to DevOps Tools",
      hours: "8 hrs",
      link: "https://simpli-web.app.link/e/6mJkJ0uT8Sb",
      description:
        "Overview of essential DevOps tools and practices, including continuous integration, deployment automation, and infrastructure as code for modern software development.",
    },
    {
      id: 7,
      title: "GIT",
      hours: "3 hrs",
      link: "https://simpli-web.app.link/e/v88liPxT8Sb",
      description:
        "Comprehensive guide to Git version control system, covering repositories, branching, merging, and collaborative workflows for effective code management.",
    },
    {
      id: 8,
      title: "Business Analytics with Excel",
      hours: "4 hrs",
      link: "https://simpli-web.app.link/e/71ZAY2AT8Sb",
      description:
        "Practical training on leveraging Excel for business analytics, including data analysis, visualization, pivot tables, and dashboard creation for data-driven decision making.",
    },
    {
      id: 9,
      title: "Introduction to Supervised & Unsupervised Machine Learning",
      hours: "6 hrs",
      link: "https://simpli-web.app.link/e/Lee7QtFT8Sb",
      description:
        "Foundational course on machine learning paradigms, exploring supervised learning algorithms like regression and classification, and unsupervised techniques like clustering and dimensionality reduction.",
    },
    {
      id: 10,
      title: "Introduction to Selenium",
      hours: "6 hrs",
      link: "https://simpli-web.app.link/e/kOMgLfyVaTb",
      description:
        "Comprehensive introduction to Selenium for automated web testing, covering test frameworks, WebDriver, and creating robust test scripts for web applications.",
    },
    {
      id: 11,
      title: "Introduction to Computer-Networking",
      hours: "6 hrs",
      link: "https://simpli-web.app.link/e/DRIfPXVVaTb",
      description:
        "Fundamental concepts of computer networking, including network architecture, protocols, IP addressing, subnetting, and troubleshooting common network issues.",
    },
    {
      id: 12,
      title: "Business Intelligence Fundamentals",
      hours: "10 hrs",
      link: "https://simpli-web.app.link/e/haPImmdWaTb",
      description:
        "Core principles of business intelligence, covering data warehousing, ETL processes, reporting tools, and creating actionable insights from organizational data.",
    },
    {
      id: 13,
      title: "UI/UX Basics",
      hours: "1 hr",
      link: "https://simpli-web.app.link/e/Lwv3P3mXaTb",
      description:
        "Introduction to user interface and user experience design principles, including wireframing, prototyping, user research, and creating intuitive digital experiences.",
    },
    {
      id: 14,
      title: "PMP Basics",
      hours: "9 hrs",
      link: "https://simpli-web.app.link/e/pMDS5zDXaTb",
      description:
        "Overview of Project Management Professional (PMP) methodologies, covering project lifecycle, resource management, risk assessment, and effective project delivery.",
    },
    {
      id: 15,
      title: "Introduction to IoT",
      hours: "2 hrs",
      link: "https://simpli-web.app.link/e/quwaDZm3aTb",
      description:
        "Exploration of Internet of Things concepts, including connected devices, sensors, data collection, and practical applications across various industries.",
    },
    {
      id: 16,
      title: "Blockchain Developer Training",
      hours: "6 hrs",
      link: "https://simpli-web.app.link/e/rNwjnCw4aTb",
      description:
        "Hands-on training for blockchain development, covering distributed ledger technology, smart contracts, decentralized applications, and blockchain architecture.",
    },
    {
      id: 17,
      title: "Introduction to Cryptography for Beginners",
      hours: "3 hrs",
      link: "https://simpli-web.app.link/e/Y9PHMMK4aTb",
      description:
        "Fundamentals of cryptography, including encryption algorithms, hashing, digital signatures, and practical applications in securing digital communications.",
    },
    {
      id: 18,
      title: "Introduction To MS Excel",
      hours: "7 hrs",
      link: "https://simpli-web.app.link/e/cMcTkZV4aTb",
      description:
        "Comprehensive guide to Microsoft Excel, covering formulas, functions, data analysis, visualization tools, and productivity techniques for spreadsheet management.",
    },
    {
      id: 19,
      title: "Getting Started with Machine Learning Algorithms",
      hours: "6 hrs",
      link: "https://simpli-web.app.link/e/AOIIhjg5aTb",
      description:
        "Practical introduction to machine learning algorithms, including decision trees, neural networks, support vector machines, and their implementation in real-world scenarios.",
    },
    {
      id: 20,
      title: "Gemini for Google Workspace",
      hours: "2 hrs",
      link: "https://simpli-web.app.link/e/WFfylVi5aTb",
      description:
        "Training on integrating and leveraging Gemini AI capabilities within Google Workspace, enhancing productivity and collaboration with AI-powered tools.",
    },
    {
      id: 21,
      title: "Introduction to Flutter Course Online",
      hours: "2 hrs",
      link: "https://simpli-web.app.link/e/dJbmS4p5aTb",
      description:
        "Getting started with Flutter for cross-platform mobile app development, covering Dart programming, widgets, state management, and building responsive UIs.",
    },
    {
      id: 22,
      title: "RAG Course for Beginners",
      hours: "3 hrs",
      link: "https://simpli-web.app.link/e/xG9ywcw5aTb",
      description:
        "Introduction to Retrieval-Augmented Generation (RAG) for AI applications, combining information retrieval with generative AI to create more accurate and contextual responses.",
    },
    {
      id: 23,
      title: "Python Pandas Basics Course",
      hours: "5 hrs",
      link: "https://simpli-web.app.link/e/iiDdyjB5aTb",
      description:
        "Fundamentals of Python Pandas library for data manipulation and analysis, covering DataFrames, Series, data cleaning, transformation, and visualization techniques.",
    },
    {
      id: 24,
      title: "Salesforce Certified Administrator",
      hours: "7 hrs",
      link: "https://simpli-web.app.link/e/gvD89a56aTb",
      description:
        "Preparation for Salesforce Administrator certification, covering user management, security, customization, data management, and automation within the Salesforce platform.",
    },
    {
      id: 25,
      title: "Introduction to Data Science",
      hours: "7 hrs",
      link: "https://simpli-web.app.link/e/Ks85Qym7aTb",
      description:
        "Comprehensive overview of data science fundamentals, including data collection, cleaning, analysis, visualization, and implementing machine learning models for insights.",
    },
    {
      id: 26,
      title: "Introduction to Machine Learning with R",
      hours: "10 hrs",
      link: "https://simpli-web.app.link/e/tI9CrVQ7aTb",
      description:
        "Practical guide to implementing machine learning algorithms using R programming language, covering statistical analysis, data visualization, and predictive modeling.",
    },
    {
      id: 27,
      title: "Deep Learning for Beginners",
      hours: "7 hrs",
      link: "https://simpli-web.app.link/e/cJp8i0b8aTb",
      description:
        "Introduction to deep learning concepts and neural networks, covering architectures, training methodologies, and applications in computer vision, NLP, and more.",
    },
    {
      id: 28,
      title: "Introduction to Cloud Security",
      hours: "7 hrs",
      link: "https://simpli-web.app.link/e/JSJbg7h8aTb",
      description:
        "Essential security principles for cloud environments, covering threat modeling, identity management, data protection, compliance, and security best practices.",
    },
    {
      id: 29,
      title: "ReactJS for Beginners",
      hours: "6 hrs",
      link: "https://simpli-web.app.link/e/ObPdYks8aTb",
      description:
        "Hands-on introduction to React.js library for building user interfaces, covering components, state management, hooks, routing, and modern front-end development practices.",
    },
    {
      id: 30,
      title: "Introduction to Cloud Computing",
      hours: "2 hrs",
      link: "https://simpli-web.app.link/e/7kesTey8aTb",
      description:
        "Overview of cloud computing concepts, service models (IaaS, PaaS, SaaS), deployment models, and major cloud providers and their core services.",
    },
    {
      id: 31,
      title: "Introduction to Artificial Intelligence",
      hours: "2 hrs",
      link: "https://simpli-web.app.link/e/PQoAXfL8aTb",
      description:
        "Foundational concepts of artificial intelligence, including machine learning, neural networks, natural language processing, and real-world AI applications.",
    },
    {
      id: 32,
      title: "Generative AI for Beginners",
      hours: "4 hrs",
      link: "https://simpli-web.app.link/e/j5j2MkY8aTb",
      description:
        "Introduction to generative AI models like GANs, diffusion models, and large language models, with practical applications in content creation and problem-solving.",
    },
    {
      id: 33,
      title: "Introduction to the Computer Networking",
      hours: "3 hrs",
      link: "https://simpli-web.app.link/e/oMa19j98aTb",
      description:
        "Comprehensive overview of computer networking principles, including OSI model, TCP/IP, routing, switching, and network security fundamentals.",
    },
    {
      id: 34,
      title: "Introduction to Cyber Security",
      hours: "2 hrs",
      link: "https://simpli-web.app.link/e/vgH88zn9aTb",
      description:
        "Essential cybersecurity concepts, including threat identification, vulnerability assessment, security controls, and best practices for protecting digital assets.",
    },
    {
      id: 35,
      title: "Data Analysis with Python",
      hours: "300 hrs",
      link: "https://www.freecodecamp.org/certification/fcc779b5727-97a4-4775-b5b9-77f54d99a157/data-analysis-with-python-v7",
      description:
        "Comprehensive training in Python-based data analysis, covering libraries like Pandas, NumPy, Matplotlib, and techniques for data cleaning, visualization, and statistical analysis.",
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
            <div className="certificate-hours">{cert.hours}</div>
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
            in various technical domains. With over 35 certifications totaling more than 400 hours of learning, I'm
            constantly seeking new opportunities to grow in the ever-evolving tech landscape.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Certificate
