import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CryptocurrencyList = () => {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
      .then(res => {
        setCryptocurrencies(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="crypto-container">
      {cryptocurrencies.map((crypto: any) => (
        <div key={crypto.id} className="crypto">
          <Link to={`/${crypto.id}`}>
            <h2>{crypto.name}</h2>
          </Link>
          <p>Current Price: ${crypto.current_price}</p>
          <p>24h Change: {crypto.price_change_percentage_24h}%</p>
        </div>
      ))}
    </div>
  );
};

export default CryptocurrencyList;
