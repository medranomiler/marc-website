import React from 'react'
import Footer from "../components/Footer"
// import genesisBlock from "../../public/genesisColored.svg"

const timestamp = Date.now(); // get the current timestamp
const formattedDate = new Date(timestamp).toLocaleString();




const Doingnow = () => {
  return (
    <div className="max-w-screen py-36 p-4 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('../../public/genesisColored.svg')] opacity-[0.05] bg-image"/>
      <div className="flex flex-col items-center relative z-10">
        <div>
          <h1 className="font-bold text-3xl sm:text-4xl mb-16">
            What I am Doing Now
          </h1>
          <div>
            <ul className="list-disc text-xl sm:text-2xl p-4">
              <li className="my-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maxime, officiis.
              </li>
              <li className="my-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maxime, officiis.
              </li>
              <li className="my-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maxime, officiis.
              </li>
              <li className="my-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maxime, officiis.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center relative z-10">
        <div className="border-b-2 sm:w-1/4 w-1/2 my-16">
          <br />
        </div>
      </div>
      <div className="flex justify-evenly">
        {/* <p className="flex sm:w-2/5">Last Updated {formattedDate}</p> */}
      </div>
      <Footer />
      </div>
  );
};

export default Doingnow