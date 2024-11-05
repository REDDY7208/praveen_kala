import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Import phone input styles
import { FaUserAlt, FaEnvelope, FaEye, FaEyeSlash, FaKey, FaMobileAlt } from 'react-icons/fa';
import SignupVerifyPopup from './SignupVerifyPopup';
import './signUp.css';
import AOS from 'aos'; // Import AOS for animations
import 'aos/dist/aos.css'; // Import AOS styles


import ThemeSwitcher from '../components/ThemeSwitcher';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    phone_number: '',
    referral_code: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // New state to manage button disabled status

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'password') {
      validatePassword(value);
    }
  };

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
    if (!passwordPattern.test(password)) {
      setPasswordError('Password must be at least 8 characters long, include one uppercase letter, and one special character.');
    } else {
      setPasswordError('');
    }
  };

  const handlePhoneNumberChange = (phone) => {
    setFormData({
      ...formData,
      phone_number: phone
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (error || passwordError) {
      setIsSubmitting(false); 
      return; // Prevent form submission if there's an error
    }

    try {
      const response = await fetch('http://127.0.0.1:5001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (response.ok) {
        setMessage(result.message);
        setError('');
        setPasswordError('');
        setShowPopup(true); // Show popup after successful registration
      } else {
        setError(result.message);
        setMessage('');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('An error occurred while registering.');
    }
    finally {
      setIsSubmitting(false); // Enable the button again after submission completes
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="signup-container">
      {/* Top-right corner for Home link and Theme Selector */}
      <div className="top-bar">
        <Link to="/" className="home-link">Home</Link> {/* Home link */}
        <ThemeSwitcher />{/* Theme Selector Component */}
      </div>

      <div className="signup-content">
        <div className="signup-text" data-aos="fade-right">
          <h2 data-aos="fade-up">Create Your Fotia Account Today </h2>
          <p data-aos="fade-up">Unlock the power of the crypto revolution in just a few steps.</p>
          <p data-aos="fade-up">Your journey to financial independence starts here.</p>
        </div>
        <div className="signup-form" data-aos="fade-left"> 
        
          <h2> Create Account !  </h2>
      
          <form onSubmit={handleSubmit}>
            <div className='input-group'>
              <FaUserAlt className="icon" />
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                placeholder='User Name'
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group phone-container">
              <FaMobileAlt className='phone-icon' style={{ color: 'var(--text-color)' ,marginLeft:'-5px'}} />
              <PhoneInput 

                country={'us'}
                value={formData.phone_number}
                onChange={handlePhoneNumberChange}
                enableSearch={true}
                className='phone'
                placeholder="Enter Mobile Number"
                excludeCountries={['ae']}  // Exclude UAE
              />
            </div>
            <div className='input-group'>
              <FaEnvelope className="icon" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder='Email ID'
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="password-field input-group">
              <div className="password-container">
                <span className="toggle-password icon" onClick={toggleShowPassword}>
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
                <input 
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder='Password'
                  required
                />
              </div>
            </div>
            {passwordError && <p className="error-message">{passwordError}</p>}
           
            <div className='input-group'>
              <FaKey className="icon" />
              <input
                type="text"
                id="referral_code"
                name="referral_code"
                value={formData.referral_code}
                onChange={handleInputChange}
                placeholder='Referral Code'
              />
            </div>
            
            {error && <p className="error-message">{error}</p>}
            <button className='signup-btn' type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Sign Up'}
            </button>
          </form>
        </div>
      </div>

      {showPopup && (
        <SignupVerifyPopup
          message="Check your email for verification."
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default SignUp;
