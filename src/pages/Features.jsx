import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS animations
  }, []);

  return (
    <div className="features-section">
      <h2 data-aos="fade-up">Why Choose FOTIA?</h2>
      <div className="features-list">
        <div className="feature" data-aos="fade-right" data-aos-delay="200">
          <h3>Blazing Fast Transactions</h3>
          <p>
            FOTIA offers ultra-fast transaction speeds, ensuring you never miss out on an opportunity in the crypto market.
          </p>
        </div>
        <div className="feature" data-aos="fade-right" data-aos-delay="400">
          <h3>Secure and Transparent</h3>
          <p>
            Your security is our priority. We implement state-of-the-art encryption and transparent processes to keep your assets safe.
          </p>
        </div>
        <div className="feature" data-aos="fade-right" data-aos-delay="600">
          <h3>Real-Time Market Insights</h3>
          <p>
            Stay ahead with real-time data, price trends, and expert analysis directly within the platform.
          </p>
        </div>
        <div className="feature" data-aos="fade-right" data-aos-delay="800">
          <h3>24/7 Support</h3>
          <p>
            Our dedicated support team is available round the clock to help with any inquiries or technical issues.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
