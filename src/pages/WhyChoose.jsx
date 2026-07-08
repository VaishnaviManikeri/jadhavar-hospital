import React from "react";
import {
  FaMicroscope,
  FaUserMd,
  FaHandHoldingHeart,
  FaMoneyBillWave,
  FaBrain,
  FaClock,
  FaSmile,
} from "react-icons/fa";
import DrImage from "/assets/images/doc2.png"; // Adjust the import path as needed

const WhyChoose = () => {
  const features = [
    {
      icon: <FaMicroscope />,
      title: "Advanced Equipment",
      desc: "State-of-the-art technology for precise diagnosis and effective treatment.",
    },
    {
      icon: <FaUserMd />,
      title: "Personalized Treatment",
      desc: "Customized care plans tailored to your unique needs and goals.",
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "Experienced Physiotherapist",
      desc: "Highly skilled professionals with years of hands-on experience.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Affordable Treatment",
      desc: "Quality care at competitive prices, because your health matters.",
    },
    {
      icon: <FaBrain />,
      title: "Modern Rehabilitation Techniques",
      desc: "Evidence-based methods for faster recovery and better outcomes.",
    },
    {
      icon: <FaClock />,
      title: "Flexible Appointment Timing",
      desc: "Schedule visits that fit your busy lifestyle with ease.",
    },
    {
      icon: <FaSmile />,
      title: "Friendly Staff",
      desc: "Warm, supportive team dedicated to making you feel at home.",
    },
  ];

  return (
    <section className="why-choose-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            We combine expertise, technology, and compassion to deliver the best
            physiotherapy experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((item, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{item.icon}</div>
              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-desc">{item.desc}</p>
            </div>
          ))}
        </div>

       
      </div>

      <style jsx>{`
        /* ── Global Reset & Base ── */
        .why-choose-section {
          font-family: "Poppins", sans-serif;
          background-color: #ffffff;
          color: #1a1a1a;
          padding: 4rem 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* ── Header ── */
        .section-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .section-title {
          font-size: 2.8rem;
          font-weight: 700;
          color: #000000;
          letter-spacing: -0.5px;
          margin-bottom: 0.5rem;
          position: relative;
          display: inline-block;
        }

        .section-title::after {
          content: "";
          display: block;
          width: 70px;
          height: 4px;
          background: #08a3a3;
          margin: 0.5rem auto 0;
          border-radius: 4px;
        }

        .section-subtitle {
          font-size: 1.15rem;
          color: #444444;
          max-width: 700px;
          margin: 0.75rem auto 0;
          font-weight: 400;
        }

        /* ── Features Grid ── */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .feature-card {
          background: #fafafa;
          padding: 2rem 1.5rem;
          border-radius: 20px;
          text-align: center;
          transition: all 0.25s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
          border: 1px solid #f0f0f0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .feature-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 30px rgba(8, 163, 163, 0.12);
          border-color: #08a3a3;
          background: #ffffff;
        }

        .feature-icon {
          font-size: 2.6rem;
          color: #08a3a3;
          margin-bottom: 1rem;
          background: #e6f7f7;
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: 0.2s;
        }

        .feature-card:hover .feature-icon {
          background: #08a3a3;
          color: #ffffff;
        }

        .feature-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #000000;
          margin-bottom: 0.5rem;
        }

        .feature-desc {
          font-size: 0.95rem;
          color: #444444;
          line-height: 1.5;
          font-weight: 400;
        }

        /* ── Footer Image - Full Width, No Radius ── */
        .footer-image-container {
          width: 100%;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 2px solid #f0f0f0;
          overflow: hidden;
        }

        .footer-dr-image {
          width: 100%;
          height: auto;
          display: block;
          box-shadow: 0 10px 30px rgba(8, 163, 163, 0.15);
          transition: 0.3s;
          border: none;
          border-radius: 0;
        }

        .footer-dr-image:hover {
          transform: scale(1.02);
          box-shadow: 0 16px 40px rgba(8, 163, 163, 0.25);
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .section-title {
            font-size: 2.2rem;
          }

          .features-grid {
            gap: 1.25rem;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.9rem;
          }
          .feature-icon {
            width: 60px;
            height: 60px;
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChoose;