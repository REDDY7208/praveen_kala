import React, { useState, useEffect } from 'react';
import './service.css'; 
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import Mindmap from './Mindmap';
import MindmapMoney from './MindmapMoney';

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (
    <div className="faqs" >
      
      <h1 className="faqs-heading" data-aos="fade-up">! Build Your Network and Earn Big !</h1>

      {/* Progress Indicator
      <div className="progress-container">
        {levels.map((item, index) => (
          <div key={index} className="progress-step" data-aos="fade-right">
            <div className="level-circle">{item.level}</div>
            <div className="level-commission">{item.commission} Commission</div>
            {index !== levels.length - 1 && <div className="progress-line"></div>}
          </div>
        ))}
      </div> */}
            <Mindmap />
      <MindmapMoney/>

      <div className="service-section left-container" data-aos="fade-left">
        <h3>How Your Team Grows Over Time</h3>
        <p className='service-section-p'>
          Your network will grow up to 25 levels deep as referrals invite others.
        </p>
      </div>

      <div className="service-section right-container" data-aos="fade-right">
        <h3>What Do You Need to Unlock More Commissions?</h3>
        <p className='service-section-p'>
          To unlock commissions, you need a specific number of direct referrals:
        </p>
        <h4>Level 1: At least 1 direct referral</h4>
        <h4>Level 7: 7 direct referrals unlock commissions at this level</h4>
        <h4>Level 25: Add 25 direct referrals for maximum potential</h4>
      </div>
{/* 
      <div className="service-section right-container" data-aos="fade-left">
        <h3>Key Benefits of Our MLM Plan</h3>
        <h4>Direct Commissions (3%) on every direct referral</h4>
        <h4>25 Levels of Earnings</h4>
        <h4>Easy Growth Strategy</h4>
        <h4>Small Rewards Add Up</h4>
      </div> */}


    </div>
  );
};

export default Service;
