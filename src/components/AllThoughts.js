import React from 'react'
import Link from "next/link"
import useFetchAllThoughts from "../../hooks/useFetchAllThoughts"

const AllThoughts = () => {
    const [thoughtData, loading] = useFetchAllThoughts()

  return (
<>
  <div className="max-w-screen py-36 p-4 relative flex flex-col items-center lg:mt-24 lg:ml-16 lg:mr-16 aboutMe">
      <h1 className="font-bold text-3xl sm:text-4xl mb-16 text-slate-700">I sometimes publish my thoughts on Substack</h1>
    {loading ? <p>Click to visit my Substack</p> : (<>
        {Object.keys(thoughtData).length > 0 && thoughtData.map((thought) => {
          return (
            <div key={thought.name} className="min-w-[300px] md:min-w-[600px] max-w-1/2 flex justify-between my-4">
              <h2 className="md:text-xl text-sm"><Link href={`/thoughts/${thought.name}`}>{thought.name}</Link></h2><p className="md:text-lg text-sm">{thought.date}</p>
            </div>)
        })}
      </>
    )}
  </div>
</> 
 )
}

export default AllThoughts