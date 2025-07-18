import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-icon">{'</>'}</span>
        <span className="logo-text">Jasa Coding</span>
      </div>
      <button
        className={`navbar-hamburger${menuOpen ? ' open' : ''}`}
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
      <ul className={`navbar-menu${menuOpen ? ' show' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        {/* <li><Link to="/contact">Contact</Link></li> */}
      </ul>
    </nav>
  );
}
