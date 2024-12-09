import React from 'react'
import costaricasurf from "../images/costaricasurf.jpeg"
import beachwalk from "../images/beachwalk.jpg"
import suits from "../images/suits.jpg"
import Image from "next/image"


function AboutMe() {
    return (
        <div className="min-h-screen p-4 sm:p-8 sm:py-36 py-36 flex flex-col items-left z-99">

            <div className="mx-auto w-full md:w-1/2 xl:w-1/3 items-left mb-24">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-700">
                    About
                </h1>
                <p className="leading-8 text-slate-700">
                I’m a proud Texan, raised with a love for freedom, truth, faith, and beef. Growing up, I spent most of my time outdoors, and not much has changed today. Even as an adult, I find any excuse to be outside—it’s my way of staying grounded and connected with a few of the things that are still natural and real.                 </p>
            </div>
            <div className="mx-auto w-full md:w-1/2 xl:w-1/3 mb-24">
                <h1 className="text-2xl md:text-3xl font-bold mb-12 text-center text-slate-700">
                    The TL;DR
                </h1>
                <p className="leading-8 text-slate-700">
                My career has been defined by driving innovation in financial services, building businesses at the forefront of technology, and delivering exceptional client outcomes. With a deep passion for financial services, leadership, sales, and operational strategy, I have successfully navigated complexities of the fintech sector, achieving measurable impact and growth while collaborating with global industry leaders.                <br />
                <br />
                <p className="leading-8 text-slate-700">
                I am preparing for a future where Bitcoin transitions from being one of the smallest asset classes today to becoming one of the largest in the world over the coming decades. I enjoy guiding others through the reasoning behind this transformation, the challenges and inevitabilities we may encounter, and the far-reaching implications. My interests also include markets, valuations, and research, and I remain committed to continuously expanding my knowledge and expertise.                </p>
            </div>

            <div className="mx-auto w-full md:w-1/2 xl:w-1/3 mb-24 flex flex-col items-center">
                <figure className="p-8 bg-slate-200 mb-4 z-99">
                    <Image src={suits}
                        className="shadow-slate-800 shadow-lg" />
                </figure>
                <figcaption className="font-light italic text-slate-600">..and this is me in a suit</figcaption>
            </div>
            <div className="mx-auto w-full md:w-1/2 xl:w-1/3">
                <h1 className="text-2xl md:text-3xl font-bold mb-12 text-center text-slate-700">
                    Extended Bio...
                </h1>
                <p className="leading-8 text-slate-700 mb-24">
                    Several years back, as I sat in front of a few thousand coworkers during a live all-hands meeting, I was asked the question: “So Marc, what's your greatest weakness?”
                    <br />
                    <br />
                    The room fell silent and as I mustered up the courage to confess, I leaned in wearing my finest deadpan expression (IYKYK) and responded with, ‘talking about myself’. Cue the collective sigh of relief from the crowd, that my long-held oversharing tendencies were finally out in the open.
                    <br />
                    <br />
                    I often find more interest in the things that aren't said, rather than the things that are. Consistent with my strive to influence, and be influenced by actions, rather than words. I have always been more of a show you, not tell you kinda guy. So here we are, sitting at the black-hole of my ‘about me’ bio and yet another attempt at weaving an intriguing narrative about my identity.
                    <br />
                    <br />
                    The end.
                </p>
            </div>
            <div className="mx-auto w-full md:w-1/2 xl:w-1/3 mb-24 flex flex-col items-center">
                <figure className="p-8 bg-slate-200 mb-4 z-99">
                    <Image src={costaricasurf}
                        className="shadow-slate-800 shadow-lg" />
                </figure>
                <figcaption className="font-light italic text-slate-600">playa avellanas, costa rica, circa 2022</figcaption>
            </div>

            <div className="mx-auto w-full md:w-1/2 xl:w-1/3">
                <h1 className="text-2xl md:text-3xl font-bold mb-12 text-center text-slate-700">
                    Today
                </h1>
                <p className="leading-8 text-slate-700 mb-24">
                    I work for Kraken Exchange, one of the largest bitcoin exchanges in the world. Founded in 2011, our platform has garnered recognition for its unwavering commitment to user security, privacy, and upholding the fundamental cypherpunk libertarian principles that lie at the core of bitcoin's ideology. With support in over 190 countries, my goal is to provide everyone in the world simple and fast access to bitcoin.
                </p>
            </div>
            <div className="mx-auto w-full md:w-1/2 xl:w-1/3">
                <h1 className="text-2xl md:text-3xl font-bold mb-12 text-center text-slate-700">
                    Why Am I Here
                </h1>
                <p className="leading-8 text-slate-700 mb-24">
                    In much the same way the internet revolutionized the transfer, storage, and communication of data, bitcoin is revolutionizing the transfer, storage, and communication of value. There is nothing grander or more captivating going on in the world today, yet most seem to remain oblivious or perplexed.
                    <br />
                    <br />
                    I am here to help those once they are curious enough to ask the questions.
                    <br />
                    <br />
                </p>

            </div>
            <div className="mx-auto w-full md:w-1/2 xl:w-1/3 mb-24">
                <h1 className="text-2xl md:text-3xl font-bold mb-12 text-center text-slate-700">
                    What's Next
                </h1>
                <p className="leading-8 text-slate-700">
                    <br />
                    Remain unhurried.
                    <br />
                    Stay present.
                    <br />
                    Be patient.
                </p>
            </div>
            <div className="mx-auto w-full md:w-1/2 xl:w-1/3 mb-24 flex flex-col items-center">
                <figure className="p-8 bg-slate-200 mb-3 z-99 mt-10">
                    <Image src={beachwalk}
                        className="shadow-slate-800 shadow-lg" />
                </figure>
                <figcaption className="font-light italic text-slate-600">some beach, somewhere</figcaption>
            </div>
        </div>
    )
}

export default AboutMe