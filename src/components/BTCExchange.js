import React, { useState, useEffect } from 'react';




const BTCExchangeRates = () => {
  const [exchangeRates, setExchangeRates] = useState({});

  useEffect(() => {
    
    const fetchExchangeRates = async () => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.EXCHANGE_KEY,
          'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
        }
      };
      console.log(process.env.EXCHANGE_KEY)
      const btcPairs = ['USD', 'TRY', 'JPY','CNY', 'RUB', 'LBP', 'EUR', 'GBP', 'KRW'];
      const requests = btcPairs.map((pair) => {
        const url = `https://currency-exchange.p.rapidapi.com/exchange?from=BTC&to=${pair}&q=1.0`;
        return fetch(url, options).then((response) => response.json());
      });

      const responses = await Promise.all(requests);
      const rates = {};
      btcPairs.forEach((pair, i) => {
        rates[pair] = responses[i];
      });
      setExchangeRates(rates);
    };

    fetchExchangeRates();
  }, []);

  return (
    <div className="flex flex-wrap justify-center max-w-[1200px]">
      {Object.entries(exchangeRates).length > 0 && Object.entries(exchangeRates).map(([pair, rate]) => (
            <div key={pair} className="sm:w-80 sm:h-36 w-full h-36 bg-gray-200 m-2 p-2 rounded">

            <div className="h-1/3 font-bold text-2xl text-black">
            {pair}
            </div>
            <div className="h-1/3 font-bold text-xl text-black">
            {`1 BTC = ${Number(rate).toFixed(2)}`}
            </div>
            <div className="h-1/3 font-bold text-lg text-green-500">
            + 0.00 (00,000) all time
            </div>
        </div>
      ))}
    </div>
  );
};

export default BTCExchangeRates;
