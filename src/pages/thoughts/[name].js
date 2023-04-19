import React from 'react'
import { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

const ThoughtPage = () => {
    const [thoughtData, setthoughtData] = useState({})
    const [loading, setLoading] = useState(true)

    const router = useRouter()
    const { name = "" } = router.query

    useEffect(() => {
        async function parseThought() {
            // const url = `http://localhost:3000/api/thoughtroutes?name=${name}`

            const url = `https://marc-mckirahan.vercel.app/api/thoughtroutes?name=${name}`
            const res = await fetch(url)
            const data = await res.json()

            const thoughtPostData = {
                name: data.name,
                content: data.content,
                date: data.date
            }

            setthoughtData(thoughtPostData)
            setLoading(false)
        }
        parseThought()
    }, [name])

    return (
        <>
            <Head>
                <title>{thoughtData.name}</title>
            </Head>
            {loading && (<div className="h-screen flex justify-center items-center bg-black">
                Loading thought...
            </div>)}
            {!loading && Object.keys(thoughtData).length > 0 && (
                <div className="h-screen text-2xl text-black">
                    <p>
                        {thoughtData.name}
                    </p>
                    <br />
                    <p>
                        {thoughtData.content}
                    </p>
                    <br />
                    <p>
                        {thoughtData.date}
                    </p>
                </div>
            )}
        </>
    )
}

export default ThoughtPage