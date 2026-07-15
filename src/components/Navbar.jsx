import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FaBars, FaChevronDown, FaFacebookF, FaInstagram, FaPhoneAlt, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import logo from '/assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [window.location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isTreatmentActive = location.pathname === '/treatment' || location.pathname === '/conditions';

  // Links are split into two groups so they can sit on either side of the
  // centered logo. Order is preserved: left half first, right half second.
  const leftLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/treatment', label: 'Our Treatment' },
    { path: '/why-choose-us', label: 'Why Choose Us' },
  ];

  const rightLinks = [
    { path: '/success-stories', label: 'Success Stories' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  // Shared renderer so desktop (left/right) and mobile menus stay in sync.
  const renderDesktopLink = (link) => {
    if (link.path === '/about') {
      return (
        <li key={link.path} className="nav-item nav-dropdown">
          <NavLink to={link.path} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            {link.label} <FaChevronDown className="dropdown-chevron" />
          </NavLink>
          <div className="nav-dropdown-menu">
            <NavLink to="/about">About Our Center</NavLink>
            <NavLink to="/about-doctor">About the Doctor</NavLink>
          </div>
        </li>
      );
    }
    if (link.path === '/treatment') {
      return (
        <li key={link.path} className="nav-item nav-dropdown">
          <NavLink to={link.path} className={() => `nav-link ${isTreatmentActive ? 'active' : ''}`}>
            {link.label} <FaChevronDown className="dropdown-chevron" />
          </NavLink>
          <div className="nav-dropdown-menu">
            <NavLink to="/treatment">Our Treatment</NavLink>
            <NavLink to="/conditions">Conditions We Treat</NavLink>
          </div>
        </li>
      );
    }
    return (
      <li key={link.path} className="nav-item">
        <NavLink
          to={link.path}
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          onClick={() => setIsOpen(false)}
        >
          {link.label}
        </NavLink>
      </li>
    );
  };

  const renderMobileLink = (link) => {
    if (link.path === '/about') {
      return (
        <li key={link.path} className="mobile-nav-item mobile-about-group">
          <NavLink to="/about" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>About Us</NavLink>
          <NavLink to="/about-doctor" className={({ isActive }) => `mobile-nav-sublink ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>About the Doctor</NavLink>
        </li>
      );
    }
    if (link.path === '/treatment') {
      return (
        <li key={link.path} className="mobile-nav-item mobile-treatment-group">
          <NavLink to="/treatment" className={() => `mobile-nav-link ${isTreatmentActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Our Treatment</NavLink>
          <NavLink to="/conditions" className={({ isActive }) => `mobile-nav-sublink ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Conditions We Treat</NavLink>
        </li>
      );
    }
    return (
      <li key={link.path} className="mobile-nav-item">
        <NavLink
          to={link.path}
          className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
          onClick={() => setIsOpen(false)}
        >
          {link.label}
        </NavLink>
      </li>
    );
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-utility-row">
          <div className="navbar-utility-copy">
            <strong>Dr. Jadhavar Physiotherapy &amp; Rehabilitation Center</strong>
            <span>Advanced Physiotherapy | Sports Injury | Pain Relief | Rehabilitation</span>
          </div>
          <div className="navbar-utility-actions">
            <a href="tel:+917700995363" className="navbar-emergency" aria-label="Call emergency number +91 77009 95363">
              <FaPhoneAlt aria-hidden="true" /> <span>Emergency</span>
            </a>
            <a href="https://www.instagram.com/drjadhavarphysio" className="navbar-social" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.facebook.com/profile.php?id=61591214087018" className="navbar-social" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <Link to="/appointment" className="btn-appointment navbar-utility-book">Book Appointment</Link>
          </div>
          <div className="navbar-mobile-controls">
            <div className="navbar-mobile-actions">
              <Link to="/appointment" className="btn-appointment navbar-mobile-book">Book Appointment</Link>
              <a href="tel:+917700995363" className="navbar-emergency navbar-mobile-emergency" aria-label="Call emergency number +91 77009 95363">
                <FaPhoneAlt aria-hidden="true" /> <span>Emergency</span>
              </a>
            </div>
            <button
              className="hamburger navbar-mobile-toggle"
              type="button"
              onClick={toggleMenu}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {/* Row 1: clinic name/tagline + Book Appointment (hamburger on mobile) */}
        <div className="navbar-brand-row">
          <div className="navbar-title">
            <h1 className="clinic-name">Dr. Jadhavar Physiotherapy & Rehabilitation Center</h1>
            <p className="clinic-tagline">Advanced Physiotherapy | Sports Injury | Pain Relief | Rehabilitation</p>
          </div>

          <div className="navbar-actions">
            <a href="tel:+917700995363" className="navbar-emergency" aria-label="Call emergency number +91 77009 95363">
              <FaPhoneAlt aria-hidden="true" /> <span>Emergency</span>
            </a>
            <a href="https://www.instagram.com/" className="navbar-social" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.facebook.com/" className="navbar-social" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <Link to="/appointment" className="btn-appointment">Book Appointment</Link>
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Row 2: left links | centered logo | right links */}
        <div className="navbar-top">
          <div className="navbar-side navbar-side-left">
            <ul className="nav-menu">
              {leftLinks.map(renderDesktopLink)}
            </ul>
          </div>

          <div className="navbar-logo-center">
            <Link to="/" className="navbar-logo">
              <img src={logo} alt="Dr. Jadhavar Physiotherapy" className="logo-image" />
            </Link>
          </div>

          <div className="navbar-side navbar-side-right">
            <ul className="nav-menu">
              {rightLinks.map(renderDesktopLink)}
            </ul>
          </div>
        </div>

        <div className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
        <ul className={`mobile-nav-menu ${isOpen ? 'active' : ''}`}>
          {[...leftLinks, ...rightLinks].map(renderMobileLink)}
          <li className="mobile-nav-item">
            <Link to="/appointment" className="btn-appointment-mobile" onClick={() => setIsOpen(false)}>
              Book Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
