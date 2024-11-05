import React, { useEffect, useState } from 'react';
import './CryptoMarket.css'; // Custom CSS for styling
import { Sparklines, SparklinesLine } from 'react-sparklines'; // Import Sparklines
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // AOS styles

const CryptoMarket = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false); // state to control whether to show 5 or 10 items

  // Initialize AOS animations on component mount
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1 second animation duration
  }, []);

  // Function to fetch top 10 cryptocurrencies from CoinGecko API
  const fetchCryptoData = async () => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true'
      );
      const data = await response.json();
      setCryptoData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching crypto data:", error);
      setLoading(false);
    }
  };

  // Fetch crypto data on component mount
  useEffect(() => {
    fetchCryptoData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Decide how many items to display (5 or all 10)
  const visibleData = showAll ? cryptoData : cryptoData.slice(0, 5);

  return (
    <div className="crypto-market-table" data-aos="fade-up"> {/* Apply fade-up animation to the whole table */}
      <h1 data-aos="fade-right">Market Update</h1> {/* Apply fade-right animation to heading */}

      <table className="crypto-table" data-aos="fade-in" data-aos-delay="200">
        <thead>
          <tr>
            <th>List</th>
            <th>Name</th>
            <th>Last<br /> Price</th>
            <th>Last <br />24h Update</th>
            <th>Market <br />Cap</th>
            <th>Last <br />7 Days</th>
          </tr>
        </thead>
        <tbody>
          {visibleData.map((coin, index) => (
            <tr key={coin.id} data-aos="fade-up" data-aos-delay={index * 100}> {/* Apply fade-up animation with delay for each row */}
              <td>{index + 1}</td>
              <td className="crypto-name-cell">
                <img src={coin.image} alt={coin.name} className="crypto-icon" />
                {coin.name} ({coin.symbol.toUpperCase()})
              </td>
              <td>${coin.current_price.toLocaleString()}</td>
              <td className={coin.price_change_percentage_24h > 0 ? 'positive' : 'negative'}>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td>${coin.market_cap.toLocaleString()}</td>
              <td>
                <Sparklines data={coin.sparkline_in_7d.price} limit={10} width={100} height={30}>
                  <SparklinesLine color={coin.price_change_percentage_24h > 0 ? "#00e676" : "#ff5252"} />
                </Sparklines>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Toggle between View More and View Less */}
      <div className="view-more-container" data-aos="fade-up">
        <button
          onClick={() => setShowAll(!showAll)}
          className="view-more-btn"
          // Apply zoom-in effect to the button
        >
          {showAll ? 'View Less' : 'View All'}
        </button>
      </div>
    </div>
  );
};

export default CryptoMarket;
