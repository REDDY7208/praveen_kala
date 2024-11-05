import React, { useState } from 'react';
import './btcConverter.css';

const BTCConverter = () => {
  const [conversionType, setConversionType] = useState('btcToInr');
  const [btcAmount, setBtcAmount] = useState('');
  const [inrAmount, setInrAmount] = useState('');
  const [conversionResult, setConversionResult] = useState('');

  // Assume these are example conversion rates
  const BTC_TO_INR_RATE = 2000000; // 1 BTC = 2,000,000 INR (example rate)
  const INR_TO_BTC_RATE = 1 / BTC_TO_INR_RATE; // Conversion for INR to BTC

  const handleConversion = () => {
    if (conversionType === 'btcToInr') {
      const result = btcAmount * BTC_TO_INR_RATE;
      setConversionResult(`${result.toFixed(2)} INR`);
    } else {
      const result = inrAmount * INR_TO_BTC_RATE;
      setConversionResult(`${result.toFixed(8)} BTC`);
    }
  };

  return (
    <section className="userdashboard-converter">
      <h3>Convert</h3>
      <div className="userdashboard-conversion-type">
        <button
          onClick={() => setConversionType('btcToInr')}
          className={conversionType === 'btcToInr' ? 'active' : ''}
        >
          BTC to INR
        </button>
        <button
          onClick={() => setConversionType('inrToBtc')}
          className={conversionType === 'inrToBtc' ? 'active' : ''}
        >
          INR to BTC
        </button>
      </div>
      <div className="userdashboard-conversion-form">
        {conversionType === 'btcToInr' ? (
          <>
            <input
              type="number"
              placeholder="Enter BTC Amount"
              value={btcAmount}
              onChange={(e) => setBtcAmount(e.target.value)}
            />
            <span className="currency">BTC</span>
          </>
        ) : (
          <>
            <input
              type="number"
              placeholder="Enter INR Amount"
              value={inrAmount}
              onChange={(e) => setInrAmount(e.target.value)}
            />
            <span className="currency">INR</span>
          </>
        )}
      </div>
      <button onClick={handleConversion} className="convert-button">Convert Now</button>
      <h4>Conversion Result: {conversionResult}</h4>
      <p className="conversion-note">The ultimate price and output are determined by the amount of tokens in the pool at the time of your swap.</p>
    </section>
  );
};

export default BTCConverter;
