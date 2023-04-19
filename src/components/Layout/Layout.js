import Navbar from "./Navbar.js"
import Footer from "./Footer.js"
import Head from "next/head"
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat ({
  weight: ['300' , '400'],
  subsets: [ 'latin']
})


const Layout = ({ children }) =>{
  return (
    <>
          <Head>
        <title>MARC MCKIRAHAN</title>
        <meta name="description" content="My Personal Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon"/>
      </Head>
      <Navbar/>
      <main className={`${montserrat.className}`}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout