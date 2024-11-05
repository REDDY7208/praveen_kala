import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import './mindmap.css'; // Import your custom CSS

const Mindmap = () => {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Set the duration for animations
  }, []);

  return (
    <div className="mindmap-container" data-aos="fade-up"> {/* Apply fade-up animation to the container */}
      <div className="main-title" data-aos="fade-down">
        <span   className="text" data-aos="fade-up">Our Services</span>
      </div>
      <div className="nodes">
        <div className="node trading-platform" data-aos="fade-right">
          <h3>Trading Platform</h3>
          <p>Secure and efficient trading of cryptocurrencies like Bitcoin, Ethereum, Tether, and more.</p>
        </div>
        <div className="node referral-program" data-aos="fade-left">
          <h3>Referral Program</h3>
          <p>Earn points by referring friends and family. Get rewards based on your referrals in every month</p>
        </div>
        <div className="node wallet-integration" data-aos="fade-right">
          <h3>Wallet Integration</h3>
          <p>Seamlessly connect your crypto wallets for secure, fast transactions within the platform.</p>
        </div>
        <div className="node market-insights" data-aos="fade-left">
          <h3>Market Insights</h3>
          <p>Get real-time data and analytics on the top 10 cryptocurrencies to make informed trading decisions.</p>
        </div>
      </div>
    </div>
  );
}

export default Mindmap;
