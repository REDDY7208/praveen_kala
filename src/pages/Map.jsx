import React, { useEffect } from 'react';
import mapGif from '../assets/map_anim.gif';
import mapImg from '../assets/map.png';
import './map.css'; // Adjust the path as necessary
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles

const Map = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='map-scrolling'>
      <section className='map-section'>
        <div className='container'>
          <h1 className='map-heading' data-aos="fade-up">Connecting Millions Globally with Fotia Network</h1>
          <img className='static-map' src={mapImg} alt="MapImage" data-aos="zoom-in" />
          <img className='animated-map' src={mapGif} alt="MapGif" data-aos="fade-up" />
        </div>
      </section>
    </div>
  );
};

export default Map;
