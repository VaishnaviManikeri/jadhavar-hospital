import React from 'react';
import { FaArrowRight, FaAward, FaBriefcaseMedical, FaGraduationCap, FaHeartPulse } from 'react-icons/fa6';
import './DoctorProfile.css';

const DoctorProfile = () => (
  <main className="doctor-page">
    <section className="doctor-hero">
      <div className="doctor-photo-wrap">
        <img src="/assets/images/dr.png" alt="Representative professional portrait placeholder for Dr. Pratibha Kendre" />
        <span>Representative photo — replace with verified portrait</span>
      </div>
      <div className="doctor-intro">
        <div className="doctor-kicker">Meet Your Physiotherapist</div>
        <h1>Dr. Pratibha Kendre</h1>
        <p className="doctor-role">Physiotherapist at Dr. Jadhavar Physiotherapy &amp; Rehabilitation Center</p>
        <p className="doctor-summary">Dedicated to patient-centered rehabilitation, safe movement, and helping every patient return to daily life with greater comfort and confidence.</p>
        <div className="doctor-facts">
          <article><FaGraduationCap /><div><span>Qualifications</span><strong>Awaiting verified details</strong></div></article>
          <article><FaBriefcaseMedical /><div><span>Years of Experience</span><strong>Awaiting verified details</strong></div></article>
          <article><FaHeartPulse /><div><span>Specializations</span><strong>Awaiting verified details</strong></div></article>
          <article><FaAward /><div><span>Professional Registration</span><strong>Awaiting verified details</strong></div></article>
        </div>
        <a className="doctor-book-btn" href="/appointment">Book a Consultation <FaArrowRight /></a>
      </div>
    </section>
    <section className="doctor-details">
      <div><span>About the Doctor</span><h2>Personalized care built around your recovery.</h2></div>
      <p>Dr. Pratibha Kendre is associated with Dr. Jadhavar Physiotherapy &amp; Rehabilitation Center. Her confirmed degree, clinical experience, registrations, and specialization details should be added here once supplied by the clinic. This verification-first approach keeps the public profile accurate and professionally responsible.</p>
    </section>
  </main>
);

export default DoctorProfile;
