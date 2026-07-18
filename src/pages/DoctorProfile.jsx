import React from 'react';
import { FaArrowRight, FaAward, FaBriefcaseMedical, FaGraduationCap, FaHeartPulse } from 'react-icons/fa6';
import './DoctorProfile.css';

const DoctorProfile = () => (
  <main className="doctor-page">
    <section className="doctor-hero">
      <div className="doctor-photo-wrap">
        <img src="/assets/images/about.jpeg" alt="Dr. Pratibha Kendre Jadhavar - Physiotherapist" />
        <span>Dr. Pratibha Kendre Jadhavar</span>
      </div>
      <div className="doctor-intro">
        <div className="doctor-kicker">Meet Your Physiotherapist</div>
        <h1>Dr. Pratibha Kendre Jadhavar </h1>
        <p className="doctor-role">Physiotherapist at Dr. Jadhavar Physiotherapy &amp; Rehabilitation Center</p>
        <p className="doctor-summary">Dedicated physiotherapist committed to helping patients restore movement, relieve pain, and improve their quality of life through evidence-based, personalized care.</p>
        <div className="doctor-facts">
          <article>
            <FaGraduationCap />
            <div>
              <span>Qualifications</span>
              <strong>B.P.Th from Terna Medical College, Mumbai<br />FOMT (IACP)</strong>
            </div>
          </article>
          <article>
            <FaBriefcaseMedical />
            <div>
              <span>Years of Experience</span>
              <strong>6 Years</strong>
            </div>
          </article>
          <article>
            <FaHeartPulse />
            <div>
              <span>Specializations</span>
              <strong>Musculoskeletal disorders, Neurological conditions, Sports injuries, Spine &amp; joint pain, Post-operative rehabilitation</strong>
            </div>
          </article>
          <article>
            <FaAward />
            <div>
              <span>Professional Registration</span>
              <strong>Licensed Physiotherapist</strong>
            </div>
          </article>
        </div>
        <a className="doctor-book-btn" href="/appointment">Book a Consultation <FaArrowRight /></a>
      </div>
    </section>
    <section className="doctor-details">
      <div>
        <span>About the Doctor</span>
        <h2>Personalized care built around your recovery.</h2>
      </div>
      <p>Dr. Pratibha Kendre Jadhavar is a dedicated physiotherapist committed to helping patients restore movement, relieve pain, and improve their quality of life through evidence-based, personalized care. She completed her Bachelor of Physiotherapy (B.P.Th) from Terna Medical College, Mumbai, followed by a Fellowship in Orthopedic Manual Therapy (IACP). With 6 years of clinical experience, she specializes in the assessment and rehabilitation of musculoskeletal disorders, neurological conditions, sports injuries, spine and joint pain, and post-operative rehabilitation. Her treatment approach combines advanced manual therapy with modern rehabilitation techniques to deliver effective, long-lasting results.</p>
    </section>
  </main>
);

export default DoctorProfile;
