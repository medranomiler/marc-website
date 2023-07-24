import React from 'react'
import costaricasurf from "../images/costaricasurf.jpeg"
import beachwalk from "../images/beachwalk.jpg"
import Image from "next/image"

const AboutMe = () => {
  return (
      <div className="min-h-screen p-4 sm:p-8 sm:py-36 py-36 flex flex-col items-left z-99">

        <div className="mx-auto w-full md:w-1/2 xl:w-1/3 items-left mb-24">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-700">
                About
            </h1>
            <p className="leading-8 text-slate-700">
            As a born and raised Texan, I love freedom, beef, and the word y'all. Growing up, the things that interested me most were typically outside and in the sun. Despite being a “grown up” today, I still spend every chance I get, outside and in the sun.            
            </p>
        </div>
        <div className="mx-auto w-full md:w-1/2 xl:w-1/3 mb-24">
            <h1 className="text-2xl md:text-3xl font-bold mb-12 text-center text-slate-700">
            The TL;DR
            </h1>
            <p className="leading-8 text-slate-700">
            The bulk of my career has been spent building businesses on the bleeding edge of technology, delighting clients, and learning from brilliant minds spanning the globe. Background predominately in leadership, management, and operations within the financial services & fintech industry. I focus my energy exclusively on things I believe in. I dedicate nearly all my time to advancing Bitcoin - the separation of money and state.
            </p>
        </div>

        <div className="mx-auto w-full md:w-1/2 xl:w-1/3 mb-24 flex flex-col items-center">
            <figure className="p-8 bg-slate-200 mb-4 z-99">
                <img src="https://media.licdn.com/dms/image/C4E03AQGPRZA9m18lDA/profile-displayphoto-shrink_800_800/0/1602986996229?e=1693440000&v=beta&t=S_i4aKiVbnhxvSDoo2yh7KET3dnzCfpMOVJn11AH0hI" 
                className="shadow-slate-800 shadow-lg"/>
            </figure>
            <figcaption className="font-light italic text-slate-600">..and this is me in a suit</figcaption>
        </div>

        <div className="mx-auto w-full md:w-1/2 xl:w-1/3 mb-24">
            <h1 className="text-2xl md:text-3xl font-bold mb-12 text-center text-slate-700">
            Extended Bio and Random Things
            </h1>
        <p className="leading-8 text-slate-700 mb-24">
        Several years back, as I sat in front of a few thousand coworkers during a live all-hands meeting, I was asked the question: “So Marc, what's your greatest weakness?”            
        <br />
        <br />
        The room fell silent and as I mustered up the courage to confess, I leaned in wearing my finest deadpan expression (IYKYK) and responded with, ‘talking about myself’. Cue the collective sigh of relief from the crowd, that my long-held oversharing tendencies were finally out in the open.        
        <br/>
        <br />
        I find more interest in the things that aren't said, rather than the things that are. Consistent with my strive to influence, and be influenced by actions, rather than words. I have always been more of a "let me show you, not tell you" kinda guy. So here we are, sitting at the black-hole of my ‘about me’ bio and an attempt at weaving an intriguing narrative about my identity. 
        <br/>
        <br />   
        So lets start with a short story I've never shared...
        <br />   
        <br />   
        I would like to take you back to my kindergarten days as I eagerly awaited our end-of-year 'circus' performance, where every classmate would transform into a whimsical character. Now, a few months earlier when the teacher asked what role we wanted to play, most kids chose the daring acrobat, the strong man, or the charming magician. But not me. Oh no, I had my eyes set on a different prize: the mighty, majestic elephant. Many were intrigued with my choice but I didn’t dare share the true reason for my selection.
        <br />   
        <br />
        You see, the year before, as a wide-eyed observer, I witnessed the grand spectacle of the graduating kindergarten class' Circus. There, in all their glory, were the elephants, parading around in elaborate costumes that completely covered their body. In that moment, a genius plan formed in my mischievous mind. I knew exactly why I wanted to be the elephant—so no one, absolutely no one, could catch a glimpse of my identity. I didn’t understand why I wanted this, but I did understand that it was valuable to me. I was determined to carry out my secret mission, completely hidden behind that formaldehyde soaked elephant costume. 
        <br />   
        <br />
        Fast forward to a year later, I executed perfectly on my plan. The crowd marveled at the majestic sight of the elephants, completely unaware of the hidden purpose behind my choice. Behind the costume's mask, I grinned mischievously, reveling in the satisfying secrecy of my mission accomplished, keeping my identity concealed.
        <br />   
        <br />
        I have lived much of my life in this same way. I believe that in a world of captivating narratives and a kaleidoscope of perspectives, the unspoken stories are often the best. We live in a world driven by the relentless race to be heard. Maybe that's the new rat race. Deep value won't be found there, but in the things that aren't trying to be sold. The enigmatic paths are where real value is found and oftentimes the precipice of our most extraordinary discoveries. This is my nature, and one thing that drew me to <a href="https://bitcoin.org/bitcoin.pdf" class="underline-link text-slate-950"> Bitcoin </a> and <a href="https://en.bitcoin.it/wiki/Satoshi_Nakamoto" class="underline-link text-slate-950"> Satoshi Nakamoto</a>.        
        <br/>
        <br />
        As a bona fide 90s kid, South Texas near the Texas/Mexico border served as my playground for the first ten years of my life.  I was happiest on the beach, surfing, fishing, golfing, and building things but I found joy in many activities. 
        </p>

        <div className="mx-auto w-full mb-24 flex flex-col items-center">
            <figure className="p-8 bg-slate-200 mb-4 z-99">
                <Image src={costaricasurf} />
            </figure>
            <figcaption className="font-light italic text-slate-600">playa avellanas, costa rica, circa 2022</figcaption>
</div>
    <p className="leading-8 text-slate-700">
        My family moved to central Texas in the early 2000s. As I made it through the ranks over the school years, I enjoyed every minute of it. I didn’t particularly enjoy the actual “school” part, but the social setting and the experiences along the way were special times.  High school passed by in a blink and I packed my bags and headed down the road to College Station, TX where I attended Texas A&M University. It was here I discovered my interest in markets, finánce, entrepreneurship, and technology. Back then I wanted to be a trader on Wall Street. I spent most of my free time researching markets, exploring option strategies, and learning anything I could to gain an edge in the markets. 
        <br/>
        <br/>
        After graduating university, I pursued a career in finánce and technology. The tech startup lifestyle was me and where I’ve spent my time over the past decade. I would describe myself as the quintessential frugal minimalist, finding contentment in the simplicity of owning less and prioritizing financial prudence. I was the person who, over the years, perfected the art of couch surfing for extended periods, graciously relying on the hospitality of friends' couches. You know who you are, and I thank you.
        </p>
        </div>
        <div className="mx-auto w-full md:w-1/2 xl:w-1/3 mb-24">
            <h1 className="text-2xl md:text-3xl font-bold mb-12 text-center text-slate-700">
            Today
            </h1>
            <p className="leading-8 text-slate-700">
            I currently work for Kraken Exchange, one of the largest bitcoin exchanges in the world. Founded in 2011, our platform has garnered recognition for its unwavering commitment to user security, privacy, and upholding the fundamental cypherpunk libertarian principles that lie at the core of bitcoin's ideology. With support in over 190 countries, my goal is to provide everyone in the world access to bitcoin.
            </p>
        </div>
        <div className="mx-auto w-full md:w-1/2 xl:w-1/3 mb-24">
            <h1 className="text-2xl md:text-3xl font-bold mb-12 text-center text-slate-700">
            Why Am I Here            
            </h1>
            <p className="leading-8 text-slate-700">
            Rewinding back to that enchanting memory of my kindergarten circus, which I know you enjoyed dearly, I discovered the freedom to choose privacy. Regrettably, in today's world, we find ourselves amidst the erosion of monetary and property rights, and one of the many unfortunate outcomes of this is the deterioration of privacy. Bitcoin fixes this. 
            <br/>
            In much the same way the internet revolutionized the transfer, storage, and communication of data, bitcoin is revolutionizing the transfer, storage, and communication of value. There is nothing grander or more captivating going on in the world today, yet 99% seem to remain oblivious or perplexed. 
            <br/>
            That is why I am here.
            </p>

        </div>
        <div className="mx-auto w-full md:w-1/2 xl:w-1/3 mb-24">
            <h1 className="text-2xl md:text-3xl font-bold mb-12 text-center text-slate-700">
            What's Next
            </h1>
            <p className="leading-8 text-slate-700">
            Saddle up.
            </p>
            <div className="mx-auto w-full flex flex-col items-center">
  <figure className="p-8 bg-slate-200 mb-3 z-99 mt-10">
            <Image src={beachwalk} />            
            </figure>
            <figcaption className="font-light italic text-slate-600">some beach, somewhere</figcaption>
  </div>
  </div>
  </div>
  )
}

export default AboutMe