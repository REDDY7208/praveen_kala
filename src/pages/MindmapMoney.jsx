import React ,{  useEffect}from 'react';
import './mindmapMoney.css'; // Updated CSS file name

import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles


const MindmapMoney = () => {
  // Commission levels data
  const levels = [
    { level: 1, commission: '3%' },
    { level: 2, commission: '2.75%' },
    { level: 3, commission: '2.5%' },
    { level: 4, commission: '2.25%' },
    { level: 5, commission: '2%' },
    { level: 6, commission: '1.75%' },
    { level: 7, commission: '1.5%' },
    { level: 8, commission: '1.25%' },
    { level: 9, commission: '1%' },
    { level: 10, commission: '0.75%' },
    { level: '11-15', commission: '0.5%' },
    { level: '16-25', commission: '0.25%' },
  ];
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS animations
  }, []);

  return (
    <div className="mindmap-money-container" >
      <h3 className="mindmap-money-heading" data-aos="fade-up">! Commission Levels WorkFlow !</h3>

      <div className="mindmap-money-root">
        <div className="mindmap-money-node" data-aos="fade-up">
      
          <div className="mindmap-money-branches" >
            {levels.map((level, index) => (
              <div key={index} className="mindmap-money-branch">
                <div className="mindmap-money-level">
                  <h3><span>Level {level.level}</span></h3>
                  <p>{level.commission} Commission</p>
                </div>
                {/* Line connecting nodes */}
                {index !== levels.length - 0 && <div className="mindmap-money-line"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindmapMoney;
