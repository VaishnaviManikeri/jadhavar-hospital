import { Link } from 'react-router-dom';
import { FaArrowRight, FaClock, FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6';
import './Footer.css';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/about-doctor', label: 'About the Doctor' },
  { path: '/treatment', label: 'Our Treatment' },
  { path: '/conditions', label: 'Conditions Treated' },
  { path: '/why-choose-us', label: 'Why Choose Us' },
  { path: '/success-stories', label: 'Success Stories' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
];

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-panel">
      <div className="footer-earth">
        <img src="/assets/images/bg.png" alt="Earth, symbolizing care without boundaries" />
      </div>

      <div className="footer-cta">
        <span>Care that goes beyond boundaries</span>
        <h2>Move Better. Recover Stronger.<br />Live Pain-Free.</h2>
        <p>Advanced Physiotherapy | Sports Injury | Pain Relief | Rehabilitation</p>
        <Link to="/contact" className="footer-appointment">
          Book an Appointment <FaArrowRight />
        </Link>
      </div>

      <div className="footer-columns">
        <div className="footer-brand">
          <Link to="/" className="footer-brand-heading">Dr. Jadhavar</Link>
          <h3>Physiotherapy &amp; Rehabilitation Center</h3>
          <p>Personalized, evidence-based physiotherapy focused on reducing pain, restoring movement, and helping you return to an active life.</p>
        </div>

        <div className="footer-link-column">
          <h3>Explore</h3>
          <ul>
            {navLinks.slice(0, 5).map((link) => (
              <li key={link.path}><Link to={link.path}>{link.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-link-column">
          <h3>More Links</h3>
          <ul>
            {navLinks.slice(5).map((link) => (
              <li key={link.path}><Link to={link.path}>{link.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Details</h3>
          <address>
            <span><FaLocationDot /><i>Dr. Jadhavar Physiotherapy Center,<br />Maharashtra, India</i></span>
            <span><FaPhone /><i>Contact number available on request</i></span>
            <span><FaEnvelope /><i><Link to="/contact">Visit our Contact page</Link></i></span>
            <span><FaClock /><i>Mon-Sat: 9:00 AM-8:00 PM</i></span>
          </address>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} Dr. Jadhavar Physiotherapy &amp; Rehabilitation Center.</span>
        <span>All rights reserved.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
