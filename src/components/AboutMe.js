import React from 'react'
import costaricasurf from "../images/costaricasurf.jpeg"
import beachwalk from "../images/beachwalk.jpg"
import suits from "../images/suits.jpg"
import Image from "next/image"


function AboutMe() {
    const containerClasses = "mx-auto w-full md:w-1/2 xl:w-1/3 mb-24";

    return (
        <div className="min-h-screen p-4 sm:p-8 sm:py-36 py-36 flex flex-col items-center">
            <section className={containerClasses}>
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-700">
                    About
                </h1>
                <p className="leading-8 text-slate-700">
                    I’m a proud Texan, raised with a love for freedom, truth, faith, and beef. Growing up, I spent most of my time outdoors, and not much has changed today. Even as an adult, I find any excuse to be outside—it’s my way of staying grounded and connected with a few of the things that are still natural and real.
                </p>
            </section>
            <section className={containerClasses}>
                <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-slate-700">
                    The TL;DR
                </h2>
                <p className="leading-8 text-slate-700">
                    My career has been defined by driving innovation in financial services, building businesses at the forefront of technology, and delivering exceptional client outcomes. With a deep passion for financial services, leadership, sales, and operational strategy, I have successfully navigated complexities of the fintech sector, achieving measurable impact and growth while collaborating with global industry leaders.
                </p>
            </section>
            <section className={`${containerClasses} flex flex-col items-center`}>
                <figure className="p-8 bg-slate-200 mb-4">
                    <Image src={suits} alt="Me wearing a suit" className="shadow-slate-800 shadow-lg" />
                </figure>
                <figcaption className="font-light italic text-slate-600">...and this is me in a suit</figcaption>
            </section>
            {/* Other sections follow a similar pattern */}
        </div>
    );
}

export default AboutMe;
