import React, { useState } from "react";

/**
 * Contact.jsx
 * Dr. Jadhavar Physiotherapy & Rehabilitation Center — Contact page
 * Palette: #08A3A3 (teal) + White + Black
 * Font: Poppins
 * Banner image: /assets/images/contact.png
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook up to your backend / email service here
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="ct-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

        :root {
          --teal: #08A3A3;
          --teal-dark: #066b6b;
          --teal-tint: #e6f7f7;
          --black: #0a0a0a;
          --white: #ffffff;
        }

        * { box-sizing: border-box; }

        .ct-page {
          font-family: 'Poppins', sans-serif;
          background: #f7fbfb;
          color: var(--black);
          margin: 0;
          padding: 0;
        }

        /* Banner */
        .ct-banner {
          position: relative;
          width: 100%;
          min-height: 500px;
          background: url('/assets/images/contact.png') center 42%/cover no-repeat, #075b68;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ct-banner::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(4,45,52,.82) 0%, rgba(6,91,101,.65) 48%, rgba(8,163,163,.28) 100%);
        }

        .ct-banner-content {
          position: relative;
          width: min(1180px, calc(100% - 48px));
          text-align: left;
          color: var(--white);
          padding: 0 20px;
        }

        .ct-eyebrow {
          display: inline-flex;
          align-items: center;
          padding: 8px 14px;
          border: 1px solid rgba(255,255,255,.32);
          border-radius: 999px;
          background: rgba(255,255,255,.1);
          backdrop-filter: blur(8px);
          letter-spacing: 3px;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--teal-tint);
          margin-bottom: 12px;
        }

        .ct-banner-content h1 {
          max-width: 650px;
          font-size: clamp(42px, 6vw, 72px);
          color: #ffffff;
          font-weight: 700;
          line-height: 1.05;
          margin: 0;
        }

        .ct-banner-content p {
          max-width: 590px;
          margin-top: 18px;
          font-weight: 400;
          font-size: clamp(15px, 1.6vw, 18px);
          line-height: 1.7;
          color: rgba(255,255,255,.9);
        }

        /* Layout */
        .ct-section {
          max-width: 1180px;
          margin: 0 auto;
          padding: 84px 24px 96px;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: clamp(36px, 6vw, 72px);
          align-items: start;
        }

        @media (max-width: 860px) {
          .ct-section {
            grid-template-columns: 1fr;
            padding-top: 60px;
          }
        }

        /* Info column */
        .ct-info h2 {
          font-size: clamp(28px, 3vw, 38px);
          font-weight: 700;
          margin: 0 0 18px;
        }

        .ct-info > p {
          font-weight: 400;
          color: #444;
          line-height: 1.7;
          margin-bottom: 34px;
        }

        .ct-info-item {
          display: flex;
          gap: 16px;
          margin-bottom: 26px;
          align-items: flex-start;
          padding: 15px;
          border: 1px solid #e0efee;
          border-radius: 14px;
          background: rgba(255,255,255,.72);
          transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease;
        }

        .ct-info-item:hover { transform: translateX(4px); border-color: #a7d9d6; box-shadow: 0 10px 24px rgba(7,91,104,.08); }

        .ct-icon {
          flex-shrink: 0;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--teal-tint);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ct-icon svg {
          width: 20px;
          height: 20px;
          stroke: var(--teal-dark);
        }

        .ct-info-item h4 {
          margin: 0 0 4px;
          font-size: 15px;
          font-weight: 600;
        }

        .ct-info-item p, .ct-info-item a {
          margin: 0;
          font-size: 14px;
          font-weight: 400;
          color: #444;
          text-decoration: none;
          line-height: 1.6;
        }

        .ct-info-item a:hover {
          color: var(--teal);
        }

        .ct-socials {
          display: flex;
          gap: 14px;
          margin-top: 30px;
        }

        .ct-social-link {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #075b68;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .ct-social-link:hover {
          background: var(--teal);
          transform: translateY(-3px);
        }

        .ct-social-link svg {
          width: 20px;
          height: 20px;
          stroke: var(--white);
          fill: none;
        }

        /* Full-width Map */
        .ct-map-section {
          width: min(1180px, calc(100% - 48px));
          height: 420px;
          margin: 0 auto 90px;
          overflow: hidden;
          border: 8px solid #ffffff;
          border-radius: 22px;
          box-shadow: 0 20px 55px rgba(7,91,104,.14);
        }

        .ct-map-section iframe {
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
        }

        @media (max-width: 640px) {
          .ct-banner {
            min-height: 390px;
            background-position: 58% center;
          }
          .ct-banner-content { width: calc(100% - 32px); padding: 0; }
          .ct-banner-content h1 { font-size: clamp(38px, 13vw, 54px); }
          .ct-section { padding: 52px 18px 64px; }
          .ct-info-item { padding: 14px 12px; }
          .ct-info-item > div { min-width: 0; }
          .ct-info-item p, .ct-info-item a { overflow-wrap: anywhere; }
          .ct-form-wrap { padding: 26px 20px; border-radius: 18px; }
          .ct-map-section { width: calc(100% - 28px); margin-bottom: 64px; border-width: 5px; border-radius: 17px; }
          .ct-map-section {
            height: 300px;
          }
        }

        /* Form */
        .ct-form-wrap {
          background: var(--white);
          border: 1px solid #e5e5e5;
          border-radius: 22px;
          padding: clamp(28px, 4vw, 44px);
          box-shadow: 0 24px 60px rgba(7,91,104,.12);
        }

        .ct-form-wrap h3 {
          font-size: clamp(24px, 3vw, 32px);
          font-weight: 700;
          margin: 0 0 6px;
        }

        .ct-form-wrap > p {
          font-size: 14px;
          font-weight: 400;
          color: #666;
          margin: 0 0 26px;
        }

        .ct-field {
          margin-bottom: 20px;
        }

        .ct-field label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--black);
        }

        .ct-field input,
        .ct-field textarea {
          width: 100%;
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          font-weight: 400;
          min-height: 50px;
          padding: 13px 15px;
          border: 1px solid #d9d9d9;
          border-radius: 10px;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          color: var(--black);
          background: #f9fcfc;
        }

        .ct-field input:focus,
        .ct-field textarea:focus {
          border-color: var(--teal);
          box-shadow: 0 0 0 3px rgba(8, 163, 163, 0.15);
        }

        .ct-field textarea {
          resize: vertical;
          min-height: 120px;
        }

        .ct-submit {
          width: 100%;
          background: var(--teal);
          color: var(--white);
          border: none;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 15px;
          min-height: 52px;
          padding: 14px 20px;
          border-radius: 12px;
          cursor: pointer;
          box-shadow: 0 12px 24px rgba(8,163,163,.22);
          transition: background 0.2s ease, transform .2s ease, box-shadow .2s ease;
        }

        .ct-submit:hover {
          background: var(--teal-dark);
          transform: translateY(-2px);
          box-shadow: 0 16px 30px rgba(8,163,163,.3);
        }

        .ct-success {
          margin-top: 16px;
          background: var(--teal-tint);
          color: var(--teal-dark);
          font-size: 13px;
          font-weight: 500;
          padding: 12px 16px;
          border-radius: 10px;
          text-align: center;
        }
      `}</style>

      {/* Banner */}
      <div className="ct-banner">
        <div className="ct-banner-content">
          <div className="ct-eyebrow">Get In Touch</div>
          <h1>Contact Us</h1>
          <p>We're here to answer your questions and help you start your recovery journey.</p>
        </div>
      </div>

      {/* Info + Form */}
      <div className="ct-section">
        {/* Left: Info */}
        <div className="ct-info">
          <h2>Visit or Reach Us</h2>
          <p>
            Have a question about treatment, appointments, or facilities? Reach out to
            Dr. Jadhavar Physiotherapy &amp; Rehabilitation Center through any of the
            channels below — our team responds promptly.
          </p>

          <div className="ct-info-item">
            <span className="ct-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <div>
              <h4>Address</h4>
              <p>
                Indraprastha, Jai Ganesh Primary School Road, F-15b-374,
                <br />
                Lane Number 3, Dhide Baug, Wadgaon Budruk,
                <br />
                Narhe, Pune, Maharashtra 411041
              </p>
            </div>
          </div>

          <div className="ct-info-item">
            <span className="ct-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <div>
              <h4>Phone</h4>
              <a href="tel:7700995363">+91 77009 95363</a>
              <br />
              <a href="tel:8928009640">+91 89280 09640</a>
            </div>
          </div>

          <div className="ct-info-item">
            <span className="ct-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16v16H4z" style={{ display: "none" }} />
                <path d="M22 6c0 1-9 7-10 7S2 7 2 6" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
            </span>
            <div>
              <h4>Email</h4>
              <a href="mailto:drpratibhajadhavar@gmail.com">drpratibhajadhavar@gmail.com</a>
            </div>
          </div>

          <div className="ct-info-item">
            <span className="ct-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </span>
            <div>
              <h4>Working Hours</h4>
              <p>Mon – Sat: 9:00 AM – 8:00 PM</p>
            </div>
          </div>

          {/* Socials */}
          <div className="ct-socials">
            <a
              className="ct-social-link"
              href="https://www.instagram.com/drjadhavarphysio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              className="ct-social-link"
              href="https://www.facebook.com/profile.php?id=61591214087018"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>

        </div>

        {/* Right: Form */}
        <div className="ct-form-wrap">
          <h3>Send Us a Message</h3>
          <p>Fill in your details and we'll get back to you within 24 hours.</p>

          <form onSubmit={handleSubmit}>
            <div className="ct-field">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="ct-field">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="ct-field">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="ct-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your concern or query"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="ct-submit">
              Send Message
            </button>

            {submitted && (
              <div className="ct-success">
                Thank you! Your message has been sent — we'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Full-width Map */}
      <div className="ct-map-section">
        <iframe
          title="Clinic Location - Dr. Jadhavar Physiotherapy & Rehabilitation Center"
          src="https://www.google.com/maps?q=Indraprastha,+Jai+Ganesh+Primary+School+Road,+F-15b-374,+Lane+Number+3,+Dhide+Baug,+Wadgaon+Budruk,+Narhe,+Pune,+Maharashtra+411041&output=embed"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
