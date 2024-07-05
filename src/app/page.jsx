"use client"
import React from 'react'
import client from './utils.js';
import signInWithGithub from './utils.js';

const Home = () => {
  const handleGithubOAuth = async () => {
    console.log("clicked")
    await signInWithGithub()
  };
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <button
        onClick={handleGithubOAuth}
        className="bg-gray-900 text-white font-bold py-2 px-4 rounded hover:bg-gray-700">
        Continue with GitHub
      </button>

    </div>
  )
}

export default Home