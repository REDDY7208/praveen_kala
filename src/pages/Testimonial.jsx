import React, { useEffect, useRef, useState } from 'react';
import './Testimonial.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactCountryFlag from "react-country-flag";

const testimonials = [
    { id: 1, text: "Thanks to Fotia, I turned my investment into a significant profit in just a month!", author: "Alex Turner", country: "USA", flag: <ReactCountryFlag countryCode="US" svg />, image: "src/assets/TestimonialImages/US1.jpg" },
    { id: 2, text: "Fotia has the best trading tools! My portfolio has increased by 150%.", author: "Sophia Lopez", country: "Canada", flag: <ReactCountryFlag countryCode="CA" svg />, image: "src/assets/TestimonialImages/women3.webp" },
    { id: 3, text: "I never believed I could make this much profit! Fotia is a game-changer!", author: "Liam Brown", country: "UK", flag: <ReactCountryFlag countryCode="GB" svg />, image: "src/assets/TestimonialImages/men3.jpg" },
    { id: 4, text: "With Fotia, I was able to double my investment in just two weeks!", author: "Olivia Johnson", country: "Australia", flag: <ReactCountryFlag countryCode="AU" svg />, image: "src/assets/TestimonialImages/men4.jpg" },
    { id: 5, text: "I made a profit with Fotia's expert advice. Highly recommended!", author: "Mia Garcia", country: "USA", flag: <ReactCountryFlag countryCode="US" svg />, image: "src/assets/TestimonialImages/women4.jpg" },
    { id: 6, text: "Fotia transformed my trading experience. I earned incredible returns in one month!", author: "James Smith", country: "New Zealand", flag: <ReactCountryFlag countryCode="NZ" svg />, image: "src/assets/TestimonialImages/men1.jpg" },
    { id: 7, text: "Investing with Fotia has been the best decision of my life. I'm now financially free!", author: "Isabella Martinez", country: "Mexico", flag: <ReactCountryFlag countryCode="MX" svg />, image: "src/assets/TestimonialImages/women5.jpeg" },
    { id: 8, text: "I saw a huge increase in my Bitcoin holdings thanks to Fotia!", author: "Noah Davis", country: "India", flag: <ReactCountryFlag countryCode="IN" svg />, image: "src/assets/TestimonialImages/men5.jpg" },
    { id: 9, text: "Fotia's insights helped me maximize my profits. I can't thank them enough!", author: "Elijah Wilson", country: "Singapore", flag: <ReactCountryFlag countryCode="SG" svg />, image: "src/assets/TestimonialImages/women1.jpg" },
    { id: 10, text: "With Fotia, I've achieved financial independence! The results are mind-blowing.", author: "Amelia Thompson", country: "Australia", flag: <ReactCountryFlag countryCode="AU" svg />, image: "src/assets/TestimonialImages/women2.jpg" },
];

const Testimonial = () => {
  const scrollRef = useRef(null);
  const [isAutoScroll, setIsAutoScroll] = useState(true);

  useEffect(() => {
    AOS.init();
    const scrollContainer = scrollRef.current;

    const autoScroll = () => {
      if (!isAutoScroll) return; // Stop scrolling if isAutoScroll is false
      let scrollAmount = 0;
      const scrollStep = 1;
      const delay = 30;

      const scrollInterval = setInterval(() => {
        if (scrollAmount >= scrollContainer.scrollHeight / 2) {
          scrollAmount = 0;
          scrollContainer.scrollTop = 0;
        } else {
          scrollContainer.scrollTop += scrollStep;
          scrollAmount += scrollStep;
        }
      }, delay);

      return scrollInterval;
    };

    const interval = autoScroll();

    return () => {
      clearInterval(interval);
    };
  }, [isAutoScroll]); // Add isAutoScroll as a dependency

  // Functions to handle mouse enter and leave
  const handleMouseEnter = () => {
    setIsAutoScroll(false); // Stop auto-scroll on hover
  };

  const handleMouseLeave = () => {
    setIsAutoScroll(true); // Resume auto-scroll when hover ends
  };

  return (
    <div className="testimonial-container">
      <h1 className="testimonial-header" data-aos="zoom-in" data-aos-duration="800">
        What Users Say About Fotia
      </h1>
      <div className="testimonial-section" ref={scrollRef}>
        {testimonials.concat(testimonials).map((testimonial, index) => (
          <div 
            key={index} 
            className="testimonial-card" 
            onMouseEnter={handleMouseEnter} // Stop on hover
            onMouseLeave={handleMouseLeave} // Resume on mouse leave
          >
            <img src={testimonial.image} alt={testimonial.author} className="testimonial-image" />
            <div className="testimonial-text-container">
              <p className="testimonial-text">{testimonial.text}</p>
              <p className="testimonial-author">
                - {testimonial.author}, {testimonial.country} {testimonial.flag}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
