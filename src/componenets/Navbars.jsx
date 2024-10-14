import React from 'react'

const Navbars = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className=' container py-2 flex justify-center md:justify-between items-center'>
        <div className='   text-2xl font-bold hidden md:inline'>Ezhumalai M</div>
          <div className='space-x-6'>
            
            <a href="#Home" className='hover:text-gray-400'>Home</a>
            <a href="#about" className='hover:text-gray-400'>About</a>
            <a href="#project" className='hover:text-gray-400'>Projects</a>
            <a href="#contact" className='hover:text-gray-400'>Contacts</a>
           
            
          </div>
          <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 rounded-full px-4 py-2  hover:scale-105'>Connect me</button>
      </div>
    </nav>
  )
}

export default Navbars
