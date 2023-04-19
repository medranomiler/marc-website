import React from 'react'
import Link from "next/link"

const Login = () => {
    const loggedIn = false

  return (
    <div className="p-4 flex flex-col items-center">
       {loggedIn? <button className="bg-gray-200 p-2 rounded"><Link href="/">Log Out</Link></button> : 
       (<>
       <input className="w-96 h-16 border border-gray-200" type="text" placeholder="username"/>
        <input className="w-96 h-16 border border-gray-200" type="password" placeholder="password"/>
       </>)}
    </div>
  )
}

export default Login