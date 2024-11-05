import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import './HowItWorks.css'; // Import the CSS file
import { FaUserPlus, FaCreditCard, FaWallet, FaUsers } from 'react-icons/fa'; // Importing relevant icons from react-icons

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS animations
  }, []);

  return (
    <div className="how-it-works-container">
      <h2 data-aos="fade-up">How It Works</h2>
      <h3 data-aos="fade-up">! Join the Fotia Revolution !</h3>
      <p className="description" data-aos="fade-up" data-aos-delay="200">
        Follow these simple steps to get started with our platform.<br /><br />
        <strong>Effortless Trading:</strong> With Fotia, your trading experience is as smooth as butter no bumps, just brilliance!<br />
        
        <strong>Collaborate with Visionaries:</strong> Connect with like-minded individuals on Fotia and share insights that ignite your trading journey.<br />
        <strong>Unlock Hidden Gems:</strong> Discover innovative tools that turn the ordinary into extraordinary, elevating your trading game to new heights.<br />
        <strong>Your Security, Our Mission:</strong> We’re not just another platform; we’re your fortress! Enjoy trading with top-notch security and peace of mind.
      </p>

      <div className="steps-container">
        {/* Step 1: Register */}
        <div className="step" data-aos="fade-up" data-aos-delay="400">
          <div className="icon">
            <FaUserPlus size={30} /> {/* Register Icon */}
          </div>
          <h3>Register</h3>
          <p className='steps-container-desc'>Create your account by providing basic information. This helps us tailor the experience to your needs.</p>
        </div>

        <div className="dotted-line"></div> {/* Dotted Line */}

        {/* Step 2: Add Payment Method */}
        <div className="step" data-aos="fade-up" data-aos-delay="800">
          <div className="icon">
            <FaCreditCard size={30} /> {/* Payment Method Icon */}
          </div>
          <h3>Add Payment Method</h3>
          <p className='steps-container-desc'>Securely add your payment method to easily manage transactions on our platform.</p>
        </div>

        <div className="dotted-line"></div> {/* Dotted Line */}

        {/* Step 3: Connect Wallet */}
        <div className="step" data-aos="fade-up" data-aos-delay="1200">
          <div className="icon">
            <FaWallet size={30} /> {/* Connect Wallet Icon */}
          </div>
          <h3>Connect Wallet</h3>
          <p className='steps-container-desc'>Link your crypto wallet to manage your funds and transactions seamlessly.</p>
        </div>

        <div className="dotted-line"></div> {/* Dotted Line */}

        {/* Step 4: Manage Users */}
        <div className="step" data-aos="fade-up" data-aos-delay="1600">
          <div className="icon">
            <FaUsers size={30} /> {/* Manage Users Icon */}
          </div>
          <h3>Manage Users</h3>
          <p className='steps-container-desc'>Invite friends and manage user roles within the platform to enhance collaboration.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
