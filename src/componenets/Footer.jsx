import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-white py-6'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
    <div className='flex-1 mb-4 md:mb-0'>
      <h3 className='text-2xl mb-2'>Ezhumalai M</h3>
      <p className='text-gray-400'>Front End Developer</p>
    </div>
    <div className='flex-1 w-full'>
        <form className='flex items-center justify-center'>
            <input type="email" className='w-full p-2 rounded-lg bg-gray-800 border border-gray-600' />
            <button className='bg-gradient-to-r from-green-400 to-blue-500 ml-4 transform transition-transform duration-300 rounded-full px-4 py-2'>Submit</button>
        </form>
    </div>
    </div>
    <div>
        <p className='pb-2'>&copy;{new Date().getFullYear()}</p>
        <div className='flex justify-between '>
            <a href="" className='text-gray-600  '>Facebook</a>
            <a href="linkedin.com/in/ezhumalai-m-60262a250" className='text-gray-600 '>LinkeIn</a>
            <a href="https://www.instagram.com/7hill_stranger007?igsh=MW9jdWR2dmUxM2JzcQ==" className='text-gray-600 '>Instagram</a>
            <a href="https://github.com/ezhumalai-murugavel" className='text-gray-600 '>Github</a>
        </div>
    </div>
    </div>
    </footer>
  )
}

export default Footer
