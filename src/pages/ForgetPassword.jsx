import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './forget.css';
import ThemeSwitcher from '../components/ThemeSwitcher';
import {  FaEnvelope, FaEye, FaEyeSlash, FaKey } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Modal from './VerifyMessageForget'; // Import the Modal component
import VerifyMessageForget from './VerifyMessageForget';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [new_password, setNew_Password] = useState('');
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Function to handle sending the OTP
  const handleSendOTP = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage('Please enter your email.');
      setIsModalOpen(true); // Show modal
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:5003/forgot_password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('OTP sent to your email. Please check your inbox.');
        setStep(2);
        setIsModalOpen(true); // Show modal
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || 'Failed to send OTP. Please try again.');
        setIsModalOpen(true); // Show modal
      }
    } catch (error) {
      setMessage('Failed to send OTP. Please try again.');
      setIsModalOpen(true); // Show modal
    } finally {
      setLoading(false);
    }
  };
// Function to validate the password
const isPasswordValid = (password) => {
  // Check for minimum length, uppercase letter, and special character
  const minLength = 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return password.length >= minLength && hasUppercase && hasSpecialChar;
};

  // Function to handle password reset
  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!otp || !new_password || !email) {
      setMessage('Please enter email, OTP, and new password.');
      setIsModalOpen(true); // Show modal
      return;
    }

    if (!isPasswordValid(new_password)) {
      setMessage('Password must be at least 8 characters long, contain at least one uppercase letter and one special character.');
      setIsModalOpen(true); // Show modal
      return;
    }

    if (new_password !== confirmPassword) {
      setMessage('Passwords do not match.');
      setIsModalOpen(true); // Show modal
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost:5003/reset_password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp: parseInt(otp, 10), new_password }),
      });

      if (response.ok) {
        setMessage('Password reset successful! Redirecting to login...');
        setIsModalOpen(true); // Show modal
        setTimeout(() => {
          navigate('/Login'); // Redirect after success
        }, 2000);
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || 'Failed to reset password. Please try again.');
        setIsModalOpen(true); // Show modal
      }
    } catch (error) {
      setMessage('Failed to reset password. Please try again.');
      setIsModalOpen(true); // Show modal
    } finally {
      setLoading(false);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const isResetButtonDisabled = () => {
    return loading || !isPasswordValid(new_password) || new_password !== confirmPassword;
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='forget-page'>
    <div className="forget-password-container">
      <div className="top-bar-forget">
        <Link to="/" className="home-link-forget" data-aos="fade-up">Home</Link>
        <ThemeSwitcher />
      </div>
      <div className="left-side-forget" data-aos="fade-right">
        <h2 data-aos="fade-up">Welcome to Password Recovery</h2>
        <p data-aos="fade-up">If you have forgotten your password, Don't worry! Just follow the steps to reset your password.</p>
      </div>
      <div className="right-side-forget" data-aos="fade-left">
        <h2>{step === 1 ? 'Forgot Password' : 'Reset Password'}</h2>

        {step === 1 ? (
          <form onSubmit={handleSendOTP}>
            <div className='otp-page'>
            <div className="input-group-forget" data-aos="fade-up">
           
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email ID"
                required
              />
            </div>
            <button type="submit" disabled={loading} >
              {loading ? 'Sending...' : 'Send OTP'}
            </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleResetPassword} data-aos="fade-left">
            <div className="input-group-forget" data-aos="fade-up">
              <FaEnvelope className="icon-forget" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email ID"
                required
              />
            </div>
            <div className="input-group-forget" data-aos="fade-up">
              <FaKey className="icon-forget" />
              <input
                type="text"
                value={otp}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d{0,6}$/.test(value)) {
                    setOtp(value);
                  }
                }}
                placeholder="Enter the OTP (6 digits)"
                maxLength={6}
                required
              />
            </div>

            <div className="input-group-forget" data-aos="fade-up">
              <span className="toggle-password icon-forget" onClick={toggleShowPassword}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                value={new_password}
                onChange={(e) => setNew_Password(e.target.value)}
                placeholder="Enter your new password"
                required
              />
            </div>
            <div className="input-group-forget" data-aos="fade-up">
              <span className="toggle-password icon-forget" onClick={toggleShowPassword}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your new password"
                required
              />
            </div>
            <button type="submit" disabled={isResetButtonDisabled()} >
              {loading ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>
        )}
      </div>

      {/* Modal for displaying messages */}
      <VerifyMessageForget isOpen={isModalOpen} message={message} onClose={handleCloseModal} />
    </div>
    </div>
  );
};

export default ForgetPassword;
