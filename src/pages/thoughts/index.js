import React from 'react'
import Link from "next/link"
import { useEffect, useState } from 'react'



const Thoughts = () => {
  const [thoughtData, setthoughtData] = useState({})
  const [loading, setLoading] = useState(true)



  useEffect(() => {
      async function parseThought() {
          // const url = `http://localhost:3000/api/thoughtroutes`
          const url = `https://marc-mckirahan.vercel.app/api/thoughtroutes`
          const res = await fetch(url)
          const data = await res.json()

          const thoughtPostData = data.map(thought => ({
              name: thought.name,
              content: thought.content,
              date: thought.date
          }))
          console.log(thoughtPostData)
          setthoughtData(thoughtPostData)
          setLoading(false)
      }
      parseThought()
  }, [])

  return (
<div className="max-w-screen py-36 p-4 relative flex flex-col items-center">
  <h1 className="text-2xl text-center font-bold mb-4">Thoughts</h1>
  {Object.keys(thoughtData).length > 0 && thoughtData.map((thought) => {
    return (
    <div key={thought.name} className="flex space-x-8 my-4">
    <h2 className="text-xl"><Link href={`/thoughts/${thought.name}`}>{thought.name}</Link></h2><p className="text-lg">{thought.date}</p>
  </div>)
})}
  
<div className="absolute top-0 left-0 w-full h-full bg-[url('../../public/genesisColored.svg')] opacity-[0.05] bg-image object-cover"/>
    </div>
  )
}

export default Thoughts