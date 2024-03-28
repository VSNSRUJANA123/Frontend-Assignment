import "./index.css";

import React, { useState, useEffect } from "react";
import BarGraph from "../BarGraph";
import CryptoCoins from "../CryptoCoins";
import MetaMask from "../MetaMask";

const Home = () => {
  const [failure, setFailure] = useState(false);
  const [populationData, setPopulationData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
      );
      const data = await response.json();
      if (response.ok) {
        setPopulationData(data);
      } else {
        setFailure(true);
      }
    };

    fetchData();
  }, []);

  const retry = () => {
    setFailure(false);
  };

  if (failure) {
    return (
      <div className="homeContainer">
        <h1>Oops! Something went Wrong</h1>
        <button className="trading-btn" onClick={retry}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="homeContainer">
      <div className="graphContainer">
        <h1>Census Bureau</h1>
        <p>
          The American Community Survey (ACS) is conducted by the US Census and
          sent to a portion of the population every year.
        </p>
        <BarGraph populationData={populationData.data} />
      </div>
      <div className="crypto-coins-container">
        <CryptoCoins />
        <MetaMask />
      </div>
    </div>
  );
};
export default Home;
