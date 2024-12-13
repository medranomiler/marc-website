import Head from 'next/head'
import { Inter } from 'next/font/google'
import homepageimage from "../images/homepageimage.jpeg"
import Image from "next/image"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<div class="max-w-screen p-4 pt-12 flex-col items-center relative lg:mt-24 lg:ml-16 lg:mr-16 aboutMe">
  <div class="flex flex-col text-center mx-auto w-full md:w-1/2 xl:w-1/3 mb-18">

    <h1 class="text-left font-bold text-3xl md:text-4xl mt-24 mb-1 text-slate-700">
    Hi I'm Marc
    </h1>

    <p class="leading-8 mt-8 text-left text-slate-700">
    Perpetual Student  |  Bitcoin Markets  |  Building the Future of Money    </p>

    <p class="leading-8 mt-8 text-left text-slate-700">
    I like doing things that meet at the intersection of bitcoin, technology, economics, history, and finánce. With a deep-rooted passion for these fields, I enjoy exploring their dynamic relationships and uncovering new insights. As someone who naturally leans against the grain, I possess a unique lens through which I analyze and interpret evolving landscapes and the transformations Bitcoin has on society.

    </p>

<p class="leading-8 mt-8 text-left text-slate-700">
Peek around and connect.    
</p>

</div>
<div className="mx-auto w-full md:w-1/2 xl:w-1/3 mb-24 flex flex-col items-center">
                <figure className="p-8 bg-slate-200 mb-3 z-99 mt-10">
                <Image src={homepageimage}
                className="shadow-slate-800 shadow-lg"/>
                </figure>
            <figcaption className="font-light italic text-slate-600">..and this is me holding a staff
            </figcaption>
  </div>
  </div>
 )
}