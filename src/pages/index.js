import Head from 'next/head'
import { Inter } from 'next/font/google'
import homepageimage from "../images/homepageimage.jpeg"
import Image from "next/image"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<div class="max-w-screen p-4 pt-12 flex-col items-center relative lg:m-10 aboutMe">
  <div class="flex flex-col text-center mx-auto w-full md:w-1/2 xl:w-1/3 mb-18">

    <h1 class="text-center font-bold text-3xl md:text-4xl mt-24 mb-1 text-slate-800">
    Marc McKirahan
    </h1>

    <p class="leading-8 mt-1 text-sm text-center text-slate-800">
    &#8226; Perpetual Student &#8226; Bitcoin Education & Consultant &#8226;
   </p>

    <p class="leading-8 mt-12 text-left text-slate-800">
    I like doing things. Things that mostly meet at the intersection of bitcoin, technology, economics, and finance. With a deep-rooted passion for these fields, I enjoy exploring their dynamic relationships and uncovering new insights. As someone who naturally leans against the grain, I possess a unique lens through which I analyze and interpret evolving landscapes and the transformations Bitcoin has on society.
    </p>
  
    <p class="leading-8 mt-4 mb-6 text-left text-slate-800">
    Peek around and lets connect.
  </p>
</div>

  <div className="mx-auto w-full md:w-1/2 xl:w-1/3 mb-24 flex flex-col items-center">
  <figure className="p-8 bg-slate-200 mb-3 z-99 mt-10">
            <Image src={homepageimage} />
            </figure>
            <figcaption className="font-light italic text-slate-700">..and this is me holding a staff</figcaption>
  </div>
  </div>
 )
}