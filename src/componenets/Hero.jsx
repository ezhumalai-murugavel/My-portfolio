import React from 'react'
import images from '../assets/7hill.jpeg'
const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
      <img src={images} alt="" className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105' />
      <h1 className='text-4xl font-bold'>I am{" "} 
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500'>Ezhumalai M,</span>
        FrontEnd Developer
      </h1>
      <p className='mt-4 text-lg text-gray-400'>I am enthusist front End developer,I know the Front End Developing tools</p>
      <div className='mt-4 space-x-4'>
      <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 rounded-full px-4 py-2  hover:scale-105'>Contact me </button>
      <button className=' bg-gradient-to-r from-red-400 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 rounded-full px-4 py-2  hover:scale-105'>Resume</button>
      </div>
    </div>
  )
}

export default Hero
