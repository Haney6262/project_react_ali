"use client"

import { useState } from "react"
import "./Contact.css"
import Li from "./images/linkedin.png"
import fb from "./images/facebook.png"
import gm from "./images/gmail.png"
import fharProfile from './images/profile_me.jpeg';
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    })

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="contact-container">
      {/* Back Button */}
      <button className="back-button" onClick={() => window.history.back()}>
        <span className="arrow-left">←</span>
        <span>Back</span>
      </button>

      {/* Profile Section - Similar to About.jsx */}
      <section className="contact-profile">
        <div className="profile-image">
          <img src={fharProfile} alt="Fhar's Profile" />
        </div>
        <div className="profile-content">
          <h2>Let's Connect</h2>
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel
            free to reach out through any of the channels below or send me a message using the form.
          </p>
        </div>
      </section>

      <div className="contact-header">
        <h2>Get In Touch</h2>
        <p>Have a question or want to work together? Reach out to me!</p>
        <div className="header-decoration">
          <div className="header-circle circle1"></div>
          <div className="header-circle circle2"></div>
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Feel free to reach out through any of these channels:</p>

          <div className="contact-methods">
            <a href="mailto:fharhanasali19@gmail.com" className="contact-method">
              <div className="contact-icon email-icon">
                <img src={gm || "/placeholder.svg"} alt="gmail" />
              </div>
              <div className="contact-detail">
                <h4>Email</h4>
                <p>fharhanasali19@gmail.com</p>
              </div>
            </a>

            <a href="tel:+639152488217" className="contact-method">
              <div className="contact-icon phone-icon">📱</div>
              <div className="contact-detail">
                <h4>Phone</h4>
                <p>+63 915 248 8217</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/fharhana-ali-b32b73359"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-method"
            >
              <div className="contact-icon linkedin-icon">
                <img src={Li || "/placeholder.svg"} alt="linkedin" />
              </div>
              <div className="contact-detail">
                <h4>LinkedIn</h4>
                <p>Connect with me</p>
              </div>
            </a>

            <a
              href="https://www.facebook.com/fharhana.ali.10/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-method"
            >
              <div className="contact-icon facebook-icon">
                <img src={fb || "/placeholder.svg"} alt="facebook" />
              </div>
              <div className="contact-detail">
                <h4>Facebook</h4>
                <p>Follow me</p>
              </div>
            </a>
          </div>

          <div className="availability-info">
            <h4>Availability</h4>
            <p>
              I'm currently <span className="availability-status available">available</span> for freelance work and
              full-time opportunities.
            </p>
            <p className="response-time">
              <span className="highlight">Average response time:</span> Within 24 hours
            </p>
          </div>
        </div>

        <div className="contact-form-container">
          <h3>Send Me a Message</h3>
          {formStatus.submitted && (
            <div className={`form-message ${formStatus.success ? "success" : "error"}`}>{formStatus.message}</div>
          )}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this regarding?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="contact-footer">
        <p>
          Thank you for visiting my portfolio. I look forward to connecting with you and discussing potential
          opportunities!
        </p>
      </div>
    </div>
  )
}

export default Contact
