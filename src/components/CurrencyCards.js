import React from 'react'
import bitcoinExchange from '@/lib/bitcoinExchange'

const CurrencyCards = () => {
  const [exchangeRates, loading] = bitcoinExchange()

  return (<>
    {loading? ( <>
      <p>loading</p> 
     </> ) : ( <>
    <div className="flex flex-wrap justify-center max-w-[1200px]">
      {Object.entries(exchangeRates).length > 0 &&
        Object.entries(exchangeRates).map(([pair, rate]) => (
          <div
            key={pair}
            className="sm:w-80 sm:h-36 w-full h-36 bg-gray-200 m-2 p-2 rounded"
          >
            <div className="h-1/3 font-bold text-2xl text-black">{pair}</div>
            <div className="h-1/3 font-bold text-xl text-black">{`1 BTC = ${Number(
              rate
            ).toFixed(2)}`}</div>
            <div className="h-1/3 font-bold text-lg text-green-500">
              + 0.00 (00,000) all time
            </div>
          </div>
        ))}
    </div>
    </>
    )}
  </>)
}

export default CurrencyCards