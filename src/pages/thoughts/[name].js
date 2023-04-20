import React from 'react'
import { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import Head from 'next/head'
import AllThoughts from "../../components/AllThoughts"
import Link from 'next/link'

const ThoughtPage = () => {
    const [thoughtData, setthoughtData] = useState({})
    const [loading, setLoading] = useState(true)

    const router = useRouter()
    const { name = "" } = router.query

    useEffect(() => {
        async function parseThought() {
            // const url = `http://localhost:3000/api/thoughtroutes?name=${name}`
            const url = `https://www.marcmckirahan.com/api/thoughtroutes?name=${name}`
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
            {loading && (<div className="h-screen flex justify-center items-center">
                Loading thought...
            </div>)}
            {!loading && Object.keys(thoughtData).length > 0 && (
                <>
                <div className="max-w-screen py-36 p-4 relative flex flex-col items-center lg:m-16 aboutMe">
                    <h1 className="sm:text-4xl text-3xl mb-16">{thoughtData.name}</h1>
                    <div className="mx-auto w-full md:w-1/2 xl:w-1/3 mb-24 leading-8">
                    <p>
                        {thoughtData.content}
                    </p>
                    <br />
                    <p>
                        {thoughtData.date}
                    </p>
                    </div>
                </div>
                <AllThoughts/>
                </>
            )}
        </>
    )
}

export default ThoughtPage