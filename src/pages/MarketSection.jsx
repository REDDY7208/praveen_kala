import React, { useEffect, useRef, useState } from 'react';
import './MarketSection.css'; // Import the CSS file

const MarketsSection = ({ cryptoData }) => {
  const scrollContainer = useRef(null);
  const [isAutoScroll, setIsAutoScroll] = useState(true);

  // Auto-scroll effect with pause on hover
  useEffect(() => {
    const autoScroll = () => {
      if (!isAutoScroll) return;
      const scrollStep = 1;
      const delay = 30;

      const scrollInterval = setInterval(() => {
        if (scrollContainer.current) {
          const maxScrollTop = scrollContainer.current.scrollHeight - scrollContainer.current.clientHeight;
          if (scrollContainer.current.scrollTop >= maxScrollTop) {
            scrollContainer.current.scrollTop = 0; // Reset scroll to top
          } else {
            scrollContainer.current.scrollTop += scrollStep;
          }
        }
      }, delay);

      return scrollInterval;
    };

    const interval = autoScroll();

    return () => clearInterval(interval);
  }, [isAutoScroll]);

  const handleMouseEnter = () => setIsAutoScroll(false); // Stop auto-scroll on hover
  const handleMouseLeave = () => setIsAutoScroll(true);  // Resume auto-scroll when hover ends

  return (
    <section
      className="userdashboard-markets-section"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3>Markets (Top 10)</h3>
      <div className="userdashboard-markets-scroll" ref={scrollContainer}>
        <div className="userdashboard-markets-header">
          <span className="userdashboard-markets-col">Name</span>
          <span className="userdashboard-markets-col">Current Price</span>
          <span className="userdashboard-markets-col">Price Change (%)</span>
        </div>
        <ul className="userdashboard-markets-list">
          {cryptoData.marketData.map((coin) => (
            <li key={coin.id} className="userdashboard-markets-row">
              <span className="userdashboard-markets-col">{coin.name}</span>
              <span className="userdashboard-markets-col">${coin.current_price}</span>
              <span className={`userdashboard-markets-col ${coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}`}>
                {coin.price_change_percentage_24h?.toFixed(2)}%
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MarketsSection;
