import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './fotiaCryptoApp.css';
import { FaHome, FaChartLine, FaWallet, FaCog } from 'react-icons/fa'; // Importing icons
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import googleplaystore from '../assets/playstore.png';
import applestore from '../assets/applestore1.png';
import { FaEthereum ,FaBitcoin} from 'react-icons/fa'; // Importing Ethereum icon

function FotiaCryptoApp() 
{
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/SignUp'); // Adjust this route according to your actual signup page route
  };

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS animations
      }, []);
  return (
    <div className="crypto-app-container">
      {/* Left-side Content */}
      <div className="crypto-left-content" data-aos="fade-right">
      <h1 data-aos="fade-up"> Introducing the FOTIA App <br></br>Your all-in-one solution for effortless Crypto Management!</h1>
      <p data-aos="fade-up" data-aos-delay="100">Manage your crypto portfolio with ease.</p>
      <p data-aos="fade-up" data-aos-delay="200">Track live market statistics, deposit or withdraw your cryptocurrencies.</p>
      
      <h2 data-aos="fade-up" data-aos-delay="300">Explore Fotia with Ease Way !</h2>
      <p data-aos="fade-up" data-aos-delay="400">We provide a simple and user-friendly platform to manage your crypto investments. Whether you're a beginner or an expert, Fotia makes it easy to explore and handle your crypto assets.</p>
      <p data-aos="fade-up" data-aos-delay="500">Our intuitive interface and powerful features ensure you can monitor your portfolio, perform transactions, and stay updated with the latest market trends—all in one place.</p>

      <h2 data-aos="fade-up" data-aos-delay="600">Available on iOS and Android</h2>
      <p data-aos="fade-up" data-aos-delay="700">Fotia is available on both iOS and Android platforms. You can download our app from:</p>

      {/* App Store buttons */}
      <div className='app-store-buttons-container' >
      <div className="app-store-buttons" data-aos="fade-up"> 
        <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
          <img src={googleplaystore}  alt="Get it on Google Play" /><br></br>
        
        GET IT ON Google play
        </a>
        </div>
        <div className="app-store-buttons" data-aos="fade-up">  
        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
          <img src={applestore} alt="Download on the App Store" /><br></br>
        
        Download on the App Store
        </a>
      </div>
      </div>
     

      {/* Sign Up button */}
      <div className="signup-button" data-aos="fade-up">
      <button onClick={handleSignupClick}>SIGN UP</button>
      </div>
      </div>



      {/* Right-side Crypto Dashboard */}
      <div className="crypto-dashboard" data-aos="fade-up">
        {/* Header Section */}
        <div className="crypto-header">
          <h3 style={{textAlign:'center'}}> Welcome to Fotia</h3>
          <h1 className='person-name'>Alen</h1>
          <p className='pers-check'>Balance</p>
          <h2>USD 13,220.40 <span className="crypto-green">+7.65%</span></h2>
        </div>

        {/* Main Cards */}
        <div className="crypto-cards-container">
          <div className="crypto-card">
            <div className="crypto-info">
              <h4>Bitcoin BTC</h4>
            
            </div>
            {/* Placeholder for the trading graph */}
            <div className="crypto-chart crypto-purple-chart">
            <FaBitcoin className='icon' size={30} color="#f7931a" /> 
            </div>
            <p className="crypto-price">$6780.20 <span className='crypto-green'>+11.75</span></p>
           
          </div>
          <div className="crypto-card">
            <div className="crypto-info">
              <h4>Ethereum ETH</h4>
             
            </div>
            {/* Placeholder for the trading graph */}
            <div className="crypto-chart crypto-blue-chart">
            <FaEthereum className='icon'size={30} color="#627eea" />
            </div>
            <p className="crypto-price">$1478.10 <span className='crypto-green'> +9.10%</span></p>
          
          </div>
        </div>

        {/* Market Statistics Section */}
        <div className="crypto-market-section">
          <h3>Market Statistics</h3>
          <div className="crypto-market-item">
            <div className="crypto-market-crypto">
              <h4>  Bitcoin BTC</h4>
         
            </div>
            <p>USDC 99,284.01 <span className="crypto-green"><b>+8.63%</b></span></p>
          </div>

          <div className="crypto-market-item">
            <div className="crypto-market-crypto">
              <h4>Ethereum ETH</h4>
            
            </div>
            <p> USDC 24,933.56 <span className="crypto-green"><b>+3.21%</b></span></p>
          </div>

          <div className="crypto-market-item">
            <div className="crypto-market-crypto">
              <h4> Tether USDT</h4>
             
            </div>
            <p>USDC 1.00 <span className="crypto-green"><b>+0.2%</b></span></p>
          </div>
        </div>

      

        {/* Bottom Navigation with Icons */}
        <div className="crypto-bottom-nav">
          <button><FaHome /> </button>
          <button><FaWallet /> </button>
          <button><FaChartLine /> </button>
          <button><FaCog /> </button>
        </div>
      </div>
    </div>
  );
}

export default FotiaCryptoApp;
