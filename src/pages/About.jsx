import React from 'react';
import { FaUserMd, FaMicrochip, FaClipboardList, FaFlask, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero-heading">
        <span>About Dr. Jadhavar</span>
        <h1 className="about-title" id="about-hero-title">Expert care for a stronger, pain-free life.</h1>
      </div>
      <section className="about-hero" aria-labelledby="about-hero-title">
        <img className="about-hero-image" src="/assets/images/ab1.png" alt="Physiotherapist assessing a patient's neck beside an anatomical spine model" />
        <div className="about-hero-cards">
          <article className="about-hero-card primary-card">
            <span>01</span><h2>Personalized Recovery</h2>
            <p>One-to-one physiotherapy plans designed around your condition, movement, and goals.</p>
          </article>
          <article className="about-hero-card secondary-card">
            <span>02</span><h2>Evidence-Based Care</h2>
            <p>Modern clinical techniques that relieve pain, restore mobility, and build lasting confidence.</p>
          </article>
        </div>
      </section>

      {/* Main Content */}
      <div className="about-content">
        <div className="about-grid">
          {/* Left Column - Instagram Reel */}
          <div className="about-reel-section">
            <div className="reel-container">
              <iframe
                src="https://www.instagram.com/p/Dacz0RzkoZ8/embed"
                frameBorder="0"
                allowFullScreen
                scrolling="no"
                allow="encrypted-media; accelerometer; gyroscope; picture-in-picture"
                title="Dr. Jadhavar Physiotherapy Instagram Reel"
                className="instagram-reel"
              ></iframe>
            </div>
            <div className="reel-caption">
              <p className="reel-text">
                "Is joint pain stopping you from living life to the fullest? 🚶‍♀️💥<br />
                Don't let arthritis or stiffness restrict your daily routine. At Dr. Jadhavar's 
                Physiotherapy & Rehabilitation Center, we help you regain your strength, mobility, 
                and confidence through expert pain management and personalized exercise programs."
              </p>
              <div className="reel-hashtags">
                <span>#Physiotherapy</span>
                <span>#JointPain</span>
                <span>#ArthritisRelief</span>
                <span>#PunePhysio</span>
                <span>#MoveBetterLiveBetter</span>
              </div>
              <div className="reel-contact">
                <p>📞 Call Now: 7700995363 | 8928009640</p>
                <p>📍 Visit Us: Wadgaon Budruk, Narhe, Pune.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Information */}
          <div className="about-info-section">
            <h2 className="section-heading">Welcome to Dr. Jadhavar's Physiotherapy & Rehabilitation Center</h2>
            <p className="about-description">
              At Dr. Jadhavar Physiotherapy & Rehabilitation Center, we are committed to providing 
              exceptional care through evidence-based physiotherapy and advanced treatment techniques. 
              Our clinic is dedicated to helping you achieve optimal health, mobility, and quality of life.
            </p>

            {/* Features Grid with Professional Icons */}
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <FaUserMd />
                </div>
                <h3>Qualified Physiotherapist</h3>
                <p>
                  Our team consists of highly qualified and experienced physiotherapists 
                  who are dedicated to your recovery and well-being.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <FaMicrochip />
                </div>
                <h3>Advanced Technology Treatments</h3>
                <p>
                  We utilize state-of-the-art technology and modern treatment methods 
                  to ensure the most effective and efficient recovery process.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <FaClipboardList />
                </div>
                <h3>Personalized Treatment Plans</h3>
                <p>
                  Every patient receives a customized treatment plan designed specifically 
                  for their unique condition, goals, and lifestyle needs.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <FaFlask />
                </div>
                <h3>Evidence-Based Physiotherapy</h3>
                <p>
                  Our treatments are grounded in the latest scientific research and 
                  clinical evidence, ensuring you receive the most effective care available.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <FaShieldAlt />
                </div>
                <h3>Hygienic & Patient-Friendly Clinic</h3>
                <p>
                  We maintain the highest standards of cleanliness and hygiene, 
                  creating a comfortable and welcoming environment for all our patients.
                </p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="about-cta">
              <p className="cta-text">
                Experience the difference of personalized, evidence-based physiotherapy care at 
                Dr. Jadhavar Physiotherapy & Rehabilitation Center.
              </p>
              <Link to="/appointment" className="cta-button">Book an Appointment</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <h3>500+</h3>
            <p>Happy Patients</p>
          </div>
          <div className="stat-item">
            <h3>98%</h3>
            <p>Success Rate</p>
          </div>
          <div className="stat-item">
            <h3>6 Years</h3>
            <p>of Experience</p>
          </div>
          <div className="stat-item">
            <h3>5.0</h3>
            <p>Patient Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
