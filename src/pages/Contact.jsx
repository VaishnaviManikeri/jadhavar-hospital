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
          background: var(--white);
          color: var(--black);
          margin: 0;
          padding: 0;
        }

        /* Banner */
        .ct-banner {
          position: relative;
          width: 100%;
          height: 480px;
          background: url('/assets/images/contact.png') center/cover no-repeat, var(--black);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ct-banner::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(8,163,163,0.55) 100%);
        }

        .ct-banner-content {
          position: relative;
          text-align: center;
          color: var(--white);
          padding: 0 20px;
        }

        .ct-eyebrow {
          letter-spacing: 3px;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--teal-tint);
          margin-bottom: 12px;
          font-color: #ffffff;
        }

        .ct-banner-content h1 {
          font-size: clamp(28px, 5vw, 44px);
          font-color: #ffffff;
          font-weight: 800;
          margin: 0;
        }

        .ct-banner-content p {
          margin-top: 10px;
          font-weight: 400;
          font-size: 15px;
          color: #ffffff;
        }

        /* Layout */
        .ct-section {
          max-width: 1180px;
          margin: 0 auto;
          padding: 70px 24px 90px;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 50px;
        }

        @media (max-width: 860px) {
          .ct-section {
            grid-template-columns: 1fr;
          }
        }

        /* Info column */
        .ct-info h2 {
          font-size: 26px;
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
        }

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
          background: var(--black);
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
          width: 100%;
          height: 420px;
          border-top: 1px solid #e5e5e5;
        }

        .ct-map-section iframe {
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
        }

        @media (max-width: 640px) {
          .ct-banner {
            height: 320px;
          }
          .ct-map-section {
            height: 300px;
          }
        }

        /* Form */
        .ct-form-wrap {
          background: var(--white);
          border: 1px solid #e5e5e5;
          border-radius: 16px;
          padding: 38px 34px;
          box-shadow: 0 20px 40px rgba(8, 163, 163, 0.08);
        }

        .ct-form-wrap h3 {
          font-size: 20px;
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
          padding: 12px 14px;
          border: 1px solid #d9d9d9;
          border-radius: 10px;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          color: var(--black);
          background: var(--white);
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
          padding: 14px 20px;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .ct-submit:hover {
          background: var(--teal-dark);
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
              <a href="mailto:info@drjadhavarphysio.com">info@drjadhavarphysio.com</a>
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
              href="https://www.facebook.com/drjadhavarphysio"
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
