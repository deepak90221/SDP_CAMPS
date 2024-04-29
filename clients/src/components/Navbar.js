import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-logo">
          <span className="logo-icon">C</span>
          Campus Placement Management
        </div>
        <button className={`navbar-toggle ${isOpen ? 'active' : ''}`} onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <a href="/" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/companies" className="navbar-link">Companies</a>
          </li>
          <li className="navbar-item">
            <a href="Ship" className="navbar-link">Internships</a>
          </li>
          <li className="navbar-item">
            <a href="/Recruit" className="navbar-link">Recruiters</a>
          </li>
          <li className="navbar-item">
            <a href="Jobstatus" className="navbar-link">Jobs Status</a>
          </li>
         
          <li className="navbar-item navbar-profile">
            <div className="profile-icon" onClick={toggleProfileDropdown}>
              <span>Profile</span>
              {isProfileOpen && (
                <div className="dropdown-content">
                  <a href="Login">Student Login</a>
                  <a href="Admin">Admin Login</a>
                  <a href="Regsiter">Register</a>
                  <a href="/logout">Logout</a>
                </div>
              )}
            </div>
          </li>
        </ul>
        {/* Cart Icon */}
       <div className="cart-icon">
          <a href="/Ship1">
            <span>&#128722;</span>
            {cart.length > 0 && (
              <div className="cart-items">
                <ul>
                  {cart.map((item, index) => (
                    <li key={index}>{item.title}</li>
                  ))}
                </ul>
              </div>
            )}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
