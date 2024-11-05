import React, { useEffect } from 'react';
import HowItWorks from './HowItWorks';
import cryptoImage from '../assets/Fotia-home.png'; 
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import Map from './Map';
import Testimonial from './Testimonial';
import CryptoMarket from './CryptoMarket';





const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS animations
  }, []);

  return (
    <div className='home-wrapper'> {/* New parent div */}
      <div className='home'>
        <div className='home-content'>
          <h1 data-aos="fade-up">Welcome to FOTIA</h1>
          <p data-aos="fade-up" className='sub-title' data-aos-delay="200"><b>Crypto easily Anytime, Anywhere.</b></p>
          <p data-aos="fade-up" data-aos-delay="400">
            At <b>FOTIA</b> , We bring the heat of innovation to the world of cryptocurrency. 
            With a user-first approach, secure trading, and real-time insights, we empower 
            you to navigate the crypto markets with confidence. Start your journey with 
            FOTIA today and experience a blazing-fast, secure, and intuitive platform built 
            for traders of all levels.
          </p>
          <button className='get-started-btn'>Get Started Now</button>
        </div>

        <div className='home-image' data-aos="zoom-in">
          <img src={cryptoImage} alt="Crypto coins" />
        </div>
      </div>
     
        <CryptoMarket/>    
       <HowItWorks/>  
       <Map/>  
       <Testimonial/> 
   
    </div>
  );
};

export default Home;
