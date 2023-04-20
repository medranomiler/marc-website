import React, { useState, useEffect } from 'react';

const bitcoinExchange = () => {
  const [loading, setLoading] = useState(true)
  const [exchangeRates, setExchangeRates] = useState({});
  
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-CoinAPI-Key': process.env.NEXT_PUBLIC_COIN_API
      }
    };

    const btcPairs = ['USD', 'TRY', 'JPY', 'CNY', 'RUB', 'LBP', 'EUR', 'GBP', 'KRW'];
    const requests = btcPairs.map(async (pair) => {
      const url = `https://rest.coinapi.io/v1/exchangerate/BTC/${pair}`;
      const response = await fetch(url, options);
      return await response.json();
      
    });

    Promise.all(requests).then((responses) => {
      console.log(responses)
      const rates = {};
      btcPairs.forEach((pair, i) => {
        rates[pair] = responses[i].rate;
      });
      setLoading(false)
      setExchangeRates(rates);
    });

  }, []);
  return [exchangeRates, loading]
}

export default bitcoinExchange
