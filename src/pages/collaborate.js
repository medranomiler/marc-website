import React from 'react'
import keeprunning from "../images/keeprunning.png"
import Image from "next/image"

const Collaborate = () => {
  return (
    <div className="max-w-screen p-4 py-36 flex flex-col items-center relative lg:mt-24 lg:ml-16 lg:mr-16 aboutMe">
      <div className="flex flex-col items-center mx-auto w-full md:w-1/2 xl:w-1/3 mb-24">
          <h1 className="font-bold text-3xl sm:text-4xl mb-16 text-slate-700">
            Collaborate
          </h1>
          <p class="leading-8 text-slate-700 mb-18">
  The free and open sharing of ideas is one of the most valuable things we have in common and without it, we would not be here today. I value meaningful connections, building relationships and engaging in genuine discussion. I am always looking to expand my network, meet new people, and create lasting connections. If you would like to say hello, have something to share, or collaborate, feel free to find me on  
  <a href="https://www.linkedin.com/in/marcmckirahan/" class="underline-link text-slate-950"> LinkedIn</a>, 
  <a href="https://t.me/marcmckirahan" class="underline-link text-slate-950"> Telegram</a>, 
  or 
  <a href="mailto:marcmckirahan@gmail.com" class="underline-link text-slate-950"> Email</a>.
</p>
<div className="mx-auto w-full flex flex-col items-center">
            <Image src={keeprunning} />
            <figcaption className="font-light italic text-slate-600">...keep running</figcaption>
  </div>
        <div className="mb-4">
        </div>
        </div>
      </div>
  )
}

export default Collaborate