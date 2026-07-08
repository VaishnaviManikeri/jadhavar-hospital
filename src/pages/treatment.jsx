import React, { useState } from 'react';
import { 
  FaSun, 
  FaBolt, 
  FaWaveSquare, 
  FaSoundcloud, 
  FaThermometerHalf,
  FaHands,
  FaDumbbell,
  FaSyringe,
  FaTape,
  FaChevronRight,
  FaCheckCircle
} from 'react-icons/fa';
import { GiSpineArrow } from 'react-icons/gi';
import './Treatment.css';

const Treatments = () => {
  const [activeTreatment, setActiveTreatment] = useState(null);

  const treatments = [
    {
      id: 1,
      icon: <FaSun />,
      title: "Class IV Laser Therapy",
      description: "High-power laser therapy that penetrates deep into tissues to reduce inflammation, accelerate healing, and provide rapid pain relief for acute and chronic conditions.",
      benefits: [
        "Non-invasive pain relief",
        "Accelerates tissue repair",
        "Reduces inflammation",
        "Improves blood circulation",
        "No side effects"
      ],
      duration: "10-15 minutes",
      color: "#08A3A3"
    },
    {
      id: 2,
      icon: <FaBolt />,
      title: "IFT Therapy",
      description: "Interferential Therapy uses medium-frequency electrical currents to stimulate deep tissues, providing effective pain relief and promoting muscle recovery.",
      benefits: [
        "Deep tissue stimulation",
        "Effective pain management",
        "Muscle relaxation",
        "Improved blood flow",
        "Reduces muscle spasms"
      ],
      duration: "15-20 minutes",
      color: "#0B8A8A"
    },
    {
      id: 3,
      icon: <FaWaveSquare />,
      title: "TENS Therapy",
      description: "Transcutaneous Electrical Nerve Stimulation uses low-voltage electrical currents to block pain signals and stimulate endorphin production for natural pain relief.",
      benefits: [
        "Drug-free pain relief",
        "Endorphin stimulation",
        "Muscle relaxation",
        "Reduced muscle tension",
        "Portable treatment"
      ],
      duration: "20-30 minutes",
      color: "#067a7a"
    },
    {
      id: 4,
      icon: <FaSoundcloud />,
      title: "Ultrasound Therapy",
      description: "Therapeutic ultrasound uses high-frequency sound waves to penetrate deep tissues, promoting healing and reducing inflammation in muscles, tendons, and ligaments.",
      benefits: [
        "Deep tissue heating",
        "Reduces inflammation",
        "Breaks down scar tissue",
        "Accelerates healing",
        "Improves flexibility"
      ],
      duration: "5-10 minutes",
      color: "#08A3A3"
    },
    {
      id: 5,
      icon: <FaThermometerHalf />,
      title: "Long Wave Diathermy",
      description: "Deep heating therapy using electromagnetic waves to increase blood flow, reduce pain, and promote healing in deep tissues and joints.",
      benefits: [
        "Deep tissue heating",
        "Increased blood flow",
        "Relieves muscle spasms",
        "Reduces joint stiffness",
        "Promotes healing"
      ],
      duration: "15-25 minutes",
      color: "#0B8A8A"
    },
    {
      id: 6,
      icon: <GiSpineArrow />,
      title: "Cervical Traction",
      description: "A therapeutic technique that gently stretches the cervical spine to relieve pressure on spinal discs, reduce nerve compression, and alleviate neck pain.",
      benefits: [
        "Relieves neck pain",
        "Reduces nerve compression",
        "Improves spinal alignment",
        "Alleviates headaches",
        "Restores mobility"
      ],
      duration: "10-20 minutes",
      color: "#067a7a"
    },
    {
      id: 7,
      icon: <GiSpineArrow />,
      title: "Lumbar Traction",
      description: "A specialized treatment that decompresses the lumbar spine, reducing pressure on spinal discs and nerves to provide relief from lower back pain.",
      benefits: [
        "Reduces lower back pain",
        "Decompresses spine",
        "Relieves nerve pressure",
        "Improves disc health",
        "Restores function"
      ],
      duration: "10-20 minutes",
      color: "#08A3A3"
    },
    {
      id: 8,
      icon: <FaHands />,
      title: "Manual Therapy",
      description: "Hands-on therapeutic techniques including joint mobilization, soft tissue manipulation, and massage to improve function, reduce pain, and restore mobility.",
      benefits: [
        "Improves joint mobility",
        "Reduces muscle tension",
        "Alleviates pain",
        "Restores function",
        "Promotes relaxation"
      ],
      duration: "20-30 minutes",
      color: "#0B8A8A"
    },
    {
      id: 9,
      icon: <FaDumbbell />,
      title: "Exercise Therapy",
      description: "Customized exercise programs designed to strengthen muscles, improve flexibility, and restore function specific to each patient's condition and goals.",
      benefits: [
        "Builds strength",
        "Improves flexibility",
        "Enhances stability",
        "Prevents injuries",
        "Personalized programs"
      ],
      duration: "30-45 minutes",
      color: "#067a7a"
    },
    {
      id: 10,
      icon: <FaSyringe />,
      title: "Dry Needling",
      description: "A modern technique using thin filiform needles to release myofascial trigger points, reduce muscle tension, and promote natural healing mechanisms.",
      benefits: [
        "Releases trigger points",
        "Reduces muscle pain",
        "Improves range of motion",
        "Promotes healing",
        "Drug-free treatment"
      ],
      duration: "15-20 minutes",
      color: "#08A3A3"
    },
    {
      id: 11,
      icon: <FaTape />,
      title: "Kinesiology Taping",
      description: "A therapeutic taping technique that provides support and stability to muscles and joints without restricting movement, promoting natural healing.",
      benefits: [
        "Joint support",
        "Muscle stabilization",
        "Pain reduction",
        "Improves circulation",
        "Allows full mobility"
      ],
      duration: "5-10 minutes",
      color: "#0B8A8A"
    }
  ];

  return (
    <div className="treatments-container">
      {/* Hero Section with Full Background Image */}
      <div className="treatments-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="treatments-title">Our Advanced Treatments</h1>
            <p className="treatments-subtitle">
              Comprehensive Physiotherapy Solutions for Your Recovery Journey
            </p>
            <p className="treatments-hero-copy">
              Evidence-based physiotherapy treatments designed to reduce pain,
              restore movement, and support confident long-term recovery.
            </p>
            <div className="hero-buttons">
              {/* <button className="hero-primary-btn">Explore Treatments</button>
              <button className="hero-secondary-btn">Book Appointment</button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="stats-banner">
        <div className="stat-item">
          <h3>11+</h3>
          <p>Specialized Treatments</p>
        </div>
        <div className="stat-item">
          <h3>99%</h3>
          <p>Patient Satisfaction</p>
        </div>
        <div className="stat-item">
          <h3>5000+</h3>
          <p>Successful Treatments</p>
        </div>
        <div className="stat-item">
          <h3>15+</h3>
          <p>Years of Experience</p>
        </div>
      </div>

      {/* Treatments Grid */}
      <div className="treatments-grid-container">
        <h2 className="section-heading">Our Treatment Modalities</h2>
        <p className="section-description">
          Each treatment is evidence-based and personalized to meet your specific needs
        </p>
        
        <div className="treatments-grid">
          {treatments.map((treatment) => (
            <div 
              key={treatment.id}
              className="treatment-card"
              onMouseEnter={() => setActiveTreatment(treatment.id)}
              onMouseLeave={() => setActiveTreatment(null)}
              style={{ 
                borderBottom: `4px solid ${treatment.color}`,
                transform: activeTreatment === treatment.id ? 'translateY(-10px)' : 'translateY(0)'
              }}
            >
              <div className="treatment-icon" style={{ color: treatment.color }}>
                {treatment.icon}
              </div>
              <h3 className="treatment-title">{treatment.title}</h3>
              <p className="treatment-description">{treatment.description}</p>
              
              <div className={`treatment-details ${activeTreatment === treatment.id ? 'active' : ''}`}>
                <div className="benefits-list">
                  <h4>Key Benefits:</h4>
                  <ul>
                    {treatment.benefits.map((benefit, index) => (
                      <li key={index}>
                        <FaCheckCircle style={{ color: treatment.color }} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="treatment-meta">
                  <span className="duration">
                    ⏱️ Duration: {treatment.duration}
                  </span>
                </div>
              </div>
              
              <button className="learn-more-btn" style={{ background: treatment.color }}>
                Learn More <FaChevronRight />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="treatments-cta">
        <div className="cta-content">
          <h2>Ready to Start Your Recovery?</h2>
          <p>Book your consultation today and experience the difference of personalized, evidence-based physiotherapy.</p>
          <div className="cta-buttons">
            <button className="primary-btn">Book Appointment</button>
            <button className="secondary-btn">Call Now: 7700995363</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatments;
