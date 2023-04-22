import Head from 'next/head'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="max-w-screen p-4 pt-12 flex flex-col items-center relative lg:m-10 aboutMe">
      <div className="flex flex-col items-center mx-auto w-full md:w-1/2 xl:w-1/3 mb-24">
          <h2 className="font-bold text-2xl sm:text-3xl mb-4">
            Hello there!
          </h2>
          <h1 className="font-bold text-3xl sm:text-4xl mb-4">
            My name is Marc
          </h1>
          <p className="leading-8">I am a perpetual student in the game of life.
            <br/>
             I like doing things. Mostly things that have to do with 
             bitcoin, technology, and finance.
             Peek around to learn more about me.
             <br/>
             Keep running. 
          </p>
          <img src="https://pbs.twimg.com/media/FlEA8bAWYAEO5QI.jpg" />
      </div>
    </div>
  )
}

