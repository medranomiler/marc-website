import React from 'react'
import Link from "next/link"
import { useRouter } from 'next/router'
import { CgArrowLongRight, CgArrowLongLeft } from "react-icons/cg"
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['300', '700'],
  subsets: ['latin']
})

const Footer = () => {
  const router = useRouter()

  return (
    <div className={`${montserrat.className} flex justify-center items-center py-8 max-w-full z-99`}>

      {router.pathname === "/" && (
        <div className="flex justify-between space-x-2">

          <Link href="/" className="flex items-center">
            <p className="text-xs text-slate-800 font-bold">Home</p>
          </Link>

          <Link href="/about" className="flex items-center">
            <p className="text-right text-xs text-slate-800 hover:text-slate-950">About</p>
            <CgArrowLongRight className="w-4 h-auto text-slate-800 ml-2" />
          </Link>

        </div>
      )}

      {router.pathname === "/about" && (
        <div className="flex justify-between space-x-2 text-slate-800">

          <Link href="/" className="flex items-center">
            <CgArrowLongLeft className="w-4 h-auto mr-2 text-slate-800" />
            <p className="text-xs text-slate-800 hover:text-slate-950">Home</p>
          </Link>

          <Link href="/about" className="flex items-center">
            <p className="font-bold text-xs text-slate-800">About</p>
          </Link>

          <Link href="/btcpairs" className="flex items-center">
            <p className="text-right text-xs text-slate-800 hover:text-slate-950">BTC Pairs</p>
            <CgArrowLongRight className="w-4 h-auto ml-2 text-slate-800" />
          </Link>

        </div>

      )}


      {router.pathname === "/btcpairs" && (
        <div className="flex justify-between space-x-2">

          <Link href="/about" className="flex items-center">
            <CgArrowLongLeft className="w-4 h-auto mr-2 text-slate-800" />
            <p className="text-xs text-slate-800 hover:text-slate-950">About</p>
          </Link>

          <Link href="/btcpairs" className="flex items-center">
            <p className="font-bold text-xs text-slate-800">BTC Pairs</p>
          </Link>

          <Link href="/doingnow" className="flex items-center">
            <p className="text-right text-xs text-slate-800 hover:text-slate-950">Doing Now</p>
            <CgArrowLongRight className="w-4 h-auto ml-2 text-slate-800" />
          </Link>

        </div>
      )}

      {router.pathname === "/doingnow" && (
        <div className="flex justify-between space-x-2">

          <Link href="/btcpairs" className="flex items-center">
            <CgArrowLongLeft className="w-4 h-auto mr-2 text-slate-800" />
            <p className="text-xs text-slate-800 hover:text-slate-950">BTC Pairs</p>
          </Link>

          <Link href="/doingnow" className="flex items-center">
            <p className="font-bold text-xs text-slate-800">Doing Now</p>
          </Link>

          <Link href="/thoughts" className="flex items-center">
            <p className="text-right text-xs text-slate-800 hover:text-slate-950">Thoughts</p>
            <CgArrowLongRight className="w-4 h-auto ml-2 text-slate-800" />
          </Link>

        </div>
      )}


      {router.pathname === "/thoughts" && (
        <div className="flex justify-between space-x-2">

          <Link href="/doingnow" className="flex items-center">
            <CgArrowLongLeft className="w-4 h-auto mr-2 text-slate-800" />
            <p className="text-xs text-slate-800 hover:text-slate-950">Doing Now</p>
          </Link>

          <Link href="/thoughts" className="flex items-center">
            <p className="font-bold text-xs text-slate-800">Thoughts</p>
          </Link>

          <Link href="/collaborate" className="flex items-center">
            <p className="text-right text-xs text-slate-800 hover:text-slate-950">Collaborate</p>
            <CgArrowLongRight className="w-4 h-auto ml-2 text-slate-800" />
          </Link>

        </div>
      )}


      {router.pathname === "/collaborate" && (
        <div className="flex justify-between space-x-2">

          <Link href="/thoughts" className="flex items-center">
            <CgArrowLongLeft className="w-4 h-auto mr-2 text-slate-800" />
            <p className="text-xs text-slate-800 hover:text-slate-950">Thoughts</p>
          </Link>

          <Link href="/collaborate">
            <p className="mx-2 font-bold text-xs text-slate-800">Collaborate</p>
          </Link>

        </div>
      )}


    </div>
  )
}

export default Footer
