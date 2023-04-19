import React from 'react'

const CurrencyCards = () => {
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
    <div className="flex flex-wrap justify-center max-w-[1200px]">
    {pairs.map((pair, index) => {
      return (
        <div key={index} className="sm:w-80 sm:h-36 w-full h-36 bg-gray-200 m-2 p-2 rounded">

          <div className="h-1/3 font-bold text-2xl text-black">
            {pair}
          </div>
          <div className="h-1/3 font-bold text-xl text-black">
            1 bitcoin = 1 bitcoin
          </div>
          <div className="h-1/3 font-bold text-lg text-green-500">
            + 0.00 (00,000) all time
          </div>
        </div>
      )
    })}
  </div>
  )
}

export default CurrencyCards