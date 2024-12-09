import React from 'react'
// import Footer from "../components/Layout/Footer"


const timestamp = Date.now(); // get the current timestamp
const formattedDate = new Date(timestamp).toLocaleString();

const Doingnow = () => {
  return (

<div className="max-w-screen p-4 pt-12 flex-col items-center relative lg:mt-24 lg:ml-16 lg:mr-16 aboutMe">
  <div className="flex flex-col text-center mx-auto w-full md:w-1/2 xl:w-1/3 mb-24">

  </div>
    <div className="mx-auto w-full md:w-1/2 xl:w-1/3 items-left mb-24">
    <h1 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-700">
      What I am doing now
    </h1>
    <div>
      <ul class="leading-8 mt-1 text-left list-disc text-slate-700">
      <li className="my-4">
        Currently reside at{' '}
        <a 
          href="https://www.kraken.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 underline"
        >
          Kraken Digital Asset Exchange
        </a>. My team works to ensure we remain the most client-centric and secure exchange in the world.
      </li>
        <li class="my-4">
          Satisfying my passion for finánce and preparing to obtain the CFA certification
        </li>
        <li class="my-4">
          Developing a functional and educational bitcoin product line for the younger generations. More to come on this soon
        </li>
        <li class="my-4">
          Refining my data/database skillset and exploring data visualization software and tools
        </li>
        <li class="my-4">
          Aspiring software dev
        </li>
        <li class="my-4">
          Research & Reading
        </li>
      </ul>
    </div>
  </div>

  <div class="flex justify-center items-center mb-24">
    <p class="flex text-slate-600 text-sm text-center mb-24">Last Updated {formattedDate}</p>
  </div>
</div>
  );
};

export default Doingnow