import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css'; // Ensure this is where your CSS styles are located
import ThemeSwitcher from './ThemeSwitcher';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">FOTIA</div>
    
      <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-active' : ''}`}>
        <li>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/AboutUs" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
        </li>
        <li>
          <Link to="/Service" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
        </li>
        <li>
          <Link to="/Contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </li>
        {/* <li>
          <Link to="/UserDashboard" onClick={() => setIsMobileMenuOpen(false)}>User Dashboard</Link> 
        </li>
        <li>
          <Link to="/AdminDashboard" onClick={() => setIsMobileMenuOpen(false)}>Admin Dashboard</Link> 
        </li> */}
        <li>
          <Link to="/SignUp" className="sign-in" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</Link> {/* Link to Dashboard */}
        </li>
        <li>
          <Link to="/Login" className="sign-in" onClick={() => setIsMobileMenuOpen(false)}>Login</Link> {/* Link to Dashboard */}
        </li>
        
      </ul>
{/*     
      <div className="auth-buttons">
        <button className="sign-in">Sign Up</button>
     
        <button className="sign-in">Login</button>
      </div> */}
      <ThemeSwitcher/>  

      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
