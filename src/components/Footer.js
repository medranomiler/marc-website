import React from 'react'
import Link from "next/link"
import { useRouter } from 'next/router'
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2"

const Footer = () => {
  const router = useRouter()

  return (
    <div className="flex justify-center items-center text-black p-8">

      { router.pathname === "/" && (<>
        <Link href="/">
          <p className="mx-4  text-center font-bold text-md">Home</p>
        </Link>
        <Link href="/btcpairs" className="flex items-center">
          <p className="ml-4 text-right text-sm text-slate-400 hover:text-black">About</p>
          <HiArrowLongRight className="w-10 h-10" />
        </Link>
      </>)}
      
      { router.pathname === "/about" && (<>
        <Link href="/" className="flex items-center">
        <HiArrowLongLeft className="w-10 h-10" />
          <p className="text-sm text-slate-400 hover:text-black">Home</p>
        </Link>
        <Link href="/about">
          <p className="mx-4  text-center font-bold text-md">About</p>
        </Link>
        <Link href="/btcpairs" className="flex items-center">
          <p className="ml-4 text-right text-sm text-slate-400 hover:text-black">BTC Currency Pairs</p>
          <HiArrowLongRight className="w-10 h-10" />
        </Link>
      </>)}


      { router.pathname === "/btcpairs" && (<>
        <Link href="/about" className="flex items-center">
        <HiArrowLongLeft className="w-10 h-10" />
          <p className="text-sm text-slate-400 hover:text-black">About</p>
        </Link>
        <Link href="/btcpairs">
          <p className="text-center mx-4 font-bold text-md">BTC Currency Pairs</p>
        </Link>
        <Link href="/doingnow" className="flex items-center">
          <p className="ml-4 text-right text-sm text-slate-400 hover:text-black">Doing Now</p>
          <HiArrowLongRight className="w-10 h-10" />
        </Link>
      </>)}

      { router.pathname === "/doingnow" && (<>
        <Link href="/btcpairs" className="flex items-center">
        <HiArrowLongLeft className="w-10 h-10" />
          <p className="text-sm text-slate-400 hover:text-black">BTC Currency Pairs</p>
        </Link>
        <Link href="/doingnow">
          <p className="mx-4  text-center font-bold text-md">Doing Now</p>
        </Link>
        <Link href="/thoughts" className="flex items-center">
          <p className="ml-4 text-right text-sm text-slate-400 hover:text-black">Thoughts</p>
          <HiArrowLongRight className="w-10 h-10" />
        </Link>
      </>)}


      { router.pathname === "/thoughts" && (<>
        <Link href="/doingnow" className="flex items-center">
        <HiArrowLongLeft className="w-10 h-10" />
          <p className="text-sm text-slate-400 hover:text-black">Doing Now</p>
        </Link>
        <Link href="/thoughts">
          <p className="mx-4 font-bold text-md">Thoughts</p>
        </Link>
        <Link href="/collaborate" className="flex items-center">
          <p className="ml-4 text-right text-sm text-slate-400 hover:text-black">Collaborate</p>
          <HiArrowLongRight className="w-10 h-10" />
        </Link>
      </>)}


      { router.pathname === "/collaborate" && (<>
        <Link href="/thoughts" className="flex items-center">
        <HiArrowLongLeft className="w-10 h-10" />
          <p className="text-sm text-slate-400 hover:text-black">Thoughts</p>
        </Link>
        <Link href="/collaborate">
          <p className="mx-4 font-bold text-md">Collaborate</p>
        </Link>
      </>)}
      

    </div>
  )
}

export default Footer
