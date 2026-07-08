import React, { useEffect, useState, useMemo } from 'react';
import { FaArrowLeft, FaArrowRight, FaCheck, FaChevronDown, FaPlay, FaPlus } from 'react-icons/fa6';
import {
  FaUserInjured,
  FaBone,
  FaPersonWalking,
  FaHandHoldingMedical,
  FaPersonRunning,
  FaSnowflake,
  FaHandFist,
  FaBolt,
  FaBrain,
  FaWheelchair,
  FaBriefcaseMedical,
  FaXRay,
  FaGripLines,
  FaDumbbell,
  FaChild,
} from 'react-icons/fa6';
import './Home.css';
import PhysioChatbot from '../components/PhysioChatbot';

const services = [
  {
    image: '/assets/images/k.png',
    title: 'Advanced Physiotherapy',
    text: 'Personalized treatment plans using modern, evidence-based techniques.',
  },
  {
    image: '/assets/images/n.png',
    title: 'Sports Injury Care',
    text: 'Focused rehabilitation that helps you return to the activities you love.',
  },
  {
    image: '/assets/images/s.png',
    title: 'Pain Relief & Recovery',
    text: 'Targeted care for lasting relief, better mobility, and everyday confidence.',
  },
];

const treatments = [
  { image: '/assets/images/class-iv-laser-therapy.jpg', title: 'Class IV Laser Therapy', text: 'Advanced light therapy for pain relief and faster tissue healing.' },
  { image: '/assets/images/ift-therapy.jpg', title: 'IFT Therapy', text: 'Gentle electrical stimulation that reduces pain and muscle tension.' },
  { image: '/assets/images/tens-therapy.jpg', title: 'TENS Therapy', text: 'Targeted nerve stimulation for safe, drug-free pain management.' },
  { image: '/assets/images/ultrasound-therapy.jpg', title: 'Ultrasound Therapy', text: 'Therapeutic sound waves that support deep tissue recovery.' },
  { image: '/assets/images/long-wave-diathermy.webp', title: 'Long Wave Diathermy', text: 'Deep heat therapy to ease stiffness and improve circulation.' },
  { image: '/assets/images/cervical-traction.jpg', title: 'Cervical Traction', text: 'Controlled neck stretching to relieve pressure and discomfort.' },
  { image: '/assets/images/lumbar-traction.jpg', title: 'Lumbar Traction', text: 'Gentle spinal decompression for lower-back pain and stiffness.' },
  { image: '/assets/images/manual-therapy.jpg', title: 'Manual Therapy', text: 'Hands-on techniques that restore movement and reduce pain.' },
  { image: '/assets/images/exercise-therapy.jpg', title: 'Exercise Therapy', text: 'Guided exercises to rebuild strength, balance, and mobility.' },
  { image: '/assets/images/dry-needling.jpg', title: 'Dry Needling', text: 'Precise treatment for tight muscles and painful trigger points.' },
  { image: '/assets/images/kinesiology-taping.jpg', title: 'Kinesiology Taping', text: 'Supportive taping that improves movement and reduces strain.' },
];

const conditions = [
  { icon: <FaUserInjured />, title: 'Neck Pain' },
  { icon: <FaBone />, title: 'Back Pain' },
  { icon: <FaPersonWalking />, title: 'Knee Pain' },
  { icon: <FaHandHoldingMedical />, title: 'Shoulder Pain' },
  { icon: <FaPersonRunning />, title: 'Sports Injuries' },
  { icon: <FaSnowflake />, title: 'Frozen Shoulder' },
  { icon: <FaHandFist />, title: 'Arthritis' },
  { icon: <FaBolt />, title: 'Sciatica' },
  { icon: <FaBrain />, title: 'Stroke Rehabilitation' },
  { icon: <FaXRay />, title: 'Spondylosis' },
];

const overviewLeft = [
  { icon: <FaUserInjured />, title: 'Neck Pain', text: 'Relief from neck stiffness and pain' },
  { icon: <FaBone />, title: 'Back Pain', text: 'Treatment for upper and lower back pain' },
  { icon: <FaPersonWalking />, title: 'Knee Pain', text: 'Relief from knee pain and swelling' },
  { icon: <FaHandHoldingMedical />, title: 'Shoulder Pain', text: 'Treatment for shoulder pain and stiffness' },
  { icon: <FaPersonRunning />, title: 'Sports Injuries', text: 'Rehabilitation for sports-related injuries' },
  { icon: <FaSnowflake />, title: 'Frozen Shoulder', text: 'Improve movement and reduce stiffness' },
  { icon: <FaHandFist />, title: 'Arthritis', text: 'Manage pain and improve joint mobility' },
];

const overviewRight = [
  { icon: <FaBolt />, title: 'Sciatica', text: 'Relief from sciatic pain and discomfort' },
  { icon: <FaBrain />, title: 'Stroke Rehabilitation', text: 'Regain strength, balance and independence' },
  { icon: <FaWheelchair />, title: 'Paralysis Rehabilitation', text: 'Support for movement and daily activities' },
  { icon: <FaBriefcaseMedical />, title: 'Post-Surgery Rehabilitation', text: 'Faster recovery and safe return to activities' },
  { icon: <FaXRay />, title: 'Cervical & Lumbar Spondylosis', text: 'Relief from spinal pain and nerve compression' },
  { icon: <FaGripLines />, title: 'Slip Disc', text: 'Non-surgical treatment for slipped disc' },
  { icon: <FaDumbbell />, title: 'Muscle & Ligament Injuries', text: 'Healing sprains, strains and soft-tissue injuries' },
  { icon: <FaChild />, title: 'Posture Correction', text: 'Improve posture and prevent long-term problems' },
];

const carePrograms = [
  {
    image: '/assets/images/k.png',
    label: 'Pain Relief',
    title: 'Everyday Pain Care',
    points: ['Neck, back and joint pain', 'Personalized assessment', 'Mobility-focused recovery'],
  },
  {
    image: '/assets/images/s.png',
    label: 'Sports Rehab',
    title: 'Active Recovery Program',
    points: ['Sports and overuse injuries', 'Strength and movement training', 'Safe return to activity'],
  },
  {
    image: '/assets/images/n.png',
    label: 'Rehabilitation',
    title: 'Guided Recovery Care',
    points: ['Post-surgical rehabilitation', 'One-to-one clinical support', 'Confidence for daily movement'],
  },
];

const healthcareServices = [
  {
    icon: <FaHandHoldingMedical />,
    title: 'Pain Relief Therapy',
    text: 'Targeted physiotherapy care for neck, back, shoulder, knee, and joint pain.',
  },
  {
    icon: <FaPersonRunning />,
    title: 'Sports Injury Rehab',
    text: 'Structured recovery plans for sprains, strains, overuse injuries, and safe return to play.',
  },
  {
    icon: <FaBriefcaseMedical />,
    title: 'Post-Surgery Recovery',
    text: 'Guided rehabilitation after orthopedic and neurological procedures to restore function.',
  },
  {
    icon: <FaBrain />,
    title: 'Neuro Rehabilitation',
    text: 'Supportive therapy for stroke, paralysis, balance issues, and daily movement confidence.',
  },
];

const clinicHighlights = [
  {
    image: '/assets/images/11.jpg',
    title: 'Pain Relief Physiotherapy',
    text: 'Targeted care for neck, back, shoulder, knee, and joint pain using movement-based treatment and modern pain-relief techniques.',
  },
  {
    image: '/assets/images/22.jpg',
    title: 'Sports Injury Rehabilitation',
    text: 'Structured rehabilitation for sprains, strains, overuse injuries, and a safe, confident return to sport and activity.',
  },
  {
    image: '/assets/images/33.jpg',
    title: 'Strength & Mobility Programs',
    text: 'Guided exercise programs designed to improve strength, flexibility, balance, posture, and everyday movement quality.',
  },
  {
    image: '/assets/images/44.jpg',
    title: 'Post-Surgery Recovery',
    text: 'Progressive rehabilitation after orthopedic procedures to restore movement, rebuild strength, and support a steady recovery.',
  },
  {
    image: '/assets/images/55.jpg',
    title: 'Personalized Physiotherapy Care',
    text: 'Dr. Jadhavar Physiotherapy & Rehabilitation Center provides focused assessment, modern treatment, and guided recovery plans for every stage of healing.',
  },
  {
    image: '/assets/images/66.jpg',
    title: 'Neuro Rehabilitation',
    text: 'Supportive therapy for stroke, paralysis, balance difficulties, and neurological conditions with a focus on independence.',
  },
];

