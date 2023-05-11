import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface Cryptocurrency {
  name: string;
}

const CryptocurrencyDetails = () => {
  const [cryptocurrency, setCryptocurrency] = useState<Cryptocurrency | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then(res => {
        setCryptocurrency(res.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (cryptocurrency) {
    return (
      <div className="crypto">
        <h2>{cryptocurrency.name}</h2>
      </div>
    );
  }

  return null;
};

export default CryptocurrencyDetails;