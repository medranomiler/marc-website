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
            <p className="text-xs text-slate-600 font-bold">home</p>
          </Link>

          <Link href="/about" className="flex items-center">
            <p className="text-right text-xs text-slate-400 hover:text-slate-600">about</p>
            <CgArrowLongRight className="w-4 h-auto text-slate-400 ml-2" />
          </Link>

        </div>
      )}

      {router.pathname === "/about" && (
        <div className="flex justify-between space-x-2">

          <Link href="/" className="flex items-center">
            <CgArrowLongLeft className="w-4 h-auto mr-2 text-slate-600" />
            <p className="text-xs text-slate-400 hover:text-slate-600">home</p>
          </Link>

          <Link href="/about" className="flex items-center">
            <p className="font-bold text-xs text-slate-600">about</p>
          </Link>

          <Link href="/btcpairs" className="flex items-center">
            <p className="text-right text-xs text-slate-400 hover:text-slate-600">BTC pairs</p>
            <CgArrowLongRight className="w-4 h-auto ml-2 text-slate-600" />
          </Link>

        </div>

      )}


      {router.pathname === "/btcpairs" && (
        <div className="flex justify-between space-x-2">

          <Link href="/about" className="flex items-center">
            <CgArrowLongLeft className="w-4 h-auto mr-2 text-slate-600" />
            <p className="text-xs text-slate-400 hover:text-slate-600">about</p>
          </Link>

          <Link href="/btcpairs" className="flex items-center">
            <p className="font-bold text-xs text-slate-600">BTC pairs</p>
          </Link>

          <Link href="/doingnow" className="flex items-center">
            <p className="text-right text-xs text-slate-400 hover:text-slate-600">doing now</p>
            <CgArrowLongRight className="w-4 h-auto ml-2 text-slate-600" />
          </Link>

        </div>
      )}

      {router.pathname === "/doingnow" && (
        <div className="flex justify-between space-x-2">

          <Link href="/btcpairs" className="flex items-center">
            <CgArrowLongLeft className="w-4 h-auto mr-2 text-slate-600" />
            <p className="text-xs text-slate-400 hover:text-slate-600">BTC pairs</p>
          </Link>

          <Link href="/doingnow" className="flex items-center">
            <p className="font-bold text-xs text-slate-600">doing now</p>
          </Link>

          <Link href="/thoughts" className="flex items-center">
            <p className="text-right text-xs text-slate-400 hover:text-slate-600">thoughts</p>
            <CgArrowLongRight className="w-4 h-auto ml-2 text-slate-600" />
          </Link>

        </div>
      )}


      {router.pathname === "/thoughts" && (
        <div className="flex justify-between space-x-2">

          <Link href="/doingnow" className="flex items-center">
            <CgArrowLongLeft className="w-4 h-auto mr-2 text-slate-600" />
            <p className="text-xs text-slate-400 hover:text-slate-600">doing now</p>
          </Link>

          <Link href="/thoughts" className="flex items-center">
            <p className="font-bold text-xs text-slate-600">thoughts</p>
          </Link>

          <Link href="/collaborate" className="flex items-center">
            <p className="text-right text-xs text-slate-400 hover:text-slate-600">collaborate</p>
            <CgArrowLongRight className="w-4 h-auto ml-2 text-slate-600" />
          </Link>

        </div>
      )}


      {router.pathname === "/collaborate" && (
        <div className="flex justify-between space-x-2">

          <Link href="/thoughts" className="flex items-center">
            <CgArrowLongLeft className="w-4 h-auto mr-2 text-slate-600" />
            <p className="text-xs text-slate-400 hover:text-slate-600">thoughts</p>
          </Link>

          <Link href="/collaborate">
            <p className="mx-2 font-bold text-xs text-slate-600">collaborate</p>
          </Link>

        </div>
      )}


    </div>
  )
}

export default Footer