const faqs = [
  { question: 'How many physiotherapy sessions will I need?', answer: 'The number of sessions depends on your condition, its severity, and your recovery goals. After the initial assessment, your physiotherapist will recommend a personalized treatment plan and review your progress regularly.' },
  { question: "Do I need a doctor's referral?", answer: 'A referral is usually not required to book a physiotherapy consultation. If your condition needs medical investigation or specialist input, we will guide you to the appropriate healthcare professional.' },
  { question: 'Is physiotherapy painful?', answer: 'Physiotherapy should remain within a safe and manageable level of discomfort. Some techniques may feel mildly challenging, but your therapist will adjust every treatment according to your comfort and response.' },
  { question: 'Do you treat sports injuries?', answer: 'Yes. We assess and rehabilitate sprains, strains, joint injuries, overuse conditions, and post-surgical sports injuries, with a focus on safely returning you to activity.' },
  { question: 'Do you provide home visits?', answer: 'Home-visit availability can vary by location and schedule. Please contact the clinic to confirm whether a home physiotherapy appointment is available in your area.' },
  { question: 'What should I bring to my first appointment?', answer: 'Bring any relevant medical reports, scans, prescriptions, and a list of current medicines. Wear comfortable clothing that allows the affected area to be assessed and moved easily.' },
  { question: 'How long does each session take?', answer: 'Most sessions take approximately 30 to 60 minutes, depending on the assessment, treatment techniques, and exercise program required.' },
  { question: 'What happens during the first consultation?', answer: 'Your physiotherapist will discuss your symptoms and medical history, assess movement and strength, explain the findings, and create a treatment plan tailored to your needs.' },
  { question: 'Can physiotherapy help with long-term pain?', answer: 'Yes. Physiotherapy can help manage persistent pain through education, graded exercise, movement correction, hands-on care, and practical strategies for daily activities.' },
  { question: 'What should I wear for physiotherapy?', answer: 'Choose loose, comfortable clothing and supportive footwear. Clothing should allow your therapist to examine and treat the affected joint or muscle appropriately.' },
];

const Home = () => {
  const [treatmentStart, setTreatmentStart] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [activeCare, setActiveCare] = useState(4);
  const [isVisible, setIsVisible] = useState(false);

  const visibleConditions = conditions.slice(0, 5);

  const visibleTreatments = useMemo(() => {
    return Array.from(
      { length: 4 },
      (_, offset) => treatments[(treatmentStart + offset) % treatments.length]
    );
  }, [treatmentStart]);

  // Use Intersection Observer for lazy loading animations
  useEffect(() => {
    setIsVisible(true);
    
    // Set up intersection observer for lazy loading images
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            imageObserver.unobserve(img);
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });

      return () => imageObserver.disconnect();
    }
  }, []);

  useEffect(() => {
    let animationFrameId;
    let startTime = Date.now();

    const animateTreatments = () => {
      const elapsed = Date.now() - startTime;
      if (elapsed >= 4000) {
        setTreatmentStart((current) => (current + 1) % treatments.length);
        startTime = Date.now();
      }
      animationFrameId = requestAnimationFrame(animateTreatments);
    };

    animationFrameId = requestAnimationFrame(animateTreatments);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const moveTreatments = (direction) => {
    setTreatmentStart((current) => (current + direction + treatments.length) % treatments.length);
  };

  return (
    <main className="home">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="hero-layout">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Trusted Physiotherapy Care</div>
            <h1 id="home-title">
              Dr. Jadhavar <span>Physiotherapy</span> &amp; Rehabilitation Center
            </h1>
            <p className="hero-specialities">
              Advanced Physiotherapy <i /> Sports Injury <i /> Pain Relief <i /> Rehabilitation
            </p>
            <p className="hero-lead">Recover Faster. Move Better. <strong>Live Pain-Free.</strong></p>
            <p className="hero-description">
              Compassionate, one-to-one care designed to restore movement, reduce pain,
              and help you return to a stronger, more active life.
            </p>

            <div className="hero-actions">
              <a href="/appointment" className="primary-action">
                Book an Appointment <FaArrowRight />
              </a>
              <a href="#services" className="secondary-action">
                <span><FaPlay /></span> Explore Our Care
              </a>
            </div>

            <div className="hero-trust">
              <span><FaCheck /> Personalized treatment</span>
              <span><FaCheck /> Modern techniques</span>
            </div>
          </div>
        </div>
      </section>

      <section className="service-strip" id="services" aria-label="Our physiotherapy services">
        <div className="service-cards">
          {services.map((service, index) => (
            <article className="service-card" key={service.title} style={{ '--delay': `${index * 0.15}s` }}>
              <div className="service-image-wrap">
                <img src={service.image} alt="" className="service-image" loading="lazy" />
              </div>
              <div className="service-content">
                <span className="service-number">0{index + 1}</span>
                <h2>{service.title}</h2>
                <p>{service.text}</p>
              </div>
              <span className="card-arrow" aria-hidden="true"><FaArrowRight /></span>
            </article>
          ))}
        </div>
      </section>

      <section className="center-intro" aria-labelledby="center-intro-title">
        <div className="center-intro-layout">
          <div className="center-collage" aria-label="Physiotherapy care at Dr. Jadhavar Center">
            <div className="collage-main">
              <img src="/assets/images/h22.jpg" alt="Physiotherapy specialist providing expert care" loading="lazy" />
            </div>
            <div className="collage-secondary">
              <img src="/assets/images/h222.jpg" alt="Patient receiving physiotherapy rehabilitation" loading="lazy" />
            </div>
          
          </div>

          <div className="center-intro-copy">
            <div className="center-kicker"><span /> About Our Center</div>
            <h2 id="center-intro-title">
              Dr. Jadhavar <span>Physiotherapy</span> &amp; Rehabilitation Center
            </h2>
            <p className="center-specialities">
              Advanced Physiotherapy <i /> Sports Injury <i /> Pain Relief <i /> Rehabilitation
            </p>
            <p className="center-summary">
              Dedicated care, modern rehabilitation techniques, and personalized treatment
              plans that help you restore movement, reduce pain, and return to everyday life
              with confidence.
            </p>

            <div className="center-benefits">
              <span><FaCheck /> Evidence-based physiotherapy care</span>
              <span><FaCheck /> Personalized recovery programs</span>
              <span><FaCheck /> Support through every stage of rehabilitation</span>
            </div>

            <div className="center-actions">
              <a href="#services" className="center-about-btn">Explore Services <FaArrowRight /></a>
              <a href="/appointment" className="center-play-btn"><i><FaPlay /></i> Book Appointment</a>
              <div className="center-stat">
                <FaPlus />
                <strong>4</strong>
                <span>Core Care Areas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rehab-overview" aria-labelledby="rehab-overview-title">
        <div className="rehab-overview-layout">
          <div className="rehab-list rehab-list-left">
            {overviewLeft.map((item, index) => (
              <article
                className="rehab-item"
                key={item.title}
                style={{ '--item-position': `${(index / (overviewLeft.length - 1)) * 100}%` }}
              >
                <div className="rehab-item-copy">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <span className="rehab-icon">{item.icon}</span>
              </article>
            ))}
          </div>

          <div className="rehab-center">
            <div className="rehab-circle">
              <span className="rehab-ring rehab-ring-one" aria-hidden="true" />
              <span className="rehab-ring rehab-ring-two" aria-hidden="true" />
              <img src="/assets/images/h22.jpg" alt="Physiotherapy and rehabilitation specialist" loading="lazy" />
            </div>
            <h2 id="rehab-overview-title">Physiotherapy &amp;<br />Rehabilitation</h2>
            <span className="rehab-title-line" aria-hidden="true"><i /><i /><i /></span>
            <p className="rehab-tagline">Restoring Movement, Relieving Pain,<br />Rebuilding Lives.</p>
          </div>

          <div className="rehab-list rehab-list-right">
            {overviewRight.map((item, index) => (
              <article
                className="rehab-item"
                key={item.title}
                style={{ '--item-position': `${(index / (overviewRight.length - 1)) * 100}%` }}
              >
                <span className="rehab-icon">{item.icon}</span>
                <div className="rehab-item-copy">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="healthcare-services" aria-labelledby="healthcare-services-title">
        <div className="healthcare-services-layout">
          <div className="healthcare-services-copy">
            <h2 id="healthcare-services-title">
              World-Class Physiotherapy Care for you<br /> and <br />your loved ones
            </h2>
            <a href="#treatments" className="healthcare-services-btn">
              More Services <FaArrowRight />
            </a>
          </div>

          <div className="healthcare-card-grid" aria-label="Physiotherapy service highlights">
            {healthcareServices.map((service, index) => (
              <article className="healthcare-card" key={service.title} style={{ '--card-delay': `${index * 0.08}s` }}>
                <span className="healthcare-card-icon">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>

          <div className="healthcare-doctor">
            <img src="/assets/images/dr11.png" alt="Physiotherapy doctor at Dr. Jadhavar Rehabilitation Center" loading="lazy" />
          </div>
        </div>
        <div className="healthcare-pulse-line" aria-hidden="true">
          <span />
        </div>
      </section>

      <section className="clinic-highlight-section" aria-labelledby="clinic-highlight-title">
        <div className="clinic-highlight-inner">
          <div className="clinic-highlight-heading">
            <span>Complete Recovery Support</span>
            <h2 id="clinic-highlight-title">Physiotherapy Care</h2>
            <p>Personalized treatment to relieve pain, restore movement, and rebuild confidence.</p>
          </div>

          <div className="clinic-highlight-grid">
            {clinicHighlights.map((item, index) => (
              <button
                type="button"
                className={`clinic-highlight-card${activeCare === index ? ' is-active' : ''}`}
                key={item.title}
                aria-pressed={activeCare === index}
                onClick={() => setActiveCare(index)}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="clinic-highlight-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="clinic-highlight-link">
                    {activeCare === index ? 'Selected Care' : 'View Details'} <FaArrowRight />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="home-conditions-strip" id="conditions" aria-label="Conditions we treat">
        <div className="section-heading">
          <div className="eyebrow center"><span /> What We Treat</div>
          <h2>Conditions We Treat</h2>
          <p>
            From everyday aches to complex rehabilitation needs, our therapists design
            care plans around your specific condition.
          </p>
        </div>

        <div className="home-condition-grid">
          {visibleConditions.map((item, index) => (
            <div className="home-condition-card" key={item.title} style={{ '--delay': `${index * 0.06}s` }}>
              <span className="home-condition-icon">{item.icon}</span>
              <span className="home-condition-title">{item.title}</span>
            </div>
          ))}
          <div className="home-condition-grid-description">
            <h3>Conditions We Treat</h3>
            <p>
              We provide expert physiotherapy care for a wide range of musculoskeletal,
              neurological, and sports-related conditions. Our personalized treatment plans
              restore movement, relieve pain, and help you return to daily life with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Updated Treatments Section */}
      <section className="treatments-strip" id="treatments" aria-label="Our treatments">
        <div className="section-heading">
          <div className="eyebrow center"><span /> How We Help</div>
          <h2>Our Treatments</h2>
          <p>
            We use a blend of advanced modalities and hands-on techniques to relieve
            pain, restore function, and speed up recovery.
          </p>
        </div>

        <div className="treatment-slider">
          <button className="treatment-arrow treatment-arrow-prev" type="button" aria-label="Previous treatments" onClick={() => moveTreatments(-1)}>
            <FaArrowLeft />
          </button>
          <div className="treatment-grid" key={treatmentStart}>
            {visibleTreatments.map((item, index) => (
              <div className="treatment-card" key={item.title} style={{ '--delay': `${index * 0.06}s` }}>
                <div className="treatment-image-wrapper">
                  <img src={item.image} alt={item.title} className="treatment-image" loading="lazy" />
                </div>
                <div className="treatment-info">
                  <h3 className="treatment-title">{item.title}</h3>
                  <p className="treatment-description">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="treatment-arrow treatment-arrow-next" type="button" aria-label="Next treatments" onClick={() => moveTreatments(1)}>
            <FaArrowRight />
          </button>
        </div>
      </section>

      <section className="care-programs" aria-labelledby="care-programs-title">
        <div className="care-programs-heading">
          <div className="eyebrow center"><span /> Care Designed Around You</div>
          <h2 id="care-programs-title">Physiotherapy Care Programs</h2>
          <p>Choose focused physiotherapy support for pain relief, active recovery, and guided rehabilitation—each plan begins with a careful assessment of your needs.</p>
        </div>

        <div className="care-program-grid">
          {carePrograms.map((program, index) => (
            <article className={`care-program-card${index === 1 ? ' featured' : ''}`} key={program.title}>
              <div className="care-program-image"><img src={program.image} alt="" loading="lazy" /></div>
              <div className="care-program-body">
                <span className="care-program-label">{program.label}</span>
                <h3>{program.title}</h3>
                <ul>{program.points.map((point) => <li key={point}>{point}</li>)}</ul>
                <a href="#appointment">Discover More <FaArrowRight /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-section" id="faqs" aria-labelledby="faq-title">
        <div className="faq-layout">
          <div className="faq-intro">
            <div className="eyebrow"><span /> Helpful Information</div>
            <h2 id="faq-title">Frequently Asked Questions</h2>
            <p>Clear answers to common questions about appointments, treatment, and recovery.</p>
            <div className="faq-trust">
              <span><strong>10+</strong><small>Helpful answers</small></span>
              <span><strong>1-to-1</strong><small>Personalized care</small></span>
            </div>
            <a className="faq-contact-link" href="#appointment">Still have a question? Contact us <FaArrowRight /></a>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <article className={`faq-item${isOpen ? ' is-open' : ''}`} key={faq.question}>
                  <button
                    className="faq-question"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span><i>{String(index + 1).padStart(2, '0')}</i>{faq.question}</span>
                    <FaChevronDown />
                  </button>
                  <div className="faq-answer" id={`faq-answer-${index}`} hidden={!isOpen}>
                    <p>{faq.answer}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <PhysioChatbot />
    </main>
  );
};

export default Home;