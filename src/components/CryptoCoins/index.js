import "./index.css";
import React, { useState, useEffect } from "react";
import bitcoin from "./bitcoin.png";

const CryptoCoins = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [cryptonameanddesc, setCryptonameanddesc] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );
      const data = await response.json();
      if (response.ok) {
        const bitcoinName = {
          USD: data.bpi.USD.code,
          GBP: data.bpi.GBP.code,
          EUR: data.bpi.EUR.code,
        };
        const bitcoinDescription = {
          USD: data.bpi.USD.description,
          GBP: data.bpi.GBP.description,
          EUR: data.bpi.EUR.description,
        };
        const bitcoinSymbol = {
          USD: data.bpi.USD.symbol,
          GBP: data.bpi.GBP.symbol,
          EUR: data.bpi.EUR.symbol,
        };
        const bitcoinPrices = {
          USD: data.bpi.USD.rate_float,
          GBP: data.bpi.GBP.rate_float,
          EUR: data.bpi.EUR.rate_float,
        };
        setCryptonameanddesc({
          chartName: data.chartName,
          disclaimer: data.disclaimer,
        });
        setCryptoData({
          description: bitcoinDescription,
          symbol: bitcoinSymbol,
          code: bitcoinName,
          prices: bitcoinPrices,
        });
      }
    };

    fetchData();
  }, []);

  return (
    <div className="crypto-container">
      <h1>{cryptonameanddesc.chartName}</h1>
      <p>{cryptonameanddesc.disclaimer}</p>
      <div className="currency-container">
        {Object.keys(cryptoData.prices || {}).map((currency) => {
          return (
            <div className="crypto-card" key={currency}>
              <div className="currency-img-code">
                <img src={bitcoin} alt="bitcoin" />
                <h3>{currency}</h3>
              </div>
              <p>{cryptoData.description[currency]}</p>
              <p>
                Price:{cryptoData.prices[currency]}
                {currency}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CryptoCoins;

// const CryptoCoins = () => {
//   const [cryptoData, setCryptoData] = useState({});
//   // const

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(
//         "https://api.coindesk.com/v1/bpi/currentprice.json"
//       );
//       const data = await response.json();
//       if (response.ok) {
//         const usd = data.bpi.USD;
//         const usdData = {
//           code: usd.code,
//           symbol: usd.symbol,
//           rate: usd.rate,
//           description: usd.description,
//           rate_float: usd.rate_float,
//         };
//         const gbp = data.bpi.GBP;
//         const gbpData = {
//           code: gbp.code,
//           symbol: gbp.symbol,
//           rate: gbp.rate,
//           description: gbp.description,
//           rate_float: gbp.rate_float,
//         };
//         const eur = data.bpi.EUR;
//         const eurData = {
//           code: eur.code,
//           symbol: eur.symbol,
//           rate: eur.rate,
//           description: eur.description,
//           rate_float: eur.rate_float,
//         };
//         setCryptoData({ usdData, gbpData, eurData });
//       }
//     };
//     fetchData();
//   }, []);
//   // console.log(cryptoData.usdData.length);
//   return (
//     <div className="crypto-container">
//       <h1>Cryptocurrency Prices</h1>
//       {cryptoData.length !== 0 ? (
//         <div className="cards-container">
//           <div className="cards">
//             <h1>{cryptoData.eurData.code}</h1>
//             <p>{cryptoData.eurData.description}</p>
//           </div>
//         </div>
//       ) : (
//         "loading..."
//       )}
//     </div>
//   );
// };
// export default CryptoCoins;
