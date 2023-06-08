import React from 'react'
import CurrencyCards from "../components/CurrencyCards"
// import BTCExchangeRates from '@/components/BTCExchange'

const Btcpairs = () => {


  return (
    <div className="max-w-screen py-36 p-4 flex flex-col items-center lg:mt-24 lg:ml-16 lg:mr-16 aboutMe">
      <div className="max-w-[800px] h-12 flex space-x-4 py-3 px-6 mb-4 text-slate-700">
        <p>1D</p>
        <p>5D</p>
        <p>1M</p>
        <p>6M</p>
        <p>YTD</p>
        <p>1Y</p>
        <p>5Y</p>
        <p>Max</p>
        </div> 
      <CurrencyCards />
      {/* <div className="max-w-[800px] h-12 flex space-x-4 py-3 px-6 mb-4 text-black">
        <p>1D</p>
        <p>5D</p>
        <p>1M</p>
        <p>6M</p>
        <p>YTD</p>
        <p>1Y</p>
        <p>5Y</p>
        <p>Max</p>
        </div> 

    <CurrencyCards /> */}
    </div>
  )
}

export default Btcpairs