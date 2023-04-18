import React from 'react'

const Btcpairs = () => {

  const pairs = [
    "U.S. Dollar (USD)",
    "Euro (EUR)",
    "Japanese Yen (JPY)",
    "Lebanese Pound (LBP)",
    "Chinese Yuan (CNY)",
    "Turkish Lira (TRY)",
    "Russian Ruble (RUB)",
    "Russian Ruble (RUB)",
    "Russian Ruble (RUB)",

  ]

  return (
    <div className="max-w-screen py-36 p-4 flex flex-col items-center">

      <div className="max-w-[800px] bg-gray-800 h-12 flex space-x-4 py-3 px-6 mb-4 text-white">
        <p>1D</p>
        <p>5D</p>
        <p>1M</p>
        <p>6M</p>
        <p>YTD</p>
        <p>1Y</p>
        <p>5Y</p>
        <p>Max</p>
        </div> 

      <div className="flex flex-wrap justify-center max-w-[1200px]">
        {pairs.map((pair, index) => {
          return (
            <div key={index} className="sm:w-80 sm:h-36 w-full h-36 bg-gray-800 m-2 p-2">

              <div className="h-1/3 font-bold text-2xl text-white">
                {pair}
              </div>
              <div className="h-1/3 font-bold text-xl text-white">
                1 bitcoin = 1 bitcoin
              </div>
              <div className="h-1/3 font-bold text-lg text-green-500">
                + 0.00 (00,000) all time
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Btcpairs