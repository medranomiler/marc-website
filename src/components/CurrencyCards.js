import React from 'react'

const CurrencyCards = () => {
    const pairs = [
        "btc/usd",
        "btc/eur",
        "btc/jpy",
        "btc/lbp",
        "btc/cny",
        "btc/try",
        "btc/rub",
        "btc/rub",
        "btc/rub"

    ]

  return (
    <div className="flex flex-wrap">
        {pairs.map((pair, index) => {
            <div key={index} classname="w-96 h-96 rounded-lg bg-gray-300 border border-gray-400">
            {pair.name}
            </div>
        })}
    </div>
  )
}

export default CurrencyCards