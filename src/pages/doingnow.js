import React from 'react'
// import Footer from "../components/Layout/Footer"


const timestamp = Date.now(); // get the current timestamp
const formattedDate = new Date(timestamp).toLocaleString();

const Doingnow = () => {
  return (

<div className="max-w-screen p-4 pt-12 flex-col items-center relative lg:m-10 aboutMe">
  <div className="flex flex-col text-center mx-auto w-full md:w-1/2 xl:w-1/3 mb-24">

  </div>
    <div className="mx-auto w-full md:w-1/2 xl:w-1/3 items-left mb-24">
    <h1 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-800">
      What I am doing now
    </h1>
    <div>
      <ul class="leading-8 mt-1 text-left list-disc text-slate-800">
        <li class="my-4">
          Currently reside at Kraken Digital Asset Exchange. My team works to ensure we remain the most client-centric exchange in the world
        </li>
        <li class="my-4">
          Satisfying my passion for finánce and preparing to obtain the CFA certification
        </li>
        <li class="my-4">
          Developing a functional and educational bitcoin product line for the younger generations. More to come on this soon.
        </li>
        <li class="my-4">
          Refining my data/database skillset and exploring data visualization software and tools
        </li>
        <li class="my-4">
          Spending time around others who are building on Bitcoin and Lightning
        </li>
        <li class="my-4">
          Aspiring software dev
        </li>
        <li class="my-4">
          Research (bitcoin, finance, economics-the Austrian kind)
        </li>
        <li class="my-4">
          Reading (send me recommendations)
        </li>
      </ul>
    </div>
  </div>

  <div class="flex justify-evenly items-center mb-24">
    <p class="flex sm:w-1/3 items-center mb-12 text-slate-700 text-sm">Last Updated {formattedDate}</p>
  </div>
</div>
  );
};

export default Doingnow