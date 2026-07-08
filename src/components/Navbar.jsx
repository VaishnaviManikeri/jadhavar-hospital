import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FaBars, FaChevronDown, FaTimes } from 'react-icons/fa';
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

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/treatment', label: 'Our Treatment' },
    { path: '/why-choose-us', label: 'Why Choose Us' },
    { path: '/success-stories', label: 'Success Stories' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  const isTreatmentActive = location.pathname === '/treatment' || location.pathname === '/conditions';

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-top">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="Dr. Jadhavar Physiotherapy" className="logo-image" />
          </Link>
          
          <div className="navbar-center">
            <h1 className="clinic-name">Dr. Jadhavar Physiotherapy & Rehabilitation Center</h1>
            <p className="clinic-tagline">Advanced Physiotherapy | Sports Injury | Pain Relief | Rehabilitation</p>
            
            <ul className="nav-menu">
              {navLinks.map((link) => link.path === '/about' ? (
                <li key={link.path} className="nav-item nav-dropdown">
                  <NavLink to={link.path} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                    {link.label} <FaChevronDown className="dropdown-chevron" />
                  </NavLink>
                  <div className="nav-dropdown-menu">
                    <NavLink to="/about">About Our Center</NavLink>
                    <NavLink to="/about-doctor">About the Doctor</NavLink>
                  </div>
                </li>
              ) : link.path === '/treatment' ? (
                <li key={link.path} className="nav-item nav-dropdown">
                  <NavLink to={link.path} className={() => `nav-link ${isTreatmentActive ? 'active' : ''}`}>
                    {link.label} <FaChevronDown className="dropdown-chevron" />
                  </NavLink>
                  <div className="nav-dropdown-menu">
                    <NavLink to="/treatment">Our Treatment</NavLink>
                    <NavLink to="/conditions">Conditions We Treat</NavLink>
                  </div>
                </li>
              ) : (
                <li key={link.path} className="nav-item">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? 'active' : ''}`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <Link to="/appointment" className="btn-appointment">
            Book Appointment
          </Link>

          <div className="hamburger" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        <div className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
        <ul className={`mobile-nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => link.path === '/about' ? (
            <li key={link.path} className="mobile-nav-item mobile-about-group">
              <NavLink to="/about" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>About Us</NavLink>
              <NavLink to="/about-doctor" className={({ isActive }) => `mobile-nav-sublink ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>About the Doctor</NavLink>
            </li>
          ) : link.path === '/treatment' ? (
            <li key={link.path} className="mobile-nav-item mobile-treatment-group">
              <NavLink to="/treatment" className={() => `mobile-nav-link ${isTreatmentActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Our Treatment</NavLink>
              <NavLink to="/conditions" className={({ isActive }) => `mobile-nav-sublink ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Conditions We Treat</NavLink>
            </li>
          ) : (
            <li key={link.path} className="mobile-nav-item">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `mobile-nav-link ${isActive ? 'active' : ''}`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
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
