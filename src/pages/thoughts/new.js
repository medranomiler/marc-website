import React from 'react'
import { useState, useEffect } from "react"
import Router from "next/router"
import Link from "next/link"


const NewThought = () => {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState("2023-01-31");
    const [errorMessage, setErrorMessage] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/thoughtroutes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, content, date }),
        });
        const { error } = await response.json()
        
        if(!error){
            Router.push('/thoughts')
        }
        else {
          setErrorMessage(error);
        }
      };

      useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setLoggedIn(true);
        }
    }, []);

  return (
    <div className="max-w-screen py-36 p-4 relative flex flex-col items-center lg:m-16 aboutMe">
      {loggedIn? (<>
    <h1 className="text-3xl">Create New Thought</h1>
        <form className="p-4 relative flex flex-col items-center md:w-1/3 lg:w-1/2 w-full"
        onSubmit={handleSubmit}>
            <input type="text" 
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-2" placeholder="title"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <textarea id="message" rows="16" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-2" placeholder="Write your thoughts here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <div className="m-2 flex flex-col items-center ">
            <label for="start">Created Date:</label>
            <input type="date"
                   value={date}
                   onChange={(e) => setDate(e.target.value)}
                   min="2023-01-01" max="2024-12-31"
                   className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
             </div>      
               <button type="submit" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800">
       Publish Thought
   </button>
        </form>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </>) : (
          <>
          <h1 className="text-2xl">Login to post a new thought</h1>
          <p className="text-blue-400 hover:text-blue-700"><Link href="/login">go to login page</Link></p>
          </>
        )}
    </div>
  )
}

export default NewThought
