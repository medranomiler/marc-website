import React from 'react'
import { useState, useEffect } from "react"


const useFetchAllThoughts = () => {
    const [thoughtData, setthoughtData] = useState({})
    const [loading, setLoading] = useState(true)
  
  
  
    useEffect(() => {
        async function parseThought() {
            // const url = `http://localhost:3000/api/thoughtroutes`
            const url = `https://https://marc-mckirahan.vercel.app/api/thoughtroutes`
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

    return [thoughtData, loading]
}

export default useFetchAllThoughts