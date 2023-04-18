import React from 'react'
import Link from "next/link"
import { useRouter } from 'next/router'
import { CgArrowLongRight, CgArrowLongLeft } from "react-icons/cg"
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat ({
  weight: ['300' , '400'],
  subsets: [ 'latin']
})

const Footer = () => {
  const router = useRouter()

  return (
    <div className={`${montserrat.className} flex justify-center items-center text-black py-8 max-w-full z-99`}>

      { router.pathname === "/" && (<>
        <Link href="/">
          <p className="mx-4  text-center font-bold text-sm">Home</p>
        </Link>
        <Link href="/about" className="flex items-center">
          <p className="ml-4 text-right text-xs text-slate-400 hover:text-black">About</p>
          <CgArrowLongRight className="w-4 h-auto ml-2" />
        </Link>
      </>)}
      
      { router.pathname === "/about" && (<>
        <Link href="/" className="flex items-center">
        <CgArrowLongLeft className="w-4 h-auto mr-2" />
          <p className="text-xs text-slate-400 hover:text-black">Home</p>
        </Link>
        <Link href="/about">
          <p className="mx-4  text-center font-bold text-sm">About</p>
        </Link>
        <Link href="/btcpairs" className="flex items-center">
          <p className="ml-4 text-right text-xs text-slate-400 hover:text-black">BTC Pairs</p>
          <CgArrowLongRight className="w-4 h-auto ml-2" />
        </Link>
      </>)}


      { router.pathname === "/btcpairs" && (<>
        <Link href="/about" className="flex items-center">
        <CgArrowLongLeft className="w-4 h-auto mr-2" />
          <p className="text-xs text-slate-400 hover:text-black">About</p>
        </Link>
        <Link href="/btcpairs">
          <p className="text-center mx-4 font-bold text-sm">BTC Pairs</p>
        </Link>
        <Link href="/doingnow" className="flex items-center">
          <p className="ml-4 text-right text-xs text-slate-400 hover:text-black">Doing Now</p>
          <CgArrowLongRight className="w-4 h-auto ml-2" />
        </Link>
      </>)}

      { router.pathname === "/doingnow" && (<>
        <Link href="/btcpairs" className="flex items-center">
        <CgArrowLongLeft className="w-4 h-auto mr-2" />
          <p className="text-xs text-slate-400 hover:text-black">BTC Pairs</p>
        </Link>
        <Link href="/doingnow">
          <p className="mx-4  text-center font-bold text-sm">Doing Now</p>
        </Link>
        <Link href="/thoughts" className="flex items-center">
          <p className="ml-4 text-right text-xs text-slate-400 hover:text-black">Thoughts</p>
          <CgArrowLongRight className="w-4 h-auto ml-2" />
        </Link>
      </>)}


      { router.pathname === "/thoughts" && (<>
        <Link href="/doingnow" className="flex items-center">
        <CgArrowLongLeft className="w-4 h-auto mr-2" />
          <p className="text-xs text-slate-400 hover:text-black">Doing Now</p>
        </Link>
        <Link href="/thoughts">
          <p className="mx-4 font-bold text-sm">Thoughts</p>
        </Link>
        <Link href="/collaborate" className="flex items-center">
          <p className="ml-4 text-right text-xs text-slate-400 hover:text-black">Collaborate</p>
          <CgArrowLongRight className="w-4 h-auto ml-2" />
        </Link>
      </>)}


      { router.pathname === "/collaborate" && (<>
        <Link href="/thoughts" className="flex items-center">
        <CgArrowLongLeft className="w-4 h-auto mr-2" />
          <p className="text-xs text-slate-400 hover:text-black">Thoughts</p>
        </Link>
        <Link href="/collaborate">
          <p className="mx-4 font-bold text-sm">Collaborate</p>
        </Link>
      </>)}
      

    </div>
  )
}

export default Footer
