import React, { useEffect } from 'react';
import './about.css'; // Ensure to create this CSS file
import image3 from '../assets/Fotia-home.png'; // Update with actual path
import image2 from '../assets/Fotia-about.png'; // Update with actual path
import image1 from '../assets/fotia-gif.gif'; // Update with actual path
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import FotiaCryptoApp from './FotiaCryptoApp';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="introduce-container" >
    
      {/* Section 1: Who We Are */}
      <div className="introduce-section introduce-content-left" id='AboutUs'>
        <div className="image-content">
          
          <img data-aos="zoom-in" src={image1} alt="Who We Are" className="introduce-image" />
        </div>
        <div className="text-content">
        
          <h1 data-aos="fade-up">Who We Are ?</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            At <b>Fotia</b> , we are more than just a cryptocurrency wallet provider. We are a collective of fintech professionals who are passionate about empowering digital asset holders. Based in Dubai, our global expertise drives our innovation and vision.
          </p>
          <p data-aos="fade-up" data-aos-delay="400">
            We have over 20 years of combined experience in finance and technology, with a focus on security, simplicity, and scalability. Whether you're just getting started or are a seasoned trader, we provide tools and solutions to help you succeed.
          </p>
        </div>
      </div>

      {/* Section 2: What We Do */}
      <div className="introduce-section">
        <div className="text-content">
        
          <h1 data-aos="fade-up">What We Do ?</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            We offer state-of-the-art wallets designed to meet the diverse needs of cryptocurrency users, combining cutting-edge technology with an intuitive user interface. Whether you’re a trader or investor, Fotia's wallets are built for seamless, secure, and efficient use.
          </p>
          <p data-aos="fade-up" data-aos-delay="400">
            In addition to wallet services, we provide strategic market analysis tools, security features, and integrations that help you manage your digital assets with ease.
          </p>
        </div>
        <div className="image-content">
          <img data-aos="zoom-in" src={image2} alt="What We Do" className="introduce-image" />
        </div>
      </div>

      {/* Section 3: Meet Our Team */}
      <div className="introduce-section  team-section introduce-content-left">
        <div className="image-content">
          <img data-aos="zoom-in" src={image3} alt="Our Team" className="introduce-image" />
        </div>
        <div className="text-content">
          <h1 data-aos="fade-up">Meet Our Team</h1>
          <p data-aos="fade-up" data-aos-delay="200">
  At <b>Fotia </b>, Our strength lies in our team's collective vision and dedication. We are a diverse group of thinkers, creators, and innovators united by a single goal: to redefine the way digital assets are managed.
</p>
<p data-aos="fade-up" data-aos-delay="400">
  Every member of our team plays a vital role in driving the company's success, bringing unique perspectives and talents to the table. From strategy and design to customer experience and technology, we believe that collaboration is the key to creating exceptional solutions.
</p>
<p data-aos="fade-up" data-aos-delay="600">
  Together, we are not just building a cryptocurrency wallet – we are crafting an experience that empowers our clients to navigate the evolving digital economy with confidence. Join us as we shape the future of digital finance, one innovation at a time.
</p>

        </div>
      </div>
      <FotiaCryptoApp/>
    
    </div>
  );
};

export default About;
