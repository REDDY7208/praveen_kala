import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './userDashboard.css';
import UserMindMap from './UserMindMap';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import MarketsSection from './MarketSection';
import BTCConverter from './BTCConverter';

const UserDashboard = () => {
  const [cryptoData, setCryptoData] = useState({
    bitcoin: {},
    ethereum: {},
    tether: {},
    marketData: [],
  });
  const [activeSection, setActiveSection] = useState('dashboard');
  const [networkData, setNetworkData] = useState([]);
  const [btcToInr, setBtcToInr] = useState(0);
  const [btcAmount, setBtcAmount] = useState(0);
  const [inrAmount, setInrAmount] = useState(0);
  const [conversionType, setConversionType] = useState('btcToInr');
  const [conversionResult, setConversionResult] = useState(0);

  // Fetch cryptocurrency data
  const fetchCryptoData = async () => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
        params: {
          ids: 'bitcoin,ethereum,tether',
          vs_currencies: 'usd,inr',
          include_24hr_change: 'true',
        },
      });

      const marketResponse = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 10, // Fetch top 10 currencies
          page: 1,
          sparkline: false,
        },
      });

      setCryptoData({
        bitcoin: response.data.bitcoin,
        ethereum: response.data.ethereum,
        tether: response.data.tether,
        marketData: marketResponse.data,
      });

      // Set BTC to INR conversion rate
      setBtcToInr(response.data.bitcoin.inr);
    } catch (error) {
      console.error('Error fetching cryptocurrency data', error);
    }
  };

  // Fetch network data
  const fetchNetworkData = () => {
    const mockData = [
      {
        name: 'User 1',
        children: [
          {
            name: 'User 1.1',
            children: [
              { name: 'User 1.1.1' },
              { name: 'User 1.1.2' },
            ],
          },
          { name: 'User 1.2' },
        ],
      },
      {
        name: 'User 2',
        children: [{ name: 'User 2.1' }, { name: 'User 2.2' }],
      },
    ];

    setNetworkData(mockData);
  };

  // Handle section changes
  const handleSectionChange = (section) => {
    setActiveSection(section);
    if (section === 'dashboard') {
      fetchCryptoData();
    } else if (section === 'network') {
      fetchNetworkData();
    }
  };

  // Convert BTC to INR or INR to BTC
  const handleConversion = () => {
    if (conversionType === 'btcToInr') {
      setConversionResult((btcAmount * btcToInr).toFixed(2));
    } else {
      setConversionResult((inrAmount / btcToInr).toFixed(6)); // Convert INR to BTC
    }
  };
  

  // Highcharts options for NIFTY graph simulation
  const highChartOptions = {
    title: {
      text: 'Your Earnings',
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    series: [
      {
        name: 'BTCUSDT',
        data: [12100, 12500, 12650, 13000, 13500, 13750, 14000, 14300, 14500, 14800, 15000, 15250],
      },
    ],
    chart: {
      type: 'line',
    },
  };

  return (
    <div className="userdashboard-container">
    <div className="userdashboard-sidebar">
      <div className="userdashboard-logo">USER DASHBOARD</div>
      <ul className="userdashboard-menu">

          <li><button className={activeSection === 'dashboard' ? 'active' : ''} onClick={() => handleSectionChange('dashboard')}> Dashboard Overview</button></li>
          <li><button className={activeSection === 'wallet' ? 'active' : ''} onClick={() => handleSectionChange('wallet')}>Wallet Details</button></li>
          <li><button className={activeSection === 'network' ? 'active' : ''} onClick={() => handleSectionChange('network')}>Network</button></li>
          <li><button className={activeSection === 'reports' ? 'active' : ''} onClick={() => handleSectionChange('reports')}>Reports PDF</button></li>
          <li><button>Log Out</button></li>
        </ul>
      </div>

      <div className="userdashboard-main-content">
    <header className="userdashboard-header">
      <span className="userdashboard-user-profile">User Profile</span>
    </header>
      

        {activeSection === 'dashboard' && (
          <>
             <div className="userdashboard-overview">
           
              
              <div className="userdashboard-overview-item">
                <h4>Bitcoin (BTC)</h4>
                <p>${cryptoData.bitcoin.usd}</p>
                <p className={`profit-loss ${cryptoData.bitcoin.usd_24h_change >= 0 ? 'positive' : 'negative'}`}>
                  PNL Daily: {cryptoData.bitcoin.usd_24h_change?.toFixed(2)}%
                </p>
              </div>
              <div className="userdashboard-overview-item">
                <h4>Ethereum (ETH)</h4>
                <p>${cryptoData.ethereum.usd}</p>
                <p className={`profit-loss ${cryptoData.ethereum.usd_24h_change >= 0 ? 'positive' : 'negative'}`}>
                  PNL Daily: {cryptoData.ethereum.usd_24h_change?.toFixed(2)}%
                </p>
              </div>
              <div className="userdashboard-overview-item">
                <h4>Tether (USDT)</h4>
                <p>${cryptoData.tether.usd}</p>
                <p className={`profit-loss ${cryptoData.tether.usd_24h_change >= 0 ? 'positive' : 'negative'}`}>
                  PNL Daily: {cryptoData.tether.usd_24h_change?.toFixed(2)}%
                </p>
              </div>
            </div>

            <div className="dashboard-main">
            <section className="userdashboard-highchart-section">
                <h3>TOTAL EARNINGS</h3>
                <HighchartsReact highcharts={Highcharts} options={highChartOptions} />
              </section>

              {/* <section className="userdashboard-markets-section">
                <h3>Markets (Top 10)</h3>
                <div className="auto-scroll">
                  <ul>
                    {cryptoData.marketData.map((coin) => (
                      <li key={coin.id}>
                        {coin.name} - ${coin.current_price} 
                        <span className={coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}>
                          {coin.price_change_percentage_24h?.toFixed(2)}%
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section> */}
              <MarketsSection cryptoData={cryptoData}/>

            </div>

            {/* BTC to INR Conversion Section */}
            {/* <section className="userdashboard-btc-conversion">
              <h3>BTC to INR Converter</h3>
              <div className="userdashboard-conversion-type">
                <button onClick={() => setConversionType('btcToInr')} className={conversionType === 'btcToInr' ? 'active' : ''}>BTC to INR</button>
                <button onClick={() => setConversionType('inrToBtc')} className={conversionType === 'inrToBtc' ? 'active' : ''}>INR to BTC</button>
              </div>
              <div className="userdashboard-conversion-form">
                {conversionType === 'btcToInr' ? (
                  <>
                    <label htmlFor="btcAmount">Enter BTC Amount:</label>
                    <input
                      type="number"
                      id="btcAmount"
                      value={btcAmount}
                      onChange={(e) => setBtcAmount(e.target.value)}
                    />
                  </>
                ) : (
                  <>
                    <label htmlFor="inrAmount">Enter INR Amount:</label>
                    <input
                      type="number"
                      id="inrAmount"
                      value={inrAmount}
                      onChange={(e) => setInrAmount(e.target.value)}
                    />
                  </>
                )}
                <button onClick={handleConversion}>Convert</button>
                <h4>Conversion Result: {conversionResult}</h4>
              </div>
            </section> */}
            <BTCConverter/>
          </>
        )}

        {activeSection === 'network' && (
          <section className="network-section">
            <h3>User Network</h3>
            <UserMindMap data={networkData} />
          </section>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
