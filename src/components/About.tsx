import React from 'react'

export default function About() {
  return (
    <main className="about-page">
      <div className="contact-container">
        <h1>CONTACT</h1>
        <div className="contact-links">
          <a 
            href="https://www.linkedin.com/in/thibaut-rappaport-4b0739234" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link linkedin"
          >
            <i className="fab fa-linkedin"></i>
            linkedin profile
          </a>
          <a 
            href="mailto:thibaut.rappaport@yahoo.com"
            className="contact-link email"
          >
            <i className="far fa-envelope"></i>
            thibaut.rappaport@yahoo.com
          </a>
          <a 
            href="/Resume UPTD - Thibaut Rappaport.jpg"
            download="Thibaut_Rappaport_Resume.jpg"
            className="contact-link resume"
          >
            <i className="fas fa-file-alt"></i>
            download resume
          </a>
        </div>
      </div>
    </main>
  )
} 